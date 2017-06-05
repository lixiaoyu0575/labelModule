webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 155;


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(165);



// if (environment.production) {
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
// }
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basictree_basictree_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_templates_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fields_fields_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_filter_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dicom_dicom_component__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__dicom_dicom_component__["a" /* DicomComponent */]
    },
    {
        path: 'basic',
        component: __WEBPACK_IMPORTED_MODULE_2__basictree_basictree_component__["a" /* BasicTreeComponent */]
    },
    {
        path: 'fields',
        component: __WEBPACK_IMPORTED_MODULE_4__fields_fields_component__["a" /* FieldsComponent */]
    },
    {
        path: 'templates',
        component: __WEBPACK_IMPORTED_MODULE_3__templates_templates_component__["a" /* TemplatesComponent */]
    },
    {
        path: 'filter',
        component: __WEBPACK_IMPORTED_MODULE_5__filter_filter_component__["a" /* FilterComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: "\n    <router-outlet></router-outlet>\n  "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basictree_basictree_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fulltree_fulltree_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templates_templates_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filter_filter_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fields_fields_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dicom_dicom_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_mobx__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_mobx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













/*
  Turn on to check if tree supports strict mode in MobX.
  But remember to turn off (to allow users of MobX not to use strict mode in their apps)
*/

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_mobx__["useStrict"])(true);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__basictree_basictree_component__["a" /* BasicTreeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__fulltree_fulltree_component__["a" /* FullTreeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__templates_templates_component__["a" /* TemplatesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__fields_fields_component__["a" /* FieldsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__filter_filter_component__["a" /* FilterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dicom_dicom_component__["a" /* DicomComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullTreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var actionMapping = {
    mouse: {
        contextMenu: function (tree, node, $event) {
            $event.preventDefault();
            alert("context menu for " + node.data.name);
        },
        dblClick: function (tree, node, $event) {
            if (node.hasChildren)
                __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
        },
        click: function (tree, node, $event) {
            $event.shiftKey
                ? __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_SELECTED_MULTI(tree, node, $event)
                : __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_SELECTED(tree, node, $event);
        }
    },
    keys: (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["c" /* KEYS */].ENTER] = function (tree, node, $event) { return alert("This is " + node.data.name); },
        _a)
};
var FullTreeComponent = (function () {
    function FullTreeComponent() {
        this.nodes2 = [{ name: 'root' }, { name: 'root2' }];
        this.asyncChildren = [
            {
                name: 'child2.1',
                subTitle: 'new and improved'
            }, {
                name: 'child2.2',
                subTitle: 'new and improved2'
            }
        ];
        this.customTemplateStringOptions = {
            // displayField: 'subTitle',
            isExpandedField: 'expanded',
            idField: 'uuid',
            getChildren: this.getChildren.bind(this),
            actionMapping: actionMapping,
            nodeHeight: 23,
            allowDrag: true,
            useVirtualScroll: true,
            animateExpand: true,
            animateSpeed: 30,
            animateAcceleration: 1.2
        };
    }
    FullTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.nodes = [
                {
                    expanded: true,
                    name: 'root expandedTest',
                    subTitle: 'the root',
                    children: [
                        {
                            name: 'child1',
                            subTitle: 'a good child',
                            hasChildren: false
                        }, {
                            name: 'child2',
                            subTitle: 'a bad child',
                            hasChildren: false
                        }
                    ]
                },
                {
                    name: 'root2',
                    subTitle: 'the second root',
                    children: [
                        {
                            name: 'child2.1',
                            subTitle: 'new and improved',
                            hasChildren: false
                        }, {
                            name: 'child2.2',
                            subTitle: 'new and improved2',
                            children: [
                                {
                                    uuid: 1001,
                                    name: 'subsub',
                                    subTitle: 'subsub',
                                    hasChildren: false
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'asyncroot',
                    hasChildren: true
                }
            ];
            var _loop_1 = function (i) {
                _this.nodes.push({
                    name: "rootDynamic" + i,
                    subTitle: "root created dynamically " + i,
                    children: new Array((i + 1) * 100).fill(null).map(function (item, n) { return ({
                        name: "childDynamic" + i + "." + n,
                        subTitle: "child created dynamically " + i,
                        hasChildren: false
                    }); })
                });
            };
            for (var i = 0; i < 4; i++) {
                _loop_1(i);
            }
        }, 1);
    };
    FullTreeComponent.prototype.getChildren = function (node) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.asyncChildren.map(function (c) {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })); }, 1000);
        });
    };
    FullTreeComponent.prototype.addNode = function (tree) {
        this.nodes[0].children.push({
            name: 'a new child'
        });
        tree.treeModel.update();
    };
    FullTreeComponent.prototype.childrenCount = function (node) {
        return node && node.children ? "(" + node.children.length + ")" : '';
    };
    FullTreeComponent.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text);
    };
    FullTreeComponent.prototype.activateSubSub = function (tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    };
    FullTreeComponent.prototype.onEvent = function (event) {
        console.log(event);
    };
    FullTreeComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    FullTreeComponent.prototype.activeNodes = function (treeModel) {
        console.log(treeModel.activeNodes);
    };
    return FullTreeComponent;
}());
FullTreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-fulltree',
        styles: [
            "button: {\n        line - height: 24px;\n        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);\n        border: none;\n        border-radius: 2px;\n        background: #A3D9F5;\n        cursor: pointer;\n        margin: 0 3px;\n      }"
        ],
        template: "\n  <form>\n    <input #filter (keyup)=\"filterNodes(filter.value, tree)\" placeholder=\"filter nodes\"/>\n  </form>\n  <div style=\"height: 400px; width: 300px\">\n\n    <tree-root\n      #tree\n      [nodes]=\"nodes\"\n      [options]=\"customTemplateStringOptions\"\n      [focused]=\"true\"\n      (onEvent)=\"onEvent($event)\"\n      \n    >\n      <ng-template #treeNodeTemplate let-node>\n        <span title=\"{{node.data.subTitle}}\">{{ node.data.name }}</span>\n        <span class=\"pull-right\">{{ childrenCount(node) }}</span>\n        <button (click)=\"go($event)\">Custom Action</button>\n      </ng-template>\n      <ng-template #loadingTemplate>Loading, please hold....</ng-template>\n    </tree-root>\n  </div>\n  <br>\n  <p>Keys:</p>\n  down | up | left | right | space | enter\n  <p>Mouse:</p>\n  click to select | shift+click to select multi\n  <p>API:</p>\n  <button (click)=\"tree.treeModel.focusNextNode()\">next node</button>\n  <button (click)=\"tree.treeModel.focusPreviousNode()\">previous node</button>\n  <button (click)=\"tree.treeModel.focusDrillDown()\">drill down</button>\n  <button (click)=\"tree.treeModel.focusDrillUp()\">drill up</button>\n  <button (click)=\"customTemplateStringOptions.allowDrag = true\">allowDrag</button>\n  <p></p>\n  <button\n    [disabled]=\"!tree.treeModel.getFocusedNode()\"\n    (click)=\"tree.treeModel.getFocusedNode().toggleActivated()\">\n    {{ tree.treeModel.getFocusedNode()?.isActive ? 'deactivate' : 'activate' }}\n  </button>\n  <button\n    [disabled]=\"!tree.treeModel.getFocusedNode()\"\n    (click)=\"tree.treeModel.getFocusedNode().toggleExpanded()\">\n    {{ tree.treeModel.getFocusedNode()?.isExpanded ? 'collapse' : 'expand' }}\n  </button>\n  <button\n    [disabled]=\"!tree.treeModel.getFocusedNode()\"\n    (click)=\"tree.treeModel.getFocusedNode().blur()\">\n    blur\n  </button>\n  <button\n    (click)=\"addNode(tree)\">\n    Add Node\n  </button>\n  <button\n    (click)=\"activateSubSub(tree)\">\n    Activate inner node\n  </button>\n  <button\n    (click)=\"tree.treeModel.expandAll()\">\n    Expand All\n  </button>\n  <button\n    (click)=\"tree.treeModel.collapseAll()\">\n    Collapse All\n  </button>\n  <button\n    (click)=\"activeNodes(tree.treeModel)\">\n    getActiveNodes()\n  </button>\n  "
    }),
    __metadata("design:paramtypes", [])
], FullTreeComponent);

var _a;
//# sourceMappingURL=fulltree.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(156);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicTreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicTreeComponent = (function () {
    function BasicTreeComponent() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
    }
    return BasicTreeComponent;
}());
BasicTreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-basictree',
        template: "\n    <tree-root [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\n  ",
        styles: []
    })
], BasicTreeComponent);

//# sourceMappingURL=basictree.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DicomComponent = (function () {
    function DicomComponent(http) {
        var _this = this;
        this.http = http;
        this.actionMapping = {
            mouse: {
                // contextMenu: (tree, node, $event) => {
                //   $event.preventDefault();
                //   alert(`context menu for ${node.data.name}`);
                // },
                dblClick: function (tree, node, $event) {
                    if (node.hasChildren) {
                        __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
                    }
                },
                click: function (tree, node, $event) {
                    $event.shiftKey
                        ? __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_SELECTED_MULTI(tree, node, $event)
                        : __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_SELECTED(tree, node, $event);
                    if (node.data.children && node.data.children.length === 0) {
                        // console.log(node);
                        // console.log(tree);
                        var leafNodesUrl = _this.localUrlPrefix + '/data/imginfos/' +
                            node.parent.data.name + '/' + node.data.scanId;
                        _this.http.get(leafNodesUrl).toPromise().then(function (res) {
                            var data = res.json();
                            var imgs = data.ResultSet.content.images;
                            for (var j = 0; j < imgs.length; j++) {
                                var imgNode = {
                                    name: imgs[j].img_name,
                                    labelState: imgs[j].img_label,
                                    url: imgs[j].img_uri,
                                    isLabelDone: true
                                };
                                if (imgs[j].img_label === 0) {
                                    imgNode.isLabelDone = false;
                                }
                                node.data.children.push(imgNode);
                            }
                            node.treeModel.update();
                        });
                    }
                    if (!node.data.children) {
                        $('.list-group-item').removeClass('active');
                        _this.clear();
                        _this.currentNode = node;
                        _this.imgUrl = _this.imgUrlPrefix + node.data.url;
                        _this.loadImg();
                    }
                }
            },
            keys: (_a = {},
                _a[__WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["c" /* KEYS */].ENTER] = function (tree, node, $event) { return alert("This is " + node.data.name); },
                _a)
        };
        this.customTemplateStringOptions = {
            displayField: 'subTitle',
            isExpandedField: 'expanded',
            idField: 'uuid',
            actionMapping: this.actionMapping,
            nodeHeight: 23,
            allowDrag: false,
            useVirtualScroll: true,
            animateExpand: true,
            animateSpeed: 30,
            animateAcceleration: 1.2
        };
        this.isLabelDone = true;
        this.localUrlPrefix = 'http://' + localIp + ':8081';
        this.imgUrlPrefix = 'wadouri:http://' + localIp + ':8081';
        this.historyStates = [];
        this.currentHistoryIndex = -1;
        var _a;
        // this.localUrlPrefix = 'http://localhost:8081';
        // this.imgUrlPrefix = 'wadouri:http://localhost:8081';
    }
    DicomComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve the DOM element itself
        this.element = this.dicomDom.nativeElement;
        var element = this.element;
        this.imgUrl = 'example://1';
        // this.imgUrl = 'wadouri:http://localhost:8081/data/labelinfos/XNAT_E00002/1/51d7aac4bcb27b67bddbab6f13969b61.dcm';
        // Enable the element with Cornerstone
        cornerstone.enable(element);
        // Listen for changes to the viewport so we can update the text overlays in the corner
        $('#dicomDom').on('endFreehandDrawing', function (e) {
            console.log("endFreehandDrawing");
            _this.recordHistory();
        });
        $('#dicomDom').on('CornerstoneImageRendered', function (e) {
            console.log('dicomimage CornerstoneImageRendered');
            var viewport = cornerstone.getViewport(e.target);
            $('#mrbottomleft').text('WW/WC: ' + Math.round(viewport.voi.windowWidth) + '/' + Math.round(viewport.voi.windowCenter));
            $('#mrbottomright').text('Zoom: ' + viewport.scale.toFixed(2));
        });
        var config = {
            webWorkerPath: '/scripts/lib/labelModule/libs/imgViewer/cornerstoneWADOImageLoaderWebWorker.js',
            taskConfiguration: {
                'decodeTask': {
                    codecsPath: '/scripts/lib/labelModule/libs/imgViewer/cornerstoneWADOImageLoaderCodecs.js'
                }
            }
        };
        cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
        this.loadImg();
        $('.list-group-item').removeClass('active');
        var jsonUrl = this.localUrlPrefix + "/data/images";
        // const jsonUrl = `./../../assets/testData/testApi1.json`;
        setTimeout(function () {
            _this.nodes = [];
            _this.http.get(jsonUrl).toPromise().then(function (data) { return _this.nodes = getNodesFormat(data.json()); });
        }, 1);
    };
    DicomComponent.prototype.loadImg = function () {
        var _this = this;
        var imageId = this.imgUrl;
        var element = this.element;
        // const canvas = $('canvas');
        // if (canvas) {
        //   console.log('canvas here');
        //   canvas.remove();
        // }
        // Load the image and enable tools
        cornerstone.loadImage(imageId).then(function (image) {
            cornerstone.displayImage(element, image);
            cornerstoneTools.mouseInput.enable(element);
            cornerstoneTools.mouseWheelInput.enable(element);
            cornerstoneTools.pan.activate(element, 4);
            // cornerstoneTools.freehand.activate(element, 1);
            cornerstoneTools.zoomWheel.activate(element, 3); // zoom is the default tool for middle mouse wheel
            if (_this.currentNode && _this.localUrlPrefix) {
                _this.loadLabelsState();
            }
        });
    };
    DicomComponent.prototype.loadLabelsState = function () {
        var _this = this;
        var node = this.currentNode;
        var url = this.localUrlPrefix + '/data/labelinfos/' + node.parent.parent.data.name + '/' +
            node.parent.data.scanId + '/' + node.data.name;
        this.http.get(url).toPromise().then(function (res) {
            var data = res.json();
            // data.then(function (d) {
            //   console.log(d);
            // })
            console.log(data);
            var savedState = data["ResultSet"]["content"]["label_info"];
            if (savedState) {
                _this.disableAllTools();
                _this.savedState = savedState;
                _this.currentState = JSON.parse(_this.savedState);
                cornerstoneTools.appState.restore(_this.currentState);
                cornerstone.updateImage(_this.element);
                _this.historyStates = [];
                _this.historyStates.push($.extend(true, {}, _this.currentState));
                _this.currentHistoryIndex = 0;
            }
        });
    };
    DicomComponent.prototype.childrenCount = function (node) {
        return node && node.children && node.children.length !== 0 ? "(" + node.children.length + ")" : '';
    };
    DicomComponent.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text);
    };
    DicomComponent.prototype.onEvent = function (event) {
        // console.log(event);
    };
    DicomComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    DicomComponent.prototype.activeNodes = function (treeModel) {
        console.log(treeModel.activeNodes);
    };
    DicomComponent.prototype.disableAllTools = function () {
        var element = this.element;
        // cornerstoneTools.wwwc.disable(element);
        // cornerstoneTools.pan.activate(element, 2); // 2 is middle mouse button
        // cornerstoneTools.zoom.activate(element, 4); // 4 is right mouse button
        cornerstoneTools.probe.deactivate(element, 1);
        cornerstoneTools.length.deactivate(element, 1);
        cornerstoneTools.ellipticalRoi.deactivate(element, 1);
        cornerstoneTools.rectangleRoi.deactivate(element, 1);
        cornerstoneTools.angle.deactivate(element, 1);
        cornerstoneTools.highlight.deactivate(element, 1);
        cornerstoneTools.freehand.deactivate(element, 1);
    };
    DicomComponent.prototype.chooseType1 = function () {
        activate('#rectangleroi1');
        this.disableAllTools();
        cornerstoneTools.toolColors.setToolColor('red');
        cornerstoneTools.freehand.activate(this.element, 1);
        // cornerstoneTools.rectangleRoi.setLabel('type1');
    };
    DicomComponent.prototype.chooseType2 = function () {
        activate('#rectangleroi2');
        this.disableAllTools();
        cornerstoneTools.toolColors.setToolColor('yellow');
        cornerstoneTools.freehand.activate(this.element, 1);
        // cornerstoneTools.rectangleRoi.setLabel('type2');
    };
    DicomComponent.prototype.chooseType3 = function () {
        activate('#rectangleroi3');
        this.disableAllTools();
        cornerstoneTools.toolColors.setToolColor('pink');
        cornerstoneTools.freehand.activate(this.element, 1);
        // cornerstoneTools.rectangleRoi.setLabel('type3');
    };
    DicomComponent.prototype.chooseType4 = function () {
        activate('#rectangleroi4');
        this.disableAllTools();
        cornerstoneTools.toolColors.setToolColor('greenyellow');
        cornerstoneTools.freehand.activate(this.element, 1);
        // cornerstoneTools.rectangleRoi.setLabel('type4');
    };
    DicomComponent.prototype.chooseType5 = function () {
        activate('#rectangleroi5');
        this.disableAllTools();
        cornerstoneTools.toolColors.setToolColor('orange');
        cornerstoneTools.freehand.activate(this.element, 1);
        // cornerstoneTools.rectangleRoi.setLabel('type5');
    };
    DicomComponent.prototype.activateTool = function (id) {
        var element = this.element;
        activateTool('#' + id);
        if (id === "rightDrag") {
            cornerstoneTools.wwwc.deactivate(element, 4);
            cornerstoneTools.pan.activate(element, 4);
        }
        else {
            cornerstoneTools.pan.deactivate(element, 4);
            cornerstoneTools.wwwc.activate(element, 4);
        }
        // cornerstoneTools.freehand.activate(this.element, 1);
        // cornerstoneTools.rectangleRoi.setLabel('type5');
    };
    // chooseFreehand1() {
    //   activate('#freehand1');
    //   this.disableAllTools();
    //   cornerstoneTools.toolColors.setToolColor('red');
    //   cornerstoneTools.freehand.activate(this.element, 1);
    //   // cornerstoneTools.rectangleRoi.setLabel('type1');
    // }
    //
    // chooseFreehand2() {
    //   activate('#freehand2');
    //   this.disableAllTools();
    //   cornerstoneTools.toolColors.setToolColor('yellow');
    //   cornerstoneTools.freehand.activate(this.element, 1);
    //   // cornerstoneTools.rectangleRoi.setLabel('type1');
    // }
    DicomComponent.prototype.submit = function () {
        var labelsState = cornerstoneTools.appState.save([this.element]);
        var savedState = JSON.stringify(labelsState);
        console.log(this.currentNode);
        this.currentNode.data.isLabelDone = true;
        updateNodeState(this.currentNode.parent);
        updateNodeState(this.currentNode.parent.parent);
        updateNodeState(this.currentNode.parent.parent.parent);
        var node = this.currentNode;
        var labeledData = {
            exp_id: node.parent.parent.data.name,
            scan_id: node.parent.data.scanId,
            img_name: node.data.name,
            label_info: savedState,
            label_type: 'test_label_type'
        };
        var url = this.localUrlPrefix + '/data/labelinsert';
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post(url, labeledData, options).toPromise().then(function () { return console.log('sended labelData'); });
    };
    DicomComponent.prototype.clear = function () {
        var element = this.element;
        var toolStateManager = cornerstoneTools.getElementToolStateManager(element);
        toolStateManager.clear(element);
        var configuration = {
            mouseLocation: {
                handles: {
                    start: {
                        highlight: true,
                        active: true,
                    }
                }
            },
            freehand: false,
            modifying: false,
            currentHandle: 0,
            currentTool: -1
        };
        cornerstoneTools.freehand.setConfiguration(configuration);
        cornerstone.updateImage(element);
        this.recordHistory();
    };
    // restore() {
    //   const appState = JSON.parse(this.savedState);
    //   cornerstoneTools.appState.restore(appState);
    //   cornerstone.updateImage(this.element);
    // }
    // dicomClicked(node: TreeNode) {
    //   this.currentNode = node;
    //   console.log(node);
    //   console.log(node.parent.children);
    // }
    DicomComponent.prototype.recordHistory = function () {
        if (this.currentHistoryIndex !== this.historyStates.length - 1) {
            this.historyStates.splice(this.currentHistoryIndex, this.historyStates.length - this.currentHistoryIndex - 1);
        }
        this.currentState = cornerstoneTools.appState.save([this.element]);
        this.historyStates.push($.extend(true, {}, this.currentState));
        this.currentHistoryIndex++;
    };
    DicomComponent.prototype.historyBack = function () {
        // this.historyStates.splice(this.currentHistoryIndex, 1);
        // this.recordHistory();
        if (this.currentHistoryIndex > 0) {
            this.currentHistoryIndex--;
        }
        ;
        this.currentState = this.historyStates[this.currentHistoryIndex];
        cornerstoneTools.appState.restore(this.currentState);
        cornerstone.updateImage(this.element);
    };
    DicomComponent.prototype.historyForward = function () {
        // this.recordHistory();
        if (this.currentHistoryIndex < this.historyStates.length - 1) {
            this.currentHistoryIndex++;
        }
        ;
        this.currentState = this.historyStates[this.currentHistoryIndex];
        cornerstoneTools.appState.restore(this.currentState);
        cornerstone.updateImage(this.element);
    };
    return DicomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('dicomDom'),
    __metadata("design:type", Object)
], DicomComponent.prototype, "dicomDom", void 0);
DicomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'app-my-dicom',
        template: "\n      <div class=\"row\">\n        <div class=\"col-xs-3\">\n          <form>\n            <input #filter (keyup)=\"filterNodes(filter.value, tree)\" placeholder=\"\u8FC7\u6EE4\"/>\n          </form>\n          <div style=\"height: 400px; width: 100%\">\n            <tree-root\n              #tree\n              [nodes]=\"nodes\"\n              [options]=\"customTemplateStringOptions\"\n              [focused]=\"true\"\n              (onEvent)=\"onEvent($event)\"\n            >\n              <ng-template #treeNodeTemplate let-node >\n                <span title=\"{{node.data.subTitle}}\"  [class.labelDone]=\"node.data.isLabelDone\"\n                      [class.labelNotDone]=\"!node.data.isLabelDone\">{{ node.data.name }}</span>\n                <span class=\"pull-right\">{{ childrenCount(node) }}</span>\n                <!--<button (click)=\"test(node)\">test</button>-->\n                \n                <!--<button (click)=\"go($event)\">Custom Action</button>-->\n              </ng-template>\n              <ng-template #loadingTemplate>\u8F7D\u5165\u4E2D, \u8BF7\u7A0D\u5019....</ng-template>\n            </tree-root>\n          </div>\n        </div>\n        <div class=\"col-xs-2\">\n          <ul class=\"list-group\">\n            <a id=\"rectangleroi1\" class=\"list-group-item\" (click)=\"chooseType1()\">\u80BF\u7624\u7624\u4F53 \n              <svg width=\"10px\" height=\"10px\"><rect stroke=\"black\" width=\"10px\" height=\"10px\" fill=\"red\"></rect></svg></a>\n            <a id=\"rectangleroi2\" class=\"list-group-item\" (click)=\"chooseType2()\">\u4E2D\u5FC3\u574F\u6B7B\n              <svg width=\"10px\" height=\"10px\"><rect stroke=\"black\" width=\"10px\" height=\"10px\" fill=\"yellow\"></rect></svg></a>\n            <a id=\"rectangleroi3\" class=\"list-group-item\" (click)=\"chooseType3()\">\u5468\u56F4\u6C34\u80BF\n              <svg width=\"10px\" height=\"10px\"><rect stroke=\"black\" width=\"10px\" height=\"10px\" fill=\"pink\"></rect></svg></a>\n            <!--<a id=\"rectangleroi4\" class=\"list-group-item\" (click)=\"chooseType4()\">Type 4\n              <svg width=\"10px\" height=\"10px\"><rect stroke=\"black\" width=\"10px\" height=\"10px\" fill=\"greenyellow\"></rect></svg></a>\n            <a id=\"rectangleroi5\" class=\"list-group-item\" (click)=\"chooseType5()\">Type 5\n              <svg width=\"10px\" height=\"10px\"><rect stroke=\"black\" width=\"10px\" height=\"10px\" fill=\"orange\"></rect></svg></a>\n            --><!--<a id=\"freehand1\" class=\"list-group-item\" (click)=\"chooseFreehand1()\">Type 1(freehand)</a>-->\n            <!--<a id=\"freehand2\" class=\"list-group-item\" (click)=\"chooseFreehand2()\">Type 2(freehand)</a>-->\n          </ul>\n          <ul class=\"list-group\">\n            <a id=\"historyBack\" class=\"list-group-item\" (click)=\"historyBack()\">\u5386\u53F2\u56DE\u9000</a>\n            <a id=\"historyBack\" class=\"list-group-item\" (click)=\"historyForward()\">\u5386\u53F2\u524D\u8FDB</a>\n            <a id=\"submit\" class=\"list-group-item\" (click)=\"submit()\">\u4FDD\u5B58</a>\n            <a id=\"clear\" class=\"list-group-item\" (click)=\"clear()\">\u6E05\u7A7A</a>\n            <!--<a id=\"restore\" class=\"list-group-item\" (click)=\"restore()\">Restore</a>-->\n          </ul>\n          <br>\n        </div>\n        <div class=\"col-xs-7\">\n          <div class=\"row\">\n            <div class=\"col-xs-2\">\n              <button id=\"rightDrag\" class=\"btn btn-sm-default active-tool\" (click)=\"activateTool('rightDrag')\">\u53F3\u952E\u62D6\u62FD</button>\n            </div>\n            <div class=\"col-xs-2\">\n              <button id=\"rightWwwc\" class=\"btn btn-sm-default active-tool\" (click)=\"activateTool('rightWwwc')\">\u53F3\u952E\u5BF9\u6BD4\u5EA6</button>\n            </div>\n          </div>\n          <div #dicomDom id=\"dicomDom\"\n               style=\"width:768px;height:768px;position:relative;display:inline-block;color:white;\"\n               oncontextmenu=\"return false\"\n               class='cornerstone-enabled-image'\n               unselectable='on'\n               onselectstart='return false;'\n               onmousedown='return false;'>\n            <div id=\"dicomImage\"\n                 style=\"width:512px;height:512px;top:0px;left:0px; position:absolute;\">\n            </div>\n            <!--<div id=\"mrtopleft\" style=\"position: absolute;top:3px; left:3px\">-->\n              <!--Patient Name-->\n            <!--</div>-->\n            <!--<div id=\"mrtopright\" style=\"position: absolute;top:3px; right:3px\">-->\n              <!--Hospital-->\n            <!--</div>-->\n            <div id=\"mrbottomright\" style=\"position: absolute;bottom:6px; right:3px\">\n              <div id=\"frameRate\"></div>\n              <div id=\"zoomText\">Zoom: </div>\n              <div id=\"sliceText\">Image: </div>\n            </div>\n            <div id=\"mrbottomleft\" style=\"position: absolute;bottom:3px; left:3px\">\n              WW/WC:\n            </div>\n          </div>\n        </div>\n      </div>\n        ",
        styles: [
            "\n      .tree {\n        width: 100%;\n      }\n      .labelDone {\n        background-color: greenyellow;\n      }\n      .labelNotDone {\n        background-color: orange;\n      }\n      button: {\n      line - height: 24px;\n      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);\n      border: none;\n      border-radius: 2px;\n      background: #A3D9F5;\n      cursor: pointer;\n      margin: 0 3px;\n    }"
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DicomComponent);

