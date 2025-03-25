/**
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
L.drawVersion = '0.4.2';
/**
 * @class L.Draw
 * @aka Draw
 *
 *
 * To add the draw toolbar set the option drawControl: true in the map options.
 *
 * @example
 * ```js
 *      var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 * ```
 *
 * ### Adding the edit toolbar
 * To use the edit toolbar you must initialise the Leaflet.draw control and manually add it to the map.
 *
 * ```js
 *      var map = L.map('map').setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 *
 *      // FeatureGroup is to store editable layers
 *      var drawnItems = new L.FeatureGroup();
 *      map.addLayer(drawnItems);
 *
 *      var drawControl = new L.Control.Draw({
 *          edit: {
 *              featureGroup: drawnItems
 *          }
 *      });
 *      map.addControl(drawControl);
 * ```
 *
 * The key here is the featureGroup option. This tells the plugin which FeatureGroup contains the layers that
 * should be editable. The featureGroup can contain 0 or more features with geometry types Point, LineString, and Polygon.
 * Leaflet.draw does not work with multigeometry features such as MultiPoint, MultiLineString, MultiPolygon,
 * or GeometryCollection. If you need to add multigeometry features to the draw plugin, convert them to a
 * FeatureCollection of non-multigeometries (Points, LineStrings, or Polygons).
 */
L.Draw = {};

/**
 * @class L.drawLocal
 * @aka L.drawLocal
 *
 * The core toolbar class of the API — it is used to create the toolbar ui
 *
 * @example
 * ```js
 *      var modifiedDraw = L.drawLocal.extend({
 *          draw: {
 *              toolbar: {
 *                  buttons: {
 *                      polygon: 'Draw an awesome polygon'
 *                  }
 *              }
 *          }
 *      });
 * ```
 *
 * The default state for the control is the draw toolbar just below the zoom control.
 *  This will allow map users to draw vectors and markers.
 *  **Please note the edit toolbar is not enabled by default.**
 */
L.drawLocal = {
	// format: {
	// 	numeric: {
	// 		delimiters: {
	// 			thousands: ',',
	// 			decimal: '.'
	// 		}
	// 	}
	// },
	draw: {
		toolbar: {
			// #TODO: this should be reorganized where actions are nested in actions
			// ex: actions.undo  or actions.cancel
			actions: {
				title: 'Cancelar dibujo',
				text: 'Cancelar'
			},
			finish: {
				title: 'Terminar dibujo',
				text: 'Terminar'
			},
			undo: {
				title: 'Borrar el ultimo punto dibujado.',
				text: 'Borrar ultimo punto'
			},
			buttons: {
				polyline: 'Dibujar una polilinea',
				polygon: 'Dibujar un polígono',
				rectangle: 'Dibujar un rectángulo',
				circle: 'Dibujar un círculo',
				marker: 'Dibujar un punto',
				circlemarker: 'Dibujar un punto circular'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Click y arratrar ratón para dibujar el círculo.'
				},
				radius: 'Radius'
			},
			circlemarker: {
				tooltip: {
					start: 'Click map to place circle marker.'
				}
			},
			marker: {
				tooltip: {
					start: 'Click map to place marker.'
				}
			},
			polygon: {
				tooltip: {
					start: 'Click para comenzar a dibujar un polígono.',
					cont: 'Click para continuar dibujo de polígono.',
					end: 'Click sobre el primer punto para cerrar polígono.'
				}
			},
			polyline: {
				error: '<strong>Error:</strong> shape edges cannot cross!',
				tooltip: {
					start: 'Click to start drawing line.',
					cont: 'Click to continue drawing line.',
					end: 'Click last point to finish line.'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Click y arratrar ratón para dibujar el rectángulo.'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Soltar el ratón para terminar el dibujo.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Guardar Cambios',
					text: 'Guardar'
				},
				cancel: {
					title: 'Cancelar edición, descartar todos los cambios',
					text: 'Cancelar'
				},
				clearAll: {
					title: 'Eliminar todas las capas',
					text: 'Eliminar Todo'
				}
			},
			buttons: {
				edit: 'Editar Capas',
				editDisabled: 'No hay capas para editar',
				remove: 'Eliminar Capas',
				removeDisabled: 'No hay capas para eliminar'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Arrastre los marcadores para editar figura.',
					subtext: 'Click cancelar para descartar cambios.'
				}
			},
			remove: {
				tooltip: {
					text: 'Click en el figura para eliminar.'
				}
			}
		}
	}
};
