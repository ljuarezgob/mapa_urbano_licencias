L.SingleTile = L.ImageOverlay.extend({
    defaultWmsParams: {
        service: 'WMS',
        request: 'GetMap',
        version: '1.1.1',
        layers: '',
        styles: '',
        format: 'image/png',
        transparent: false
    },

    initialize: function ( url, options ) {
        var wmsParams = L.extend({}, this.defaultWmsParams),
            tileSize = options.tileSize || this.options.tileSize;

        for (var i in options) {
            // all keys that are not TileLayer options go to WMS params
            if (!this.options.hasOwnProperty(i) && i !== 'crs') {
                wmsParams[i] = options[i];
            }
        }

        this.wmsParams = wmsParams;

        L.ImageOverlay.prototype.initialize.call(this, url, null, options);
    },

    onAdd: function (map) {

        this._crs = this.options.crs || map.options.crs;

        this._wmsVersion = parseFloat(this.wmsParams.version);

        var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
        this.wmsParams[projectionKey] = this._crs.code;

        L.ImageOverlay.prototype.onAdd.call(this, map);
        map.on('moveend', this._updateImageUrl, this);
    },

    setParams: function (params) {
        L.extend(this.wmsParams, params);
        return this;
    },

    redraw: function () {
        this._updateImageUrl();
    },

    onRemove: function (map) {
        map.on('moveend', this._updateImageUrl, this);
        L.ImageOverlay.prototype.onRemove.call(this, map);
    },

    // Copypasted from L.ImageOverlay (dirty hack)
    _initImage: function () {
        this._image = L.DomUtil.create('img', 'leaflet-image-layer');

        if (this._map.options.zoomAnimation && L.Browser.any3d) {
            L.DomUtil.addClass(this._image, 'leaflet-zoom-animated');
        } else {
            L.DomUtil.addClass(this._image, 'leaflet-zoom-hide');
        }

        this._updateOpacity();
        this._bounds = this._map.getBounds();

        L.extend(this._image, {
            galleryimg: 'no',
            onselectstart: L.Util.falseFn,
            onmousemove: L.Util.falseFn,
            onload: L.bind(this._onImageLoad, this),
            src: this._constructUrl()
        });
    },

    _onImageLoad: function () {
        this._bounds = this._map.getBounds();
        this._reset();
        this.fire('load');
    },

    _updateImageUrl: function () {
        this._image.src = this._constructUrl();
    },

    _constructUrl: function () {
        var map = this._map;

        var size = map.getSize();
        var b = map.getBounds();

        var nw = this._crs.project(b.getNorthWest());
        var se = this._crs.project(b.getSouthEast());
        var bbox = this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ?
            [se.y, nw.x, nw.y, se.x].join(',') :
            [nw.x, se.y, se.x, nw.y].join(',');

        var params = L.Util.getParamString(this.wmsParams, this._url, true) + '&BBOX=' + bbox + '&WIDTH=' + size.x + '&HEIGHT=' + size.y;

        return this._url + params;
    }
});

L.singleTile = function (url, options) {
    return new L.SingleTile(url, options);
};