function getNodesFormat(data) {
    var allData = data.ResultSet.content;
    var newNodes = [];
    for (var k2 in allData) {
        if (allData.hasOwnProperty(k2)) {
            var fNode = {
                name: k2,
                children: [],
                isLabelDone: false
            };
            data = allData[k2];
            for (var k in data) {
                if (data.hasOwnProperty(k)) {
                    var expNode = {
                        name: k,
                        subTitle: 'test',
                        children: []
                    };
                    for (var i = 0; i < data[k].length; i++) {
                        var scanNode = {
                            name: 'ScanID-' + data[k][i].scan_id,
                            children: [],
                            isLabelDone: true,
                            scanId: data[k][i].scan_id.toString(),
                            hasChildren: true,
                        };
                        if (data[k][i].label_info === 'unlabel' || data[k][i].label_info === 'labeling') {
                            scanNode.isLabelDone = false;
                            fNode.isLabelDone = false;
                        }
                        // const imgs = data[k][i].images;
                        // for (let j = 0; j < imgs.length; j++) {
                        //     const imgNode = {
                        //         name: imgs[j].img_name,
                        //         labelState: imgs[j].img_label,
                        //         url: imgs[j].img_uri,
                        //         isLabelDone: true
                        //     }
                        //     console.log(imgs[i].img_label);
                        //     if (imgs[j].img_label === 0) {
                        //         imgNode.isLabelDone = false;
                        //         scanNode.isLabelDone = false;
                        //         fNode.isLabelDone = false;
                        //     }
                        //     scanNode.children.push(imgNode);
                        // }
                        expNode.children.push(scanNode);
                    }
                    fNode.children.push(expNode);
                }
            }
            newNodes.push(fNode);
        }
    }
    console.log(newNodes);
    return newNodes;
}
function activate(id) {
    $('.list-group-item').removeClass('active');
    $(id).addClass('active');
}
function activateTool(id) {
    $('.active-tool').removeClass('active');
    $(id).addClass('active');
}
function updateNodeState(node) {
    if (!node.data.children) {
        return;
    }
    var nodeChildren = node.data.children;
    var isLabelDone = true;
    for (var i = 0; i < nodeChildren.length; i++) {
        if (nodeChildren[i].isLabelDone === false) {
            isLabelDone = false;
        }
    }
    node.data.isLabelDone = isLabelDone;
}
var _a;
//# sourceMappingURL=dicom.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FieldsComponent = (function () {
    function FieldsComponent() {
        this.nodes1 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class'
            }
        ];
        this.options1 = {
            displayField: 'title',
            nodeClass: function (node) { return node.data.className; }
        };
    }
    return FieldsComponent;
}());
FieldsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-fields',
        template: "\n    <h3>Overriding displayField & nodeClass</h3>\n    <tree-root id=\"tree1\" [focused]=\"true\" [nodes]=\"nodes1\" [options]=\"options1\"></tree-root>\n  ",
        styles: []
    })
], FieldsComponent);

