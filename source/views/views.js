/**
 For simple applications, you might define all of your views in this file.  
 For more complex applications, you might choose to separate these kind definitions 
 into multiple files under this folder.
 */

enyo.kind({
    name: "myapp.MainView",
    kind: "FittableRows",
    classes: "onyx enyo-fit",
    published: {
        lan: "EN",
        content: {},
        sushiMenu: {},
        activeMenu: "Home",
        generalMenu: {},
        gallery: [],
        apiVersion: '3',
        otherMapParams: 'sensor=true&libraries=geometry,places',
        zoom: 18,
        center: null
    },
    components: [
        {name: "outer_panel_wrapper", kind: "Panels", fit: true, onTransitionFinish: "outerPanelSlideFinish",
            classes: "panels-outer-sliding-panels", arrangerKind: "CollapsingArranger", draggable: false,
            realtimeFit: true, components: [
                {name: "first_outer_panel", panelIndex: 0, components: [
                        {name:"hidden_menu_scroller", kind: "Scroller", classes: "enyo-fit hidden-menu-scroller", horizontal: "hidden",
                            touch: true, components: [
                                {kind: "onyx.Toolbar", content: "Navigation", classes: "menu-toolbar"},
                                {name: "hidden_menu_repeater", kind: "Repeater",
                                    classes: "enyo-fit", touch: true, style:"position: relative",
                                    onSetupItem: "setupHiddenMenuItem", item: "hidden_menu_item",
                                    components: [
                                        {
                                            name: "hidden_menu_item",
                                            classes: "panels-sample-sliding-item hidden-menu-item",
                                            ontap: "hiddenMenuItemTapped"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {name: "second_outer_panel", panelIndex: 1, fit: true, components: [
                        {name: "inner_wrapper", kind: "FittableRows",
                            classes: "onyx enyo-fit", components: [
                                {kind: "onyx.Toolbar", content: "Home", classes: "toolbar",
                                    style: "text-align: center; height: 56px",
                                    components: [
                                        {name: "goto_menu_btn", kind: "onyx.Button", style: "background-color: lightgrey",
                                            ontap: "goto_menu_btnTapped", classes: "goto-menu-btn",
                                            components: [
                                                {tag: "img", src: "assets/images/menu.png"}
                                            ]
                                        },
                                        {name: "go_back_btn", kind: "onyx.Button", style: "background-color: lightgrey",
                                            ontap: "go_back_btnTapped", classes: "go-back-btn",
                                            showing: false,
                                            components: [
                                                {tag: "img", src: "assets/images/prev.png", style: "height: 20px"},
                                                {tag: "span", content: "back", classes: "back-btn-text"}
                                            ]
                                        },
                                        {name: "panel_title",
                                            classes: "panel-title"},
                                        {name: "lan_selector", classes:"lan-selector-container", components: [
                                                {name: "DU_lan", kind: "Image", classes: "lan-selector",
                                                    src: "assets/images/DU.png", ontap: "changeLanguage", lan: "DU"},
                                                {name: "EN_lan", kind: "Image", classes: "lan-selector lan-selected",
                                                    src: "assets/images/US.png", ontap: "changeLanguage", lan: "EN"}
                                            ]
                                        }
                                    ]
                                },
                                {name: "inner_pannel_wrapper", fit: true,
                                    kind: "Panels", classes: "panels-inner-sliding-panels",
                                    arrangerKind: "CollapsingArranger", onTransitionFinish: "innerPanelSlideFinish",
                                    realtimeFit: true, draggable: false, components: [
                                        {name: "first_innner_panel", fit: true,
                                            panelIndex: 0,
                                            components: [
                                                {name: "home_scroller", kind: "Scroller", classes: "enyo-fit inner-panel-scroller-content",
                                                    horizontal: "hidden",
                                                    touch: true, components: [
                                                        {name: "home_content", classes: "home-content",
                                                            components: [
                                                                {
                                                                    name: "home_articles", classes: "home-articles"
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {name: "second_innner_panel", fit: true,
                                            panelIndex: 1,
                                            components: [
                                                {name: "general_menu_scroller", kind: "Scroller", classes: "enyo-fit inner-panel-scroller-content",
                                                    horizontal: "hidden",
                                                    touch: true, components: [
                                                        {name: "general_menu_content", classes: "general-menu-content",
                                                            components: [
                                                                {
                                                                    name: "general_menu_repeater", classes: "general-menu-repeater",
                                                                    kind: "Repeater", touch: true, onSetupItem: "setupGeneralMenuItem", 
                                                                    item: "general_menu_list_item",
                                                                    components: [
                                                                        {
                                                                            name: "general_menu_list_item",
                                                                            classes: "panels-sample-sliding-item",
                                                                            ontap: "gmliTapped",
                                                                            components: [
                                                                                {tag: "span"},
                                                                                {kind: "Image", src: "assets/images/next.png", classes: "next-btn"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {name: "third_innner_panel", fit: true,
                                            panelIndex: 2,
                                            components: [
                                                {name: "general_menu_expanded_scroller", kind: "Scroller", classes: "enyo-fit inner-panel-scroller-content",
                                                    horizontal: "hidden",
                                                    touch: true, components: [
                                                        {name: "general_menu_expanded_content", classes: "general-menu-expanded-content",
                                                            components: [
                                                                {
                                                                    name: "general_menu_expanded_repeater", classes: "general-menu-expanded-repeater",
                                                                    kind: "Repeater", touch: true, onSetupItem: "setupGeneralMenuExpandedItem", 
                                                                    item: "general_menu_expanded_list_item", published: {
                                                                        dish_index: -1
                                                                    },
                                                                    components: [
                                                                        {
                                                                            name: "general_menu_expanded_list_item",
                                                                            classes: "panels-sample-sliding-item",
                                                                            components: [
                                                                                {name: "gmeiTitle", classes: "dish-title"},
                                                                                {name: "gmeiPrice", classes: "dish-price"},
                                                                                {name: "gmeiDescr", classes: "dish-description"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {name: "fourth_innner_panel", fit: true,
                                            panelIndex: 3,
                                            components: [
                                                {name: "sushi_menu_scroller", kind: "Scroller", classes: "enyo-fit inner-panel-scroller-content",
                                                    horizontal: "hidden",
                                                    touch: true, components: [
                                                        {name: "sushi_menu_content", classes: "sushi-menu-content",
                                                            components: [
                                                                {
                                                                    name: "sushi_menu_repeater", classes: "sushi-menu-repeater",
                                                                    kind: "Repeater", touch: true, onSetupItem: "setupSushiMenuItem", 
                                                                    item: "sushi_menu_list_item",
                                                                    components: [
                                                                        {
                                                                            name: "sushi_menu_list_item",
                                                                            classes: "panels-sample-sliding-item",
                                                                            ontap: "smliTapped",
                                                                            components: [
                                                                                {tag: "span"},
                                                                                {kind: "Image", src: "assets/images/next.png", classes: "next-btn"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {name: "fifth_innner_panel", fit: true,
                                            panelIndex: 4,
                                            components: [
                                                {name: "sushi_menu_expanded_scroller", kind: "Scroller", classes: "enyo-fit inner-panel-scroller-content",
                                                    horizontal: "hidden",
                                                    touch: true, components: [
                                                        {name: "sushi_menu_expanded_content", classes: "sushi-menu-expanded-content",
                                                            components: [
                                                                {
                                                                    name: "sushi_menu_expanded_repeater", classes: "sushi-menu-expanded-repeater",
                                                                    kind: "Repeater", touch: true, onSetupItem: "setupGeneralsushiExpandedItem", 
                                                                    item: "sushi_menu_expanded_list_item", published: {
                                                                        dish_index: -1
                                                                    },
                                                                    components: [
                                                                        {
                                                                            name: "sushi_menu_expanded_list_item",
                                                                            classes: "panels-sample-sliding-item",
                                                                            components: [
                                                                                {name: "smeiTitle", classes: "dish-title"},
                                                                                {name: "smeiPrice", classes: "dish-price"},
                                                                                {name: "smeiDescr", classes: "dish-description"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {name: "sixth_innner_panel", fit: true,
                                            panelIndex: 5,
                                            components: [
                                                {name: "gallery_scroller", kind: "Scroller", 
                                                    classes: "enyo-fit inner-panel-scroller-content",
                                                    horizontal: "hidden",
                                                    touch: true, components: [
                                                        {name: "gallery_content", classes: "gallery-content",
                                                            components: [
                                                                {
                                                                    name: "gallery_repeater", classes: "gallery-repeater",
                                                                    kind: "Repeater", touch: true, onSetupItem: "setupGalleryItem", 
                                                                    item: "gallery_list_item",
                                                                    components: [
                                                                        {
                                                                            name: "gallery_list_item",
                                                                            classes: "panels-sample-sliding-item",
                                                                            ontap: "galleryItemTapped",
                                                                            components: [
                                                                                {kind: "Image", style: "display: inline-block; padding: 5px;"},
                                                                                {tag: "b", classes: "gallery-list-item-text"},
                                                                                {kind: "Image", src: "assets/images/gallery_next.png", classes: "gallery-next-btn"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {name: "seventh_innner_panel", fit: true,
                                            panelIndex: 6,
                                            components: [
                                                {name: "gallery_expanded_scroller", kind: "Scroller", classes: "enyo-fit inner-panel-large-image-scroller-content",
                                                    horizontal: "hidden",
                                                    touch: true, components: [
                                                        {name: "gallery_expanded_content", classes: "gallery-expanded-content",
                                                            components: [
                                                                {
                                                                    name: "gallery_expanded_item", class:"enyo-fit",
                                                                    components: [
                                                                        {name: "gallery_image_view", kind: "ImageView",
                                                                            scale: "auto", classes: "enyo-fit",
                                                                            components: [
                                                                                {name:"gallery_dish_image", kind: "enyo.ImageViewPin", highlightAnchorPoint: true,
                                                                                    anchor: {bottom: "25px", left: "50px"},
                                                                                    position: {bottom: 0, left: 0}, components: [
                                                                                        {style: "background:rgba(255,255,255,0.6);border:1px solid #888;margin:0px;padding:10px;width:300px",
                                                                                            components: [
                                                                                                {name:"gallery_dish_name", tag: "h2", style: "text-align: center; margin: 0"},
                                                                                                {name: "gallery_dish_type", tag: "p", style: "text-align: center; color: grey; margin: 0"}
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {name: "eighth_innner_panel", fit: true,
                                            panelIndex: 7,
                                            components: [
                                                {name: "contact_scroller", kind: "Scroller",
                                                    classes: "enyo-fit inner-panel-scroller-content",
                                                    horizontal: "hidden",
                                                    touch: true,
                                                    components: [
                                                        {name: "map_container", classes: "google-map-container",
                                                            components: [
                                                                {name: "map", classes: "google-map"}
                                                            ]
                                                        },
                                                        {name: "contact_content", classes: "contact-content",
                                                            components: [
                                                                {name: "contact_info",
                                                                    components: [
                                                                        {name: "title", tag: "h1", content: "Taste Of Asia"},
                                                                        {kind: "Image", src: "assets/images/logo.png", style: "height: 50px"},
                                                                        {name: "address", tag: "h3", content: "Brusselsestraat 42b, Leuven, Belgium"},
                                                                        {name: "phone", 
                                                                            components: [
                                                                                {tag: "img", attributes: {src: "assets/images/phone.png"}, style: "vertical-align: bottom"},
                                                                                {tag: "b", content: " 016 201 434"}
                                                                            ]
                                                                        },
                                                                        {name: "email", 
                                                                            components: [
                                                                                {tag: "img", attributes: {src: "assets/images/mail.png"}, style: "vertical-align: bottom"},
                                                                                {tag: "b", content: " contact@tasteasia.be"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {name: "opening_hours",
                                                                    components: [
                                                                        {name: "opening_hours_title"},
                                                                        {name: "weekdays", 
                                                                            components: [
                                                                                {name: "WDdays", tag: "span"},
                                                                                {tag: "span", content: ": "},
                                                                                {name: "WDhours", tag: "b"}
                                                                            ]
                                                                        },
                                                                        {name: "weekends",
                                                                            components: [
                                                                                {name: "WEdays", tag: "span"},
                                                                                {tag: "span", content: ": "},
                                                                                {name: "WEhours", tag: "b"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {kind: "enyo.Anchor", name: "anchorText", href: "http://www.tasteasia.be", title: "TOA Website", content: "Goto TOA website"}
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {name: "ninth_innner_panel", fit: true,
                                            panelIndex: 8,
                                            components: [
                                                {name: "modalPopup", classes: "onyx-sample-popup", 
                                                    kind: "onyx.Popup", centered: true, modal: true, 
                                                    floating: true, scrim: true, style: "width: 300px; text-align: center; padding: 10px",
                                                    components: [
                                                        {tag: "h1"},
                                                        {tag: "br"},
                                                        {kind: "onyx.Button", content: "OK", ontap: "closeModalPopup", style: "text-align: center; border-radius: 5px"}
                                                    ]
                                                },
                                                {
                                                    name: "reservation_scroller", kind: "Scroller",
                                                    classes: "enyo-fit inner-panel-scroller-content",
                                                    horizontal: "hidden",
                                                    touch: true,
                                                    components: [
                                                        {
                                                            name: "reservation_container", classes: "reservation-container",
                                                            components: [
                                                                {classes: "onyx-sample-divider", content: "Name"},
                                                                {classes: "onyx-toolbar-inline", components: [
                                                                        {kind: "onyx.InputDecorator", alwaysLooksFocused: true, classes: "input-deco", components: [
                                                                                {name: "reservation_field_name", kind: "onyx.Input", 
                                                                                    onkeydown: "inputChanged", classes: "reservation-input-field"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {classes: "onyx-sample-divider", content: "Date"},
                                                                {classes: "onyx-toolbar-inline", components: [
                                                                        {classes: "onyx-toolbar-inline", style:"margin-left: 5%", components: [
                                                                                {name: "reseravtion_due_date", kind: "onyx.DatePicker",
                                                                                    onchange: "inputChanged"}
                                                                            ]
                                                                        }

                                                                    ]
                                                                },
                                                                {classes: "onyx-sample-divider", content: "Time"},
                                                                {classes: "onyx-toolbar-inline", style:"margin-left: 5%", components: [
                                                                        {name: "reservation_time", kind: "onyx.TimePicker", is24HrMode: true, onchange: "inputChanged"}
                                                                    ]
                                                                },
                                                                {classes: "onyx-sample-divider", content: "Number of Guests"},
                                                                {classes: "onyx-toolbar-inline", style:"margin-left: 5%", components: [
                                                                        {kind: "onyx.PickerDecorator", alwaysLooksFocused: true, components: [
                                                                                {style: "min-width: 60px;"},
                                                                                {name:"reservation_guests", kind: "onyx.IntegerPicker", min: 0, max: 25, ontap: "inputChanged"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {classes: "onyx-sample-divider", content: "Phone"},
                                                                {classes: "onyx-toolbar-inline", components: [
                                                                        {kind: "onyx.InputDecorator", alwaysLooksFocused: true, classes: "input-deco", components: [
                                                                                {name: "reservation_field_phone", kind: "onyx.Input", 
                                                                                    onkeydown: "inputChanged", classes: "reservation-input-field"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {classes: "onyx-sample-divider", content: "Email"},
                                                                {classes: "onyx-toolbar-inline", components: [
                                                                        {kind: "onyx.InputDecorator", alwaysLooksFocused: true, classes: "input-deco", components: [
                                                                                {name: "reservation_field_email", kind: "onyx.Input", 
                                                                                    onkeydown: "inputChanged", classes: "reservation-input-field"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {classes: "onyx-sample-divider", content: "Info"},
                                                                {classes: "onyx-toolbar-inline", components: [
                                                                        {kind: "onyx.InputDecorator", alwaysLooksFocused: true, classes: "input-deco", components: [
                                                                                {name: "reservation_field_info", kind: "onyx.TextArea", placeholder: "Extra information", 
                                                                                    classes: "reservation-input-field"}
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {classes: "onyx-sample-divider"},
                                                                {
                                                                    components: [
                                                                        {name:"reservation_btn", kind: "onyx.Button", content: "Make Reservation", 
                                                                            ontap: "reservation_btn_tapped", classes: "onyx-dark",
                                                                            disabled: true, style: "color: #F49200; font-size: 1.2em; margin-left: 5%; border-radius: 5px"}
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    constructor: function() {
        this.inherited(arguments);
        this.center = {
          lat: 50.879954,
          lng: 4.698179
        };
    },
    showPopup: function(inSender) {
            var p = this.$[inSender.popup];
            if (p) {
                    p.show();
            }
    },
    rendered: function() {
        this.inherited(arguments);
        this.$.outer_panel_wrapper.setIndex(1);
        this.$.inner_pannel_wrapper.setIndex(0);

        this.loadAppContent();
        this.loadDishMenu();
        this.loadSushiMenu();
        this.loadGallery();
        this.loadGoogleMaps();
    },
    loadGoogleMaps: function() {
        google.load('maps', this.apiVersion, {
            callback: enyo.bind(this, 'apiLoadHandler'),
            other_params: this.otherMapParams});
    },
    apiLoadHandler: function() {
        this.apiLoaded = true;
        if (this.hasNode()) {
            this.createMap();
            this.addMarker(this.center);
        }
    },
    createMap: function() {
        if (this.$.map.hasNode()) {
            this.map = new google.maps.Map(this.$.map.node, {
                center: new google.maps.LatLng(this.center.lat, this.center.lng),
                zoom: this.zoom,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                modeDiagnostics: false
            });
        }
    },
    addMarker: function(position) {
        var marker = new google.maps.Marker({
            position: position,
            map: this.map
        });
    },
    loadAppContent: function() {
        var req = new enyo.JsonpRequest({
            url: "http://www.tasteasia.be/services/mobile/appcontentJSON.php",
            callbackName: "callback"
        });
        // send parameters the remote service using the 'go()' method
        req.go();
        // attach responders to the transaction object
        req.response(this, "processResponse");
        // handle error
        req.error(this, "processError");
    },
    processResponse: function(inSender, inResponse) {
        this.setContent(inResponse);
        this.$.hidden_menu_repeater.setCount(this.getContent()[this.getLan()].menu.length);
        
        this.$.panel_title.setContent(this.getContent()[this.getLan()].menu[0]);
        this.fillAppContent();
        //if (this.getActiveMenu() === "Home") {
            
        //}
    },
    processError: function(inSender, inResponse) {
        //do some error handling
    },
    fillAppContent: function() {
        if (this.$.home_articles.getComponents().length > 0) {
            this.$.home_articles.destroyComponents();
        }
        for (var i = 0; i < this.getContent()[this.getLan()].content.home.length; i++) {
            this.$.home_articles.createComponent({
                components: [
                    {tag: "h1", content: this.getContent()[this.getLan()].content.home[i].title},
                    {tag: "p", allowHtml: true, content: this.getContent()[this.getLan()].content.home[i].description}
                ]
            });
        }
        this.$.hidden_menu_scroller.render();
        this.$.home_scroller.render();

        this.$.WDdays.setContent(this.getContent()[this.getLan()].content.hours.weekdays[0]);
        this.$.WEdays.setContent(this.getContent()[this.getLan()].content.hours.weekends[0]);

        this.$.WDhours.setContent(this.getContent()[this.getLan()].content.hours.weekdays[1]);
        this.$.WEhours.setContent(this.getContent()[this.getLan()].content.hours.weekends[1]);
    },
    loadDishMenu: function(inSender, inResponse) {
        var req = new enyo.JsonpRequest({
            url: "http://www.tasteasia.be/services/mobile/generalmenuJSON.php",
            callbackName: "callback"
        });
        // send parameters the remote service using the 'go()' method
        req.go();
        // attach responders to the transaction object
        req.response(this, "processGMResponse");
        // handle error
        req.error(this, "processGMError");
    },
    processGMResponse: function(inSender, inResponse) {
        this.setGeneralMenu(inResponse);
        this.$.general_menu_repeater.setCount(this.getGeneralMenu()[this.getLan()].menu.length);
        this.$.general_menu_scroller.render();
    },
    processGMError: function(inSender, inResponse) {
        //error handling here
    },
    loadSushiMenu: function(inSender, inResponse) {
        var req = new enyo.JsonpRequest({
            url: "http://www.tasteasia.be/services/mobile/sushimenuJSON.php",
            callbackName: "callback"
        });
        // send parameters the remote service using the 'go()' method
        req.go();
        // attach responders to the transaction object
        req.response(this, "processSMResponse");
        // handle error
        req.error(this, "processSMError");
    },
    processSMResponse: function(inSender, inResponse) {
        this.setSushiMenu(inResponse);
        this.$.sushi_menu_repeater.setCount(this.getSushiMenu().DU.menu.length);
        this.$.sushi_menu_scroller.render();
    },
    processSMError: function(inSender, inResponse) {
        //error handleing here
    },
    loadGallery: function(inSender, inResponse) {
        var req = new enyo.JsonpRequest({
            url: "http://www.tasteasia.be/services/mobile/galleryJSON.php",
            callbackName: "callback"
        });
        // send parameters the remote service using the 'go()' method
        req.go();
        // attach responders to the transaction object
        req.response(this, "processGalleruResponse");
        // handle error
        req.error(this, "processGalleryError");
    },
    processGalleruResponse: function(inSender, inResponse) {
        this.setGallery(inResponse);
    },
    processGalleryError: function(inSender, inResponse) {
        //error handling here
    },
    setupHiddenMenuItem: function(inSender, inEvent) {
        inEvent.item.$[inSender.item].setContent(this.getContent()[this.getLan()].menu[inEvent.index]);
        return true;
    },
    setupGeneralMenuItem: function(inSender, inEvent) {
        inEvent.item.$[inSender.item].children[0].setContent(this.getGeneralMenu()[this.getLan()].menu[inEvent.index].item);
        return true;
    },
    setupGeneralMenuExpandedItem: function(inSender, inEvent) {
        inEvent.item.$[inSender.item].children[0].setContent(this.getGeneralMenu()[this.getLan()].menu[inSender.getDish_index()].sub_item[inEvent.index].title);
        inEvent.item.$[inSender.item].children[1].setContent(this.getGeneralMenu()[this.getLan()].menu[inSender.getDish_index()].sub_item[inEvent.index].price);
        inEvent.item.$[inSender.item].children[2].setContent(this.getGeneralMenu()[this.getLan()].menu[inSender.getDish_index()].sub_item[inEvent.index].description);
        return true;
    },
    setupSushiMenuItem: function(inSender, inEvent) {
        inEvent.item.$[inSender.item].children[0].setContent(this.getSushiMenu().DU.menu[inEvent.index].item);
        return true;
    },
    setupGeneralsushiExpandedItem: function(inSender, inEvent) {
        inEvent.item.$[inSender.item].children[0].setContent(this.getSushiMenu().DU.menu[inSender.getDish_index()].sub_item[inEvent.index].title);
        inEvent.item.$[inSender.item].children[1].setContent(this.getSushiMenu().DU.menu[inSender.getDish_index()].sub_item[inEvent.index].price);
        inEvent.item.$[inSender.item].children[2].setContent(this.getSushiMenu().DU.menu[inSender.getDish_index()].sub_item[inEvent.index].description);
        return true;
    },
    setupGalleryItem: function(inSender, inEvent) {
        inEvent.item.$[inSender.item].children[0].setSrc("assets/images/thumbnails/m_"+this.getGallery()[inEvent.index].image);
        inEvent.item.$[inSender.item].children[1].setContent(this.getGallery()[inEvent.index].item.dish_name);
        return true;
    },
    goto_menu_btnTapped: function(inSender, inEvent) {
        for (var i=0; i<this.$.hidden_menu_repeater.children.length; i++) {
            this.$.hidden_menu_repeater.children[i].$.hidden_menu_item.addRemoveClass("list-item-selected", false);
        }
        if(this.$.inner_pannel_wrapper.getActive().panelIndex === 0) {
            this.$.hidden_menu_repeater.children[0].$.hidden_menu_item.addRemoveClass("list-item-selected", true);
        }else if(this.$.inner_pannel_wrapper.getActive().panelIndex === 1 || this.$.inner_pannel_wrapper.getActive().panelIndex === 2) {
            this.$.hidden_menu_repeater.children[1].$.hidden_menu_item.addRemoveClass("list-item-selected", true);
        }else if(this.$.inner_pannel_wrapper.getActive().panelIndex === 3 || this.$.inner_pannel_wrapper.getActive().panelIndex === 4) {
            this.$.hidden_menu_repeater.children[2].$.hidden_menu_item.addRemoveClass("list-item-selected", true);
        }else if(this.$.inner_pannel_wrapper.getActive().panelIndex === 5 || this.$.inner_pannel_wrapper.getActive().panelIndex === 6) {
            this.$.hidden_menu_repeater.children[3].$.hidden_menu_item.addRemoveClass("list-item-selected", true);
        }else if(this.$.inner_pannel_wrapper.getActive().panelIndex === 7){
            this.$.hidden_menu_repeater.children[4].$.hidden_menu_item.addRemoveClass("list-item-selected", true);
        }
        if (this.$.outer_panel_wrapper.getActive().panelIndex === 1) {
            this.$.outer_panel_wrapper.setIndex(0);
        } else {
            this.$.outer_panel_wrapper.setIndex(1);
        }
        return true;
    },
    gmliTapped: function(inSender, inEvent) {
        for(var i=0; i<inSender.children.length; i++) {
            inSender.children[i].$[inSender.item]
                .addRemoveClass("list-item-selected", false);
        }
        inSender.children[inEvent.index].$[inSender.item]
                .addRemoveClass("list-item-selected", true);
        this.$.general_menu_expanded_repeater.setDish_index(inEvent.index);
        this.$.general_menu_expanded_repeater.setCount(this.getGeneralMenu()[this.getLan()].menu[inEvent.index].sub_item.length);
        this.$.inner_pannel_wrapper.setIndex(2);
        this.$.general_menu_expanded_scroller.render();
        return true;
    },
    smliTapped: function(inSender, inEvent) {
        for(var i=0; i<inSender.children.length; i++) {
            inSender.children[i].$[inSender.item]
                .addRemoveClass("list-item-selected", false);
        }
        inSender.children[inEvent.index].$[inSender.item]
                .addRemoveClass("list-item-selected", true);
        this.$.sushi_menu_expanded_repeater.setDish_index(inEvent.index);
        if(this.$.sushi_menu_expanded_repeater.getCount() === this.getSushiMenu().DU.menu[inEvent.index].sub_item.length) {
            this.$.sushi_menu_expanded_repeater.setCount(this.getSushiMenu().DU.menu[inEvent.index].sub_item.length);
            this.$.sushi_menu_expanded_repeater.build();
        }else {
            this.$.sushi_menu_expanded_repeater.setCount(this.getSushiMenu().DU.menu[inEvent.index].sub_item.length);
        }
        this.$.inner_pannel_wrapper.setIndex(4);
        this.$.sushi_menu_expanded_scroller.render();
        return true;
    },
    galleryItemTapped: function(inSender, inEvent) {
        for(var i=0; i<inSender.children.length; i++) {
            inSender.children[i].$[inSender.item]
                .addRemoveClass("list-item-selected", false);
        }
        inSender.children[inEvent.index].$[inSender.item]
                .addRemoveClass("list-item-selected", true);
        this.$.gallery_image_view.setSrc("assets/images/"+this.getGallery()[inEvent.index].image);
        this.$.gallery_dish_name.setContent(this.getGallery()[inEvent.index].item.dish_name);
        this.$.gallery_dish_type.setContent(this.getGallery()[inEvent.index].item.dish_type);
        this.$.inner_pannel_wrapper.setIndex(6);
        this.$.gallery_expanded_scroller.render();
        return true;
    },
    hiddenMenuItemTapped: function(inSender, inEvent) {
        for(var i=0; i<inSender.children.length; i++) {
            inSender.children[i].$[inSender.item]
                .addRemoveClass("list-item-selected", false);
        }
        inSender.children[inEvent.index].$[inSender.item]
                .addRemoveClass("list-item-selected", true);
        
        if(inEvent.index === 0) {
            this.$.panel_title.setContent(this.getContent()[this.getLan()].menu[0]);
            this.$.panel_title.indx = 0;
            this.$.outer_panel_wrapper.setIndex(1);
            this.$.inner_pannel_wrapper.setIndex(0);
        }else if(inEvent.index === 1) {
            this.$.panel_title.setContent(this.getContent()[this.getLan()].menu[1]);
            this.$.panel_title.indx = 1;
            this.$.outer_panel_wrapper.setIndex(1);
            this.$.inner_pannel_wrapper.setIndex(1);
        }else if(inEvent.index === 2) {
            this.$.panel_title.setContent(this.getContent()[this.getLan()].menu[2]);
            this.$.panel_title.indx = 2;
            this.$.outer_panel_wrapper.setIndex(1);
            this.$.inner_pannel_wrapper.setIndex(3);
        }else if(inEvent.index === 3) {
            this.$.panel_title.setContent(this.getContent()[this.getLan()].menu[3]);
            this.$.panel_title.indx = 3;
            this.$.gallery_repeater.setCount(this.getGallery().length);
            this.$.gallery_scroller.render();
            this.$.outer_panel_wrapper.setIndex(1);
            this.$.inner_pannel_wrapper.setIndex(5);
        }else if(inEvent.index === 4) {
            this.$.panel_title.setContent(this.getContent()[this.getLan()].menu[4]);
            this.$.panel_title.indx = 4;
            this.$.outer_panel_wrapper.setIndex(1);
            this.$.inner_pannel_wrapper.setIndex(7);
        }else if(inEvent.index === 5) {
            this.$.panel_title.setContent(this.getContent()[this.getLan()].menu[5]);
            this.$.panel_title.indx = 5;
            this.$.reservation_scroller.render();
            this.$.outer_panel_wrapper.setIndex(1);
            this.$.inner_pannel_wrapper.setIndex(8);
        }
        return true;
    },
    innerPanelSlideFinish: function(inSender, inEvent) {
        if(inEvent.toIndex === 2 || inEvent.toIndex === 4 || inEvent.toIndex === 6) {
            this.$.goto_menu_btn.setShowing(false);
            this.$.go_back_btn.setShowing(true);
        } else {
            this.$.go_back_btn.setShowing(false);
            this.$.goto_menu_btn.setShowing(true);
        }
        return true;
    },
    outerPanelSlideFinish: function(inSender, inEvent) {
        if(this.$.inner_pannel_wrapper.getActive().panelIndex === 2 || 
                this.$.inner_pannel_wrapper.getActive().panelIndex === 2 ||
                this.$.inner_pannel_wrapper.getActive().panelIndex === 2) {
            this.$.go_back_btn.setShowing(true);
        } else {
            this.$.go_back_btn.setShowing(false);
        }
        return true;
    },
    go_back_btnTapped: function(inSender, inEvent) {
        this.$.inner_pannel_wrapper.previous();
        return true;
    },
    inputChanged: function(inSender, inEvent) {
        if(this.$.reservation_field_name.getValue() !== "" && this.$.reseravtion_due_date.getValue()  !== ""
                && this.$.reservation_time.getValue() !== "" && this.$.reservation_guests.getValue() !== ""
                && this.$.reservation_field_phone.getValue() !== "" && this.$.reservation_field_email.getValue() !== "") {
            
            if(/^(?:\+?\d{2}[ -]?[\d -][\d -]+)$/.test(this.$.reservation_field_phone.getValue()) &&
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.$.reservation_field_email.getValue())){
                this.$.reservation_btn.setDisabled(false);
            } else {
                this.$.reservation_btn.setDisabled(true);
            }
        } else {
            this.$.reservation_btn.setDisabled(true);
        }

    },
    format_date: function(dateComponents) {
        return (fmt = new enyo.g11n.DateFmt({
            dateComponents: dateComponents || undefined,
            date: 'short',
            locale: new enyo.g11n.Locale(this.locale)
        }));
    },
    format_time: function(dateComponents) {
        return new enyo.g11n.DateFmt({
			time: "short",
			locale: new enyo.g11n.Locale(this.locale)
		});
    },
    reservation_btn_tapped: function(inSender, inEvent) {
        var fmt_date = this.format_date();
        var fmt_time = this.format_time();

        var params = {
            name: this.$.reservation_field_name.getValue(),
            date: fmt_date.format(this.$.reseravtion_due_date.getValue()),
            time: fmt_time.format(this.$.reservation_time.getValue()),
            num: this.$.reservation_guests.getValue(),
            phone: this.$.reservation_field_phone.getValue(),
            email: this.$.reservation_field_email.getValue(),
            message: this.$.reservation_field_info.getValue()
        };
        if (Date.parse(new Date(params.date + " " + params.time)) > Date.parse(new Date())) {
            
            if (/^(?:\+?\d{2}[ -]?[\d -][\d -]+)$/.test(this.$.reservation_field_phone.getValue())){
                if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.$.reservation_field_email.getValue())){
                    var ajax = new enyo.Ajax({
                    url: "/services/reservation.php",
                    method: "POST",
                    postBody: JSON.stringify(params)
                    });
                    // send parameters the remote service using the 'go()' method
                    ajax.go();
                    // attach responders to the transaction object
                    ajax.response(this, "processReservationRes");
                    // handle error
                    ajax.error(this, "processReservationErr");
                    
                    
                }else {
                    this.$.modalPopup.children[0].setContent("Invalid Email!");
                    this.$.modalPopup.children[0].applyStyle("color", "yellow");
                    this.showPopup({popup: "modalPopup"});
                }
            } else {
                this.$.modalPopup.children[0].setContent("Invalid Phone number!");
                this.$.modalPopup.children[0].applyStyle("color", "yellow");
                this.showPopup({popup: "modalPopup"});
            }

        } else {
            this.$.modalPopup.children[0].setContent("Error! Date/Time is in past!");
            this.$.modalPopup.children[0].applyStyle("color", "yellow");
            this.showPopup({popup: "modalPopup"});
        }
    },
    processReservationRes: function(inSender, inResponse) {
        if(inResponse === "200 OK"){
            this.$.modalPopup.children[0].setContent("Reservation has been made!");
            this.$.modalPopup.children[0].applyStyle("color", "lightgrey");
            this.showPopup({popup: "modalPopup"});

	    this.$.reservation_field_name.setValue(""); 
            this.$.reservation_guests.setValue(0);
            this.$.reservation_field_phone.setValue(""); 
            this.$.reservation_field_email.setValue("");
        }
        else {
            this.$.modalPopup.children[0].setContent("Reservation failed!");
            this.$.modalPopup.children[0].applyStyle("color", "yellow");
            this.showPopup({popup: "modalPopup"});
        }
            
    },
    processReservationErr: function(inSender, inResponse) {
        this.$.modalPopup.children[0].setContent("System Error!");
        this.$.modalPopup.children[0].applyStyle("color", "yellow");
    },
    closeModalPopup: function() {
        this.$.modalPopup.hide();
        return true;
    },
    changeLanguage: function(inSender, inEvent) {
        if(this.getLan() !== inSender.lan){
            this.setLan(inSender.lan);
            
            this.$.lan_selector.children[0].addRemoveClass("lan-selected", false);
            this.$.lan_selector.children[1].addRemoveClass("lan-selected", false);
            
            this.$[inSender.lan+"_lan"].addRemoveClass("lan-selected", true);
            
            
            this.$.panel_title.setContent(this.getContent()[this.getLan()].menu[this.$.panel_title.indx]);
            
            this.fillAppContent();
            this.$.hidden_menu_repeater.build();
            this.$.general_menu_repeater.build();
            if(this.$.inner_pannel_wrapper.getActive().panelIndex === 2){
                this.$.general_menu_expanded_repeater.build();
            }
        };
        return true;
    }
});