//# sourceMappingURL=fields.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterComponent = (function () {
    function FilterComponent() {
        this.nodes = [
            {
                name: 'North America',
                children: [
                    { name: 'United States', children: [
                            { name: 'New York' },
                            { name: 'California' },
                            { name: 'Florida' }
                        ] },
                    { name: 'Canada' }
                ]
            },
            {
                name: 'South America',
                children: [
                    { name: 'Argentina', children: [] },
                    { name: 'Brazil' }
                ]
            },
            {
                name: 'Europe',
                children: [
                    { name: 'England' },
                    { name: 'Germany' },
                    { name: 'France' },
                    { name: 'Italy' },
                    { name: 'Spain' }
                ]
            }
        ];
    }
    FilterComponent.prototype.filterFn = function (value, treeModel) {
        treeModel.filterNodes(function (node) { return fuzzysearch(value, node.data.name); });
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-filter',
        template: "\n    <h2>Filter</h2>\n    <input #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"filter nodes\"/>\n    <button (click)=\"tree.treeModel.clearFilter()\">Clear Filter</button>\n    <tree-root #tree [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\n\n    <h3>Filter By Function (Fuzzy Search)</h3>\n    <input #filter2 (keyup)=\"filterFn(filter2.value, tree.treeModel)\" placeholder=\"filter nodes by fuzzy search\"/>\n ",
        styles: []
    })
], FilterComponent);

function fuzzysearch(needle, haystack) {
    var haystackLC = haystack.toLowerCase();
    var needleLC = needle.toLowerCase();
    var hlen = haystack.length;
    var nlen = needleLC.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needleLC === haystackLC;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needleLC.charCodeAt(i);
        while (j < hlen) {
            if (haystackLC.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}
//# sourceMappingURL=filter.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemplatesComponent = (function () {
    function TemplatesComponent() {
        this.nodes1 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class',
                hasChildren: true
            }
        ];
        this.nodes2 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class',
                children: [
                    { title: 'child1', className: 'child1Class' }
                ]
            }
        ];
        this.options1 = {
            getChildren: function () { return new Promise(function (resolve, reject) { }); }
        };
        this.options0 = {
            displayField: 'title',
            nodeClass: function (node) { return node.data.title + "Class"; }
        };
    }
    return TemplatesComponent;
}());
TemplatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-templates',
        template: "\n    <h3>treeNodeTemplate and loadingTemplate</h3>\n    <tree-root id=\"tree1\" [focused]=\"true\" [nodes]=\"nodes1\" [options]=\"options1\">\n      <ng-template #treeNodeTemplate let-node let-index=\"index\">\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\n        <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\n      </ng-template>\n      <ng-template #loadingTemplate let-node>\n        <div [class]=\"node.data.className + 'Loading'\">Loading {{ node.data.title }}...</div>\n      </ng-template>\n    </tree-root>\n    \n    <h3>treeNodeWrapper</h3>\n    <tree-root id=\"tree3\" [focused]=\"true\" [nodes]=\"nodes2\" [options]=\"options1\">\n      <ng-template #treeNodeWrapperTemplate let-node let-index=\"index\">\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>      \n         <input type=\"checkbox\"><span>&rarr;</span>\n         <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\n      </ng-template>\n    </tree-root>\n\n    <h3>treeNodeFullTemplate</h3>\n    <tree-root id=\"tree2\" [focused]=\"true\" [nodes]=\"nodes2\">\n      <ng-template #treeNodeFullTemplate let-node let-index=\"index\" let-templates=\"templates\">\n        <div class=\"tree-node\">\n          <input type=\"checkbox\" [checked]=\"node.isActive\" (change)=\"node.toggleActivated(true)\" />\n          <tree-node-expander [node]=\"node\"></tree-node-expander>\n          <div\n            class=\"node-content-wrapper\"\n            [class.node-content-wrapper-active]=\"node.isActive\"\n            [class.node-content-wrapper-focused]=\"node.isFocused\"\n            (click)=\"node.toggleActivated(true)\">\n            <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\n            <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\n          </div>\n          <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\n        </div>\n      </ng-template>\n    </tree-root>\n  ",
        styles: []
    })
], TemplatesComponent);

//# sourceMappingURL=templates.component.js.map

/***/ })

},[374]);
//# sourceMappingURL=main.bundle.js.map