import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  AnimationBuilder,
  animate,
  query,
  sequence,
  stagger,
  style
} from "./chunk-JLKHL43D.js";
import {
  DomSanitizer
} from "./chunk-MBVFBYTO.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-E43FGKSK.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  forwardRef,
  isDevMode,
  require_cjs,
  require_operators,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nExp,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JLZMSCQJ.js";
import {
  __toESM
} from "./chunk-LDODSSGN.js";

// node_modules/@progress/kendo-common/dist/es/util.js
var isWindowAvailable = function() {
  return typeof window !== "undefined";
};

// node_modules/@progress/kendo-common/dist/es/support.js
var agentRxs = {
  wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
  fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
  android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)(\.(\d+(\.\d+)?))?/,
  iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
  ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
  meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
  webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
  blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
  playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
  windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
  tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
  sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
  ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
};
var osRxs = {
  ios: /^i(phone|pad|pod)$/i,
  android: /^android|fire$/i,
  blackberry: /^blackberry|playbook/i,
  windows: /windows/,
  wp: /wp/,
  flat: /sailfish|ffos|tizen/i,
  meego: /meego/
};
var desktopBrowserRxs = {
  edge: /(edge)[ \/]([\w.]+)/i,
  webkit: /(chrome)[ \/]([\w.]+)/i,
  safari: /(webkit)[ \/]([\w.]+)/i,
  opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
  msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
  mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
var mobileBrowserRxs = {
  omini: /Opera\sMini/i,
  omobile: /Opera\sMobi/i,
  firefox: /Firefox|Fennec/i,
  mobilesafari: /version\/.*safari/i,
  ie: /MSIE|Windows\sPhone/i,
  chrome: /chrome|crios/i,
  webkit: /webkit/i
};
var testRx = function(agent, rxs, dflt) {
  for (var rx in rxs) {
    if (rxs.hasOwnProperty(rx) && rxs[rx].test(agent)) {
      return rx;
    }
  }
  return dflt !== void 0 ? dflt : agent;
};
var detectMobileOS = function(ua) {
  var minorVersion;
  var match = [];
  for (var agent in agentRxs) {
    if (agentRxs.hasOwnProperty(agent)) {
      match = ua.match(agentRxs[agent]);
      if (!match) {
        continue;
      }
      if (agent === "windows" && "plugins" in window.navigator) {
        return null;
      }
      var os = {};
      os.device = agent;
      os.browser = testRx(ua, mobileBrowserRxs, "default");
      os.name = testRx(agent, osRxs);
      os[os.name] = true;
      os.majorVersion = match[2];
      os.minorVersion = match[3] ? match[3].replace("_", ".") : ".0";
      minorVersion = os.minorVersion.replace(".", "").substr(0, 2);
      os.flatVersion = os.majorVersion + minorVersion + new Array(3 - (minorVersion.length < 3 ? minorVersion.length : 2)).join("0");
      os.cordova = typeof window.PhoneGap !== void 0 || typeof window.cordova !== void 0;
      os.appMode = window.navigator.standalone || /file|local|wmapp/.test(window.location.protocol) || os.cordova;
      return os;
    }
  }
  return null;
};
var detectDesktopBrowser = function(ua) {
  var browserInfo = null;
  var match = [];
  for (var agent in desktopBrowserRxs) {
    if (desktopBrowserRxs.hasOwnProperty(agent)) {
      match = ua.match(desktopBrowserRxs[agent]);
      if (match) {
        browserInfo = {};
        browserInfo[agent] = true;
        browserInfo[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
        browserInfo.version = parseInt(document.documentMode || match[2], 10);
        break;
      }
    }
  }
  return browserInfo;
};
var userAgent = isWindowAvailable() && window.navigator ? window.navigator.userAgent : null;
var browser = userAgent ? detectDesktopBrowser(userAgent) : null;
var mobileOS = userAgent ? detectMobileOS(userAgent) : null;
var touch = isWindowAvailable() && "ontouchstart" in window;
var msPointers = browser && !browser.chrome && window.MSPointerEvent;
var pointers = browser && !browser.chrome && window.PointerEvent;
var touchEnabled = mobileOS && (touch || msPointers || pointers);

// node_modules/@progress/kendo-common/dist/es/accessors/field-list.js
var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
function fieldList(field) {
  var fields = [];
  field.replace(FIELD_REGEX, function(_match, index, indexAccessor, fieldName) {
    fields.push(index !== void 0 ? index : indexAccessor || fieldName);
  });
  return fields;
}

// node_modules/@progress/kendo-common/dist/es/accessors/getter.js
var getterCache = {};
getterCache["undefined"] = function(obj) {
  return obj;
};
function getter(field) {
  if (getterCache[field]) {
    return getterCache[field];
  }
  var fields = fieldList(field);
  getterCache[field] = function(obj) {
    var result = obj;
    for (var idx = 0; idx < fields.length && result; idx++) {
      result = result[fields[idx]];
    }
    return result;
  };
  return getterCache[field];
}

// node_modules/@progress/kendo-common/dist/es/accessors/setter.js
var setterCache = {};
setterCache["undefined"] = function(obj) {
  return obj;
};
var defaultValue = function(nextField, options) {
  return options && options.arrays && !isNaN(Number(nextField)) ? [] : {};
};
function setter(field) {
  if (setterCache[field]) {
    return setterCache[field];
  }
  var fields = fieldList(field);
  setterCache[field] = function(obj, value, options) {
    var root = obj;
    var depth = fields.length - 1;
    for (var idx = 0; idx < depth && root; idx++) {
      root = root[fields[idx]] = root[fields[idx]] || defaultValue(fields[idx + 1], options);
    }
    root[fields[depth]] = value;
  };
  return setterCache[field];
}

// node_modules/@progress/kendo-angular-common/fesm2015/progress-kendo-angular-common.mjs
var import_operators = __toESM(require_operators(), 1);

// node_modules/@progress/kendo-draggable/dist/es/main.js
var proxy = function(a, b) {
  return function(e) {
    return b(a(e));
  };
};
var bind = function(el, event, callback) {
  return el.addEventListener && el.addEventListener(event, callback);
};
var unbind = function(el, event, callback) {
  return el && el.removeEventListener && el.removeEventListener(event, callback);
};
var noop = function() {
};
var preventDefault = function(e) {
  return e.preventDefault();
};
var touchRegExp = /touch/;
var IGNORE_MOUSE_TIMEOUT = 2e3;
function normalizeEvent(e) {
  if (e.type.match(touchRegExp)) {
    return {
      pageX: e.changedTouches[0].pageX,
      pageY: e.changedTouches[0].pageY,
      clientX: e.changedTouches[0].clientX,
      clientY: e.changedTouches[0].clientY,
      type: e.type,
      originalEvent: e,
      isTouch: true
    };
  }
  return {
    pageX: e.pageX,
    pageY: e.pageY,
    clientX: e.clientX,
    clientY: e.clientY,
    offsetX: e.offsetX,
    offsetY: e.offsetY,
    type: e.type,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    originalEvent: e
  };
}
var Draggable = function Draggable2(ref) {
  var this$1 = this;
  var press = ref.press;
  if (press === void 0) press = noop;
  var drag = ref.drag;
  if (drag === void 0) drag = noop;
  var release = ref.release;
  if (release === void 0) release = noop;
  var mouseOnly = ref.mouseOnly;
  if (mouseOnly === void 0) mouseOnly = false;
  this._pressHandler = proxy(normalizeEvent, press);
  this._dragHandler = proxy(normalizeEvent, drag);
  this._releaseHandler = proxy(normalizeEvent, release);
  this._ignoreMouse = false;
  this._mouseOnly = mouseOnly;
  this._touchstart = function(e) {
    if (e.touches.length === 1) {
      this$1._pressHandler(e);
    }
  };
  this._touchmove = function(e) {
    if (e.touches.length === 1) {
      this$1._dragHandler(e);
    }
  };
  this._touchend = function(e) {
    if (e.touches.length === 0 && e.changedTouches.length === 1) {
      this$1._releaseHandler(e);
      this$1._ignoreMouse = true;
      setTimeout(this$1._restoreMouse, IGNORE_MOUSE_TIMEOUT);
    }
  };
  this._restoreMouse = function() {
    this$1._ignoreMouse = false;
  };
  this._mousedown = function(e) {
    var which = e.which;
    if (which && which > 1 || this$1._ignoreMouse) {
      return;
    }
    bind(this$1.document, "mousemove", this$1._mousemove);
    bind(this$1.document, "mouseup", this$1._mouseup);
    this$1._pressHandler(e);
  };
  this._mousemove = function(e) {
    this$1._dragHandler(e);
  };
  this._mouseup = function(e) {
    unbind(this$1.document, "mousemove", this$1._mousemove);
    unbind(this$1.document, "mouseup", this$1._mouseup);
    this$1._releaseHandler(e);
  };
  this._pointerdown = function(e) {
    if (e.isPrimary && e.button === 0) {
      bind(this$1.document, "pointermove", this$1._pointermove);
      bind(this$1.document, "pointerup", this$1._pointerup);
      bind(this$1.document, "pointercancel", this$1._pointerup);
      bind(this$1.document, "contextmenu", preventDefault);
      this$1._pressHandler(e);
    }
  };
  this._pointermove = function(e) {
    if (e.isPrimary) {
      this$1._dragHandler(e);
    }
  };
  this._pointerup = function(e) {
    if (e.isPrimary) {
      unbind(this$1.document, "pointermove", this$1._pointermove);
      unbind(this$1.document, "pointerup", this$1._pointerup);
      unbind(this$1.document, "pointercancel", this$1._pointerup);
      unbind(this$1.document, "contextmenu", preventDefault);
      this$1._releaseHandler(e);
    }
  };
};
var prototypeAccessors = {
  document: {
    configurable: true
  }
};
Draggable.supportPointerEvent = function supportPointerEvent() {
  return typeof window !== "undefined" && window.PointerEvent;
};
prototypeAccessors.document.get = function() {
  return this._element ? this._element.ownerDocument : document;
};
Draggable.prototype.cancelDrag = function cancelDrag() {
  unbind(this.document, "pointermove", this._pointermove);
  unbind(this.document, "pointerup", this._pointerup);
  unbind(this.document, "pointercancel", this._pointerup);
};
Draggable.prototype.bindTo = function bindTo(element) {
  if (element === this._element) {
    return;
  }
  if (this._element) {
    this._unbindFromCurrent();
  }
  this._element = element;
  this._bindToCurrent();
};
Draggable.prototype._bindToCurrent = function _bindToCurrent() {
  var element = this._element;
  if (this._usePointers()) {
    bind(element, "pointerdown", this._pointerdown);
    return;
  }
  bind(element, "mousedown", this._mousedown);
  if (!this._mouseOnly) {
    bind(element, "touchstart", this._touchstart);
    bind(element, "touchmove", this._touchmove);
    bind(element, "touchend", this._touchend);
  }
};
Draggable.prototype._unbindFromCurrent = function _unbindFromCurrent() {
  var element = this._element;
  if (this._usePointers()) {
    unbind(element, "pointerdown", this._pointerdown);
    unbind(this.document, "pointermove", this._pointermove);
    unbind(this.document, "pointerup", this._pointerup);
    unbind(this.document, "contextmenu", preventDefault);
    unbind(this.document, "pointercancel", this._pointerup);
    return;
  }
  unbind(element, "mousedown", this._mousedown);
  if (!this._mouseOnly) {
    unbind(element, "touchstart", this._touchstart);
    unbind(element, "touchmove", this._touchmove);
    unbind(element, "touchend", this._touchend);
  }
};
Draggable.prototype._usePointers = function _usePointers() {
  return !this._mouseOnly && Draggable.supportPointerEvent();
};
Draggable.prototype.update = function update(ref) {
  var press = ref.press;
  if (press === void 0) press = noop;
  var drag = ref.drag;
  if (drag === void 0) drag = noop;
  var release = ref.release;
  if (release === void 0) release = noop;
  var mouseOnly = ref.mouseOnly;
  if (mouseOnly === void 0) mouseOnly = false;
  this._pressHandler = proxy(normalizeEvent, press);
  this._dragHandler = proxy(normalizeEvent, drag);
  this._releaseHandler = proxy(normalizeEvent, release);
  this._mouseOnly = mouseOnly;
};
Draggable.prototype.destroy = function destroy() {
  this._unbindFromCurrent();
  this._element = null;
};
Object.defineProperties(Draggable.prototype, prototypeAccessors);
Draggable.default = Draggable;

// node_modules/@progress/kendo-angular-common/fesm2015/progress-kendo-angular-common.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var _c0 = ["banner"];
var _c1 = ["kendoWatermarkOverlay", ""];
var _c2 = () => ({
  display: "flex",
  alignSelf: "center",
  marginRight: "8px"
});
var _c3 = () => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "24px"
});
var _c4 = () => ({
  marginRight: "8px",
  display: "flex"
});
function WatermarkOverlayComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2, 0)(2, "span", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(3, "svg", 3);
    ɵɵelement(4, "path", 4);
    ɵɵelementEnd()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(5, "span");
    ɵɵtext(6, "No valid license found for Kendo UI for Angular. Learn how to activate your license.");
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 2)(8, "a", 5)(9, "button", 6);
    ɵɵnamespaceSVG();
    ɵɵelementStart(10, "svg", 3);
    ɵɵelement(11, "path", 7);
    ɵɵelementEnd()()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(12, "button", 8);
    ɵɵlistener("click", function WatermarkOverlayComponent_div_0_Template_button_click_12_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeBanner());
    });
    ɵɵnamespaceSVG();
    ɵɵelementStart(13, "svg", 3);
    ɵɵelement(14, "path", 9);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.bannerStyles);
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction0(7, _c2));
    ɵɵadvance(5);
    ɵɵproperty("ngStyle", ɵɵpureFunction0(8, _c3));
    ɵɵadvance();
    ɵɵproperty("href", ctx_r1.licenseKeyUrl, ɵɵsanitizeUrl)("ngStyle", ɵɵpureFunction0(9, _c4));
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1.buttonStyles);
    ɵɵadvance(3);
    ɵɵproperty("ngStyle", ctx_r1.buttonStyles);
  }
}
var isDocumentAvailable = () => typeof document !== "undefined";
var isChanged = (propertyName, changes, skipFirstChange = true) => typeof changes[propertyName] !== "undefined" && (!changes[propertyName].isFirstChange() || !skipFirstChange) && changes[propertyName].previousValue !== changes[propertyName].currentValue;
var anyChanged = (propertyNames, changes, skipFirstChange = true) => propertyNames.some((name) => isChanged(name, changes, skipFirstChange));
var hasObservers = (emitter) => emitter && emitter.observers.length > 0;
var guid = () => {
  let id = "";
  for (let i = 0; i < 32; i++) {
    const random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      id += "-";
    }
    id += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }
  return id;
};
var isSafari = (userAgent2) => {
  return detectDesktopBrowser(userAgent2).safari || detectMobileOS(userAgent2) && detectMobileOS(userAgent2).browser === "mobilesafari";
};
var isFirefox = (userAgent2) => {
  const desktopBrowser = detectDesktopBrowser(userAgent2);
  const mobileOS2 = detectMobileOS(userAgent2);
  return desktopBrowser && desktopBrowser.mozilla || mobileOS2 && mobileOS2.browser === "firefox";
};
var isPresent = (value) => value !== null && value !== void 0;
var isObjectPresent = (value) => {
  return isObject(value) && Object.keys(value).length > 0;
};
var isString = (value) => value instanceof String || typeof value === "string";
var isObject = (value) => isPresent(value) && !Array.isArray(value) && typeof value === "object";
var splitStringToArray = (value) => value.trim().replace(/\s+/g, " ").split(" ");
var parseCSSClassNames = (value) => {
  if (Array.isArray(value)) {
    return parseArrayClassNames(value);
  }
  if (isObject(value)) {
    return parseObjectClassNames(value);
  }
  if (isString(value)) {
    return parseStringClassNames(value);
  }
};
var parseObjectClassNames = (value) => {
  const classes = [];
  Object.keys(value).forEach((className) => {
    const currentClassName = splitStringToArray(className);
    if (value[className] && currentClassName.length) {
      classes.push(...currentClassName);
    }
  });
  return classes;
};
var parseStringClassNames = (value) => {
  const classes = [];
  const classesArray = splitStringToArray(value);
  classesArray.forEach((className) => {
    classes.push(className);
  });
  return classes;
};
var parseArrayClassNames = (value) => {
  const classes = [];
  value.forEach((className) => {
    const current = splitStringToArray(className);
    if (current[0]) {
      classes.push(...current);
    }
  });
  return classes;
};
var setHTMLAttributes = (attributes, renderer, element, zone) => {
  zone ? zone.onStable.pipe((0, import_operators.take)(1)).subscribe(() => {
    applyAttributes(attributes, renderer, element);
  }) : applyAttributes(attributes, renderer, element);
};
var removeHTMLAttributes = (attributes, renderer, element) => {
  for (const attribute in attributes) {
    if (attribute) {
      renderer.removeAttribute(element, attribute);
    }
  }
};
var parseAttributes = (target, source) => {
  const targetObj = target;
  Object.keys(source).forEach((key) => {
    delete targetObj[key];
  });
  return targetObj;
};
var applyAttributes = (attributes, renderer, element) => {
  for (const attribute in attributes) {
    if (attribute && isPresent(attributes[attribute])) {
      renderer.setAttribute(element, attribute, attributes[attribute]);
    }
  }
};
var isControlRequired = (control) => {
  var _a;
  if (!(control === null || control === void 0 ? void 0 : control.validator)) {
    return false;
  }
  return (_a = control.validator(control)) === null || _a === void 0 ? void 0 : _a.hasOwnProperty("required");
};
var DraggableDirective = class {
  constructor(element, ngZone) {
    this.element = element;
    this.ngZone = ngZone;
    this.enableDrag = true;
    this.kendoPress = new EventEmitter();
    this.kendoDrag = new EventEmitter();
    this.kendoRelease = new EventEmitter();
  }
  ngOnInit() {
    this.toggleDraggable();
  }
  ngOnChanges(changes) {
    if (isChanged("enableDrag", changes)) {
      this.toggleDraggable();
    }
  }
  ngOnDestroy() {
    this.destroyDraggable();
  }
  toggleDraggable() {
    if (isDocumentAvailable()) {
      this.destroyDraggable();
      if (this.enableDrag) {
        this.draggable = new Draggable({
          drag: (e) => this.kendoDrag.next(e),
          press: (e) => this.kendoPress.next(e),
          release: (e) => this.kendoRelease.next(e)
        });
        this.ngZone.runOutsideAngular(() => {
          var _a;
          return (_a = this.draggable) === null || _a === void 0 ? void 0 : _a.bindTo(this.element.nativeElement);
        });
      }
    }
  }
  destroyDraggable() {
    if (this.draggable) {
      this.draggable.destroy();
      this.draggable = void 0;
    }
  }
};
DraggableDirective.ɵfac = function DraggableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DraggableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
DraggableDirective.ɵdir = ɵɵdefineDirective({
  type: DraggableDirective,
  selectors: [["", "kendoDraggable", ""]],
  inputs: {
    enableDrag: "enableDrag"
  },
  outputs: {
    kendoPress: "kendoPress",
    kendoDrag: "kendoDrag",
    kendoRelease: "kendoRelease"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDraggable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    enableDrag: [{
      type: Input
    }],
    kendoPress: [{
      type: Output
    }],
    kendoDrag: [{
      type: Output
    }],
    kendoRelease: [{
      type: Output
    }]
  });
})();
var DraggableModule = class {
};
DraggableModule.ɵfac = function DraggableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DraggableModule)();
};
DraggableModule.ɵmod = ɵɵdefineNgModule({
  type: DraggableModule,
  imports: [DraggableDirective],
  exports: [DraggableDirective]
});
DraggableModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableModule, [{
    type: NgModule,
    args: [{
      exports: [DraggableDirective],
      imports: [DraggableDirective]
    }]
  }], null, null);
})();
var closestInScope = (node, predicate, scope) => {
  while (node && node !== scope && !predicate(node)) {
    node = node.parentNode;
  }
  if (node !== scope) {
    return node;
  }
  return void 0;
};
var closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var contains = (parent, node, matchSelf = false) => {
  const outside = !closest(node, (child) => child === parent);
  if (outside) {
    return false;
  }
  const el = closest(node, (child) => child === node);
  return el && (matchSelf || el !== parent);
};
var findElement = (node, predicate, matchSelf = true) => {
  if (!node) {
    return;
  }
  if (matchSelf && predicate(node)) {
    return node;
  }
  node = node.firstChild;
  while (node) {
    if (node.nodeType === 1) {
      const element = findElement(node, predicate);
      if (element) {
        return element;
      }
    }
    node = node.nextSibling;
  }
};
var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
var isFocusable = (element) => {
  if (!element.tagName) {
    return false;
  }
  const tagName = element.tagName.toLowerCase();
  const hasTabIndex = Boolean(element.getAttribute("tabIndex"));
  const focusable = !element.disabled && focusableRegex.test(tagName);
  return focusable || hasTabIndex;
};
var isVisible = (element) => {
  const rect = element.getBoundingClientRect();
  const hasSize = rect.width > 0 && rect.height > 0;
  const hasPosition = rect.x !== 0 && rect.y !== 0;
  return (hasSize || hasPosition) && window.getComputedStyle(element).visibility !== "hidden";
};
var isFocusableWithTabKey = (element, checkVisibility = true) => {
  if (!isFocusable(element)) {
    return false;
  }
  const tabIndex = element.getAttribute("tabIndex");
  const visible = !checkVisibility || isVisible(element);
  return visible && tabIndex !== "-1";
};
var findFocusableChild = (element, checkVisibility = true) => {
  return findElement(element, (node) => isFocusableWithTabKey(node, checkVisibility), false);
};
var EventsOutsideAngularDirective = class {
  constructor(element, ngZone, renderer) {
    this.element = element;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.events = {};
  }
  ngOnInit() {
    if (!this.element || !this.element.nativeElement) {
      return;
    }
    const events = this.events;
    this.subscriptions = [];
    this.ngZone.runOutsideAngular(() => {
      var _a;
      for (const name in events) {
        if (Object.hasOwnProperty.call(events, name)) {
          (_a = this.subscriptions) === null || _a === void 0 ? void 0 : _a.push(this.renderer.listen(this.element.nativeElement, name, this.scope ? events[name].bind(this.scope) : events[name]));
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      for (let idx = 0; idx < this.subscriptions.length; idx++) {
        this.subscriptions[idx]();
      }
      this.subscriptions = null;
    }
  }
};
EventsOutsideAngularDirective.ɵfac = function EventsOutsideAngularDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || EventsOutsideAngularDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
};
EventsOutsideAngularDirective.ɵdir = ɵɵdefineDirective({
  type: EventsOutsideAngularDirective,
  selectors: [["", "kendoEventsOutsideAngular", ""]],
  inputs: {
    events: [0, "kendoEventsOutsideAngular", "events"],
    scope: "scope"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsOutsideAngularDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoEventsOutsideAngular]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    events: [{
      type: Input,
      args: ["kendoEventsOutsideAngular"]
    }],
    scope: [{
      type: Input
    }]
  });
})();
var EventsModule = class {
};
EventsModule.ɵfac = function EventsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || EventsModule)();
};
EventsModule.ɵmod = ɵɵdefineNgModule({
  type: EventsModule,
  imports: [EventsOutsideAngularDirective],
  exports: [EventsOutsideAngularDirective]
});
EventsModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsModule, [{
    type: NgModule,
    args: [{
      imports: [EventsOutsideAngularDirective],
      exports: [EventsOutsideAngularDirective]
    }]
  }], null, null);
})();
var ResizeService = class {
  constructor(resizeBatchService) {
    this.resizeBatchService = resizeBatchService;
    this.resize = new EventEmitter();
    this.acceptedSize = false;
    this.state = 0;
  }
  acceptSize(size = this.measure()) {
    this.lastWidth = size.width;
    this.lastHeight = size.height;
    this.acceptedSize = true;
  }
  checkChanges() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (this.state === 0) {
      this.state = 1;
      this.resizeBatchService.schedule(this, this.init);
    }
  }
  destroy() {
    this.resizeBatchService.cancel(this);
  }
  checkSize() {
    if (!this.parentElement) {
      return false;
    }
    const {
      width,
      height
    } = this.measure();
    const sameSize = width === this.lastWidth && height === this.lastHeight;
    if (sameSize) {
      return false;
    }
    this.lastWidth = width;
    this.lastHeight = height;
    this.acceptedSize = false;
    this.resize.emit();
    return true;
  }
  initSize() {
    const size = this.measure();
    this.lastWidth = size.width;
    this.lastHeight = size.height;
  }
  measure() {
    let width = 0;
    let height = 0;
    if (this.parentElement) {
      height = this.parentElement.offsetHeight;
      width = this.parentElement.offsetWidth;
    }
    return {
      height,
      width
    };
  }
};
var div = (style2) => {
  const el = document.createElement("div");
  el.style.cssText = style2;
  return el;
};
var computedProp = (elem, prop) => getComputedStyle(elem, null).getPropertyValue(prop);
var WRAP_STYLE = "position: absolute; display: block; left: 0; top: 0; right: 0; bottom: 0; z-index: -1;overflow: hidden; visibility: hidden;";
var EXPAND_CHILD_STYLE = "position: absolute; left: 0; top: 0; transition: 0s;";
var SHRINK_CHILD_STYLE = EXPAND_CHILD_STYLE + "width: 200%; height: 200%;";
var ResizeCompatService = class extends ResizeService {
  constructor(resizeBatchService, element, ngZone) {
    super(resizeBatchService);
    this.element = element;
    this.ngZone = ngZone;
  }
  checkChanges() {
    if (this.state === 2) {
      if (!this.resizeBatchService.isScheduled(this)) {
        this.resizeBatchService.schedule(this, this.checkSize);
      }
      return;
    }
    super.checkChanges();
  }
  destroy() {
    var _a;
    super.destroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.expand) {
      const element = (_a = this.element) === null || _a === void 0 ? void 0 : _a.nativeElement;
      element.removeChild(this.expand);
      element.removeChild(this.shrink);
      this.expand.removeChild(this.expandChild);
      this.expand = this.expandChild = this.shrink = this.element = null;
    }
  }
  checkSize() {
    if (super.checkSize()) {
      this.reset();
      return true;
    }
    return false;
  }
  init() {
    var _a;
    const parentElement = this.parentElement = (_a = this.element) === null || _a === void 0 ? void 0 : _a.nativeElement.parentElement;
    if (computedProp(parentElement, "position") === "static") {
      parentElement.style.position = "relative";
    }
    this.state = 2;
    this.render();
    this.reset();
    this.initSize();
    this.subscribe();
  }
  render() {
    var _a;
    const element = (_a = this.element) === null || _a === void 0 ? void 0 : _a.nativeElement;
    element.style.cssText = WRAP_STYLE;
    element.setAttribute("dir", "ltr");
    this.expand = div(WRAP_STYLE);
    this.expandChild = div(EXPAND_CHILD_STYLE);
    this.expand.appendChild(this.expandChild);
    element.appendChild(this.expand);
    this.shrink = div(WRAP_STYLE);
    const shrinkChild = div(SHRINK_CHILD_STYLE);
    this.shrink.appendChild(shrinkChild);
    element.appendChild(this.shrink);
  }
  reset() {
    const expandChild = this.expandChild;
    expandChild.style.width = "100000px";
    expandChild.style.height = "100000px";
    const expand = this.expand;
    expand.scrollLeft = 1e5;
    expand.scrollTop = 1e5;
    const shrink = this.shrink;
    shrink.scrollLeft = 1e5;
    shrink.scrollTop = 1e5;
  }
  subscribe() {
    this.ngZone.runOutsideAngular(() => {
      this.subscription = (0, import_rxjs.merge)((0, import_rxjs.fromEvent)(this.shrink, "scroll"), (0, import_rxjs.fromEvent)(this.expand, "scroll")).subscribe(() => {
        this.checkSize();
      });
    });
  }
};
var HAS_OBSERVER = typeof ResizeObserver !== "undefined";
var ResizeObserverService = class extends ResizeService {
  constructor(resizeBatchService, element, ngZone) {
    super(resizeBatchService);
    this.element = element;
    this.ngZone = ngZone;
  }
  static supported() {
    return HAS_OBSERVER;
  }
  destroy() {
    super.destroy();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.parentElement = null;
  }
  init() {
    this.parentElement = this.element.nativeElement.parentElement;
    this.initSize();
    this.state = 2;
    this.ngZone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkSize();
      });
      this.resizeObserver.observe(this.parentElement);
    });
  }
};
var ResizeBatchService = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.scheduled = [];
    this.resolvedPromise = Promise.resolve(null);
    this.flush = this.flush.bind(this);
  }
  schedule(instance, method) {
    this.scheduled.push({
      instance,
      method
    });
    if (!this.subscription) {
      this.ngZone.runOutsideAngular(() => {
        this.subscription = (0, import_rxjs.from)(this.resolvedPromise).subscribe(this.flush);
      });
    }
  }
  isScheduled(instance) {
    return Boolean(this.scheduled.find((item) => item.instance === instance));
  }
  cancel(instance) {
    const scheduled = this.scheduled;
    const count = scheduled.length;
    for (let idx = 0; idx < count; idx++) {
      if (scheduled[idx].instance === instance) {
        scheduled.splice(idx, 1);
        if (!scheduled.length) {
          this.unsubscribe();
        }
        return;
      }
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  flush() {
    this.scheduled.forEach((item) => {
      item.method.call(item.instance);
    });
    this.scheduled = [];
    this.unsubscribe();
  }
};
ResizeBatchService.ɵfac = function ResizeBatchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeBatchService)(ɵɵinject(NgZone));
};
ResizeBatchService.ɵprov = ɵɵdefineInjectable({
  token: ResizeBatchService,
  factory: ResizeBatchService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeBatchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var DEFAULT_RATE_LIMIT = 10;
var ResizeSensorComponent = class {
  constructor(resizeBatchService, element, ngZone) {
    this.rateLimit = DEFAULT_RATE_LIMIT;
    this.resize = new EventEmitter();
    const serviceType = ResizeObserverService.supported() ? ResizeObserverService : ResizeCompatService;
    this.resizeService = new serviceType(resizeBatchService, element, ngZone);
    const throttleTime = 1e3 / (this.rateLimit || DEFAULT_RATE_LIMIT);
    this.subscription = this.resizeService.resize.pipe((0, import_operators.auditTime)(throttleTime)).subscribe(() => {
      if (!this.resizeService.acceptedSize) {
        this.resize.emit();
      }
    });
  }
  ngAfterViewChecked() {
    this.resizeService.checkChanges();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.resizeService.destroy();
  }
  acceptSize(size) {
    this.resizeService.acceptSize(size);
  }
};
ResizeSensorComponent.ɵfac = function ResizeSensorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeSensorComponent)(ɵɵdirectiveInject(ResizeBatchService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ResizeSensorComponent.ɵcmp = ɵɵdefineComponent({
  type: ResizeSensorComponent,
  selectors: [["kendo-resize-sensor"]],
  inputs: {
    rateLimit: "rateLimit"
  },
  outputs: {
    resize: "resize"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function ResizeSensorComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeSensorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-resize-sensor",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ResizeBatchService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    rateLimit: [{
      type: Input
    }],
    resize: [{
      type: Output
    }]
  });
})();
var ResizeSensorModule = class {
};
ResizeSensorModule.ɵfac = function ResizeSensorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeSensorModule)();
};
ResizeSensorModule.ɵmod = ɵɵdefineNgModule({
  type: ResizeSensorModule,
  imports: [ResizeSensorComponent],
  exports: [ResizeSensorComponent]
});
ResizeSensorModule.ɵinj = ɵɵdefineInjector({
  providers: [ResizeBatchService],
  imports: [ResizeSensorComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeSensorModule, [{
    type: NgModule,
    args: [{
      imports: [ResizeSensorComponent],
      exports: [ResizeSensorComponent],
      providers: [ResizeBatchService]
    }]
  }], null, null);
})();
var KendoInput = class {
};
var Keys;
(function(Keys2) {
  Keys2[Keys2["Alt"] = 18] = "Alt";
  Keys2[Keys2["ArrowDown"] = 40] = "ArrowDown";
  Keys2[Keys2["ArrowLeft"] = 37] = "ArrowLeft";
  Keys2[Keys2["ArrowRight"] = 39] = "ArrowRight";
  Keys2[Keys2["ArrowUp"] = 38] = "ArrowUp";
  Keys2[Keys2["Backspace"] = 8] = "Backspace";
  Keys2[Keys2["Control"] = 17] = "Control";
  Keys2[Keys2["Delete"] = 46] = "Delete";
  Keys2[Keys2["Digit0"] = 48] = "Digit0";
  Keys2[Keys2["Digit1"] = 49] = "Digit1";
  Keys2[Keys2["Digit2"] = 50] = "Digit2";
  Keys2[Keys2["Digit3"] = 51] = "Digit3";
  Keys2[Keys2["Digit4"] = 52] = "Digit4";
  Keys2[Keys2["Digit5"] = 53] = "Digit5";
  Keys2[Keys2["Digit6"] = 54] = "Digit6";
  Keys2[Keys2["Digit7"] = 55] = "Digit7";
  Keys2[Keys2["Digit8"] = 56] = "Digit8";
  Keys2[Keys2["Digit9"] = 57] = "Digit9";
  Keys2[Keys2["End"] = 35] = "End";
  Keys2[Keys2["Enter"] = 13] = "Enter";
  Keys2[Keys2["Escape"] = 27] = "Escape";
  Keys2[Keys2["F1"] = 112] = "F1";
  Keys2[Keys2["F2"] = 113] = "F2";
  Keys2[Keys2["F10"] = 121] = "F10";
  Keys2[Keys2["Home"] = 36] = "Home";
  Keys2[Keys2["Insert"] = 45] = "Insert";
  Keys2[Keys2["KeyA"] = 65] = "KeyA";
  Keys2[Keys2["KeyB"] = 66] = "KeyB";
  Keys2[Keys2["KeyC"] = 67] = "KeyC";
  Keys2[Keys2["KeyD"] = 68] = "KeyD";
  Keys2[Keys2["KeyE"] = 69] = "KeyE";
  Keys2[Keys2["KeyF"] = 70] = "KeyF";
  Keys2[Keys2["KeyG"] = 71] = "KeyG";
  Keys2[Keys2["KeyH"] = 72] = "KeyH";
  Keys2[Keys2["KeyI"] = 73] = "KeyI";
  Keys2[Keys2["KeyJ"] = 74] = "KeyJ";
  Keys2[Keys2["KeyK"] = 75] = "KeyK";
  Keys2[Keys2["KeyL"] = 76] = "KeyL";
  Keys2[Keys2["KeyM"] = 77] = "KeyM";
  Keys2[Keys2["KeyN"] = 78] = "KeyN";
  Keys2[Keys2["KeyO"] = 79] = "KeyO";
  Keys2[Keys2["KeyP"] = 80] = "KeyP";
  Keys2[Keys2["KeyQ"] = 81] = "KeyQ";
  Keys2[Keys2["KeyR"] = 82] = "KeyR";
  Keys2[Keys2["KeyS"] = 83] = "KeyS";
  Keys2[Keys2["KeyT"] = 84] = "KeyT";
  Keys2[Keys2["KeyU"] = 85] = "KeyU";
  Keys2[Keys2["KeyV"] = 86] = "KeyV";
  Keys2[Keys2["KeyW"] = 87] = "KeyW";
  Keys2[Keys2["KeyX"] = 88] = "KeyX";
  Keys2[Keys2["KeyY"] = 89] = "KeyY";
  Keys2[Keys2["KeyZ"] = 90] = "KeyZ";
  Keys2[Keys2["NumpadDecimal"] = 110] = "NumpadDecimal";
  Keys2[Keys2["PageDown"] = 34] = "PageDown";
  Keys2[Keys2["PageUp"] = 33] = "PageUp";
  Keys2[Keys2["Shift"] = 16] = "Shift";
  Keys2[Keys2["Space"] = 32] = "Space";
  Keys2[Keys2["Tab"] = 9] = "Tab";
})(Keys || (Keys = {}));
var focusableSelector = ['a[href]:not([tabindex^="-"]):not([disabled])', 'area[href]:not([tabindex^="-"]):not([disabled])', 'input:not([tabindex^="-"]):not([disabled])', 'select:not([tabindex^="-"]):not([disabled])', 'textarea:not([tabindex^="-"]):not([disabled])', 'button:not([tabindex^="-"]):not([disabled])', 'iframe:not([tabindex^="-"]):not([disabled])', 'object:not([tabindex^="-"]):not([disabled])', 'embed:not([tabindex^="-"]):not([disabled])', '*[tabindex]:not([tabindex^="-"]):not([disabled])', '*[contenteditable]:not([tabindex^="-"]):not([disabled]):not([contenteditable="false"])'].join(",");
var watermarkStyles = `
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    zIndex: 101;
    pointerEvents: none;
    backgroundImage: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABVxSURBVHgB7Z3tVRtJE4WL9zgANgLLGRCCnAGOADmCxRGgDFAGYiOADKQMIAGO9J8ji42g37mjqlUjBgOanpn+uM85sjC2sKzbVd1dVV0tQgghhBBCCCGEEEIIKRPn3Gn1GAlJmmN1pP558J6OX9540ejh4WGlX09OTk7+EZIclXYXlY43+vVflY7PH3wd9c+AY/Wvvcb9/b0bjUYOz/hBQpICmh1oOPrEa6l/4rTR337AhIMgTSqtzg+0m8gnof7p0mD8EzmGhkFwJiR6np6e7luLL9Q/RTDTBzF+7wfWg2CxWOCHjYVET6XTdLPZrFuLL9Q/NeCkoVUQ4/d+6Ijev1yof1rAUVMvQgjJHebrSRu+CEmWo/O8hISgCjStKpgiGoDWed4AUP/hwGf++Pi4hQYyFHgDzBP3T7A8b0uo/zD4+sMBy1CwWKR/YjF+fS/Uv2di0t/eEAdBT0QnvlD/PolR/xoOgu4JUd7bFdS/e6I1foODoFuqz3M2mUziFF+of5dEb/xGwyAYCwmCVuPNYv5MqX94Yl75NWKD4PLyEm92KqQoqH9Y8Bnis0zC+A14LbxxVqiVCfUPh678plxNFYQe5pjRgAgpDAv4IOAHJyCEkDJoiPaeCyG5UA1oRIYWHNivSSbV0wLq/zbQXz+bS8kV/AeZJ35NCcYPqH8zvv4VS8kVFou8phTjB9T/NcVt+zgI9rjQDRwTgPrvKcn5v4CDYIfT/vtFiS/UHxRr/AYHwQ4t9DiVwihZ/+KN36ATKJsS9U+utr9r/EGQdQSUNFKa/geZkImQ/2rHlznnQDG7oX9b9Xwl5AUl6G9oLcSSxl8Q/p4P13YJIaQMisvzEkJ2lJjnJyQY3lnoJGfNUvP8oUhZf7c70s2eCG1wL7uhRJ0iQnCveiDIhzf7t/f9IvP8IUhJfx/b9rErUkvgRVPIE1fv6xrvbzweu7OzM3d7e4v3OhfSilT092HMJzCxF4u43eWctfFvt1uHu9nxXvF1CWmtroldfx9W+HVErINAjX+M65ngAPxnOAJ1AiMhrUjBCdD4Oya2QYBlPwx8vV47WwFg+a+XZbrz83NzANz/ByBmJ0Dj74lYBgECfrbnt6U/DB/vC7388L2rqyu8vzshwYjRCdD4e8YfBLidVgYA0X7M9jB8PGazmbu5ualnfiz9dSAsufwPTwz6+5jjp/H3CD5ofPB9343u9v3u6+U+0jyY7eEA8Hx3d4c/QjvvMyGdMZT+TeA9wBHR+DPHUn3T6bRe7uMxn89tn18v/TH7O17gQEheYM9vEX7M9hbsg/FbHED3/IPPSISQgNhyE0au+7x7PPtOQFcB3PMTMjTYf4cyRN3zL2DgMHgs/7XU99acgDIWEgUh9W/4uWMh8QKBvCh8qxSR7fmxt0eEv8kJ6MzP8/2REFL/g59bp/o0xsMAb6xAnBB5Yr+6D3X9KOpBxP/ACWA0jFnoEw+h9D/4mYd5/pGQeAlRLFK95tJy+35578PDQ+0E9LAPi3wixAUsFmKRT6I0DIIPzdJuf6R3i+UeZnsz/nqjPx47/fMpZ/54OVb/g5/BZi4pY4Pgo8s2d3CkF0Z/cXFRL/+Xy2W9BdBUH4/5JsBn9W94PZu5pI77QzMOjepiNp/j71hO//fv31sr7qmtfT73i3xWjnvAZHhH/4nquXrLwB2bueSJ27Vmvodhq4df4BmzvQb3IPxWl/zgRl/DwZA4GrhdYFUHfbHE1y0enXsJ2FLfCnggvjqBejDoTI8o38ocgJAscNq8BY4fv/Uf+J46gjkdQcbA+19fXzs7zQfR8TWcgH+kFw/u+fMDKz/o3OQETk9PLcWLPSBbeeWELd91eb+CcTc5gXr6r9J8PNKbF/7S3z+6DYcvDasBOv6M0GUduNDfv+cEYPhjIVmA+I3Vc4gaOQzfHAECvb4joAPICCzlrIJP93h/dAIYDBQ/L8wBNC37rXUblv5CB5AfGvi5h6F7Ed9GJ2CZP0b780O1vreVnnhOAFsBOoCMscg/HMBbTsCO+grJFkvvHmYCSnYA/5MMcbsiH6TykNgfr9fry58/f0oltFxcXMj379+l+h42gBcnJyfr6iXfq1nhJ56FZIeuAq+fn59Xv379Oq0CgVJNBEIydAAavLv98ePHeSX4bfX1OQSv9noQ/a7y9A8HTuAcTqB63FSPZyE5Mq3GwOW3b99kNpu9+5e/fv2Kp3+FpAW8vB3cwbLOOvZYfl9LfGdW9KOn+mZCskZXhCuL9vtLfjvshd97hWArpn8TxGn5rhZzOL/gB19DYBzzxcEeTQEtGfArB7c7xbmyVu4YExoTuNcYEL6eCkkTxHYOmna4wzQfvq8z/+o949e940hIkjTp5/ZXjm/1+VQfr856UP/EcLtqr9s/OQENDl5+wPhH3nHQZK6mJjucNvNo2w+A+icC0jaY4a2LT5MT+Mye3+l58JSupiY7XIA2XtQ/IZw2f7D9v+X6D53AZ/f8LqGrqckOF7CNF/VPAF3Or6xvv53r951Amx5+DYOAXWEjxXXQxov6R4zTSzusht8OfABE+r3U39y1iPbbIODVX3ED4/Tagk8kENQ/QiyaC1Fg7PX6frm0Mk6/wUOQ8l799+j9I0cDwcF1ov4R4Xbde2vjxi92ogsPzPrY92szD7buJiQn3K6+v17q2yxvlV1u3+TRAn4jIYTkAfbymOWx1AcwfHMEXp5/JISQ9PEDd867ohvGbvt+cwRe6+5ee7ltNpuVf7yYdA8+68fHxy0+exkY6t8RGnSxJX19yAd7fWvhjEs7NOCHb2D9/+AGqO3HQGSeuD/8PD/GggwM9e8IBPCwr7ciHnzA6NrqtW5+4QRkIByLRXrDRXhXH/XvCKRccEuPX8mHD9jr7Vc7AV32D9rJh4Oge2I0foP6d8QHnADO9kdxYw8HQXfEbPwG9e+It5yAlvdG1beNgyA8KRi/Qf07oskJIEYQw8x/SMMgGAs5CmR0UjF+g/oHwh00YzAn0OZgT1/YINBU5VTIUeCzw2eYivEb1L8l7o1mDm7X220a48x/iNtVLE4dC5OOxu2794wlMaj/kbgAzRwIIQmS4p6PEBKIp6enexo/IYWCPdNms1nnbPxat7BwvH/+P7Dt08/kUjKH+hcOxGeeeI8f86lYSuZQ/8JhsciehoBv9rMi9VdcwZcucBCkVeEXmuL1dy0vbciBkgdBycZvFKs/8/x7ShwENP49xelP8V9T0iBgncdritGfxv82/iDIORJ+EAGfCKnJXn8a//to7fgy51y45sCX1P812erPZR8hBVMZ/Ax9+2j8hBSIHumcpXikkxBCBsXtz8QnUyXndvfz8Sx8AFLUnwTEveyKE32KyAK+7IYThqT0V88/o+cPBz7TVPLEJdb2d00y+pv4elHHTEgwUigWYaq3O6LXn56/e2IeBDT+7olWf4rfHzEOAurfH9HpT/H7J6ZBQP37Jxr9Kf5w+IMAt9PKQOB6NurfP4Prjyg/jX9Y8JnDAHE/vQwE/m0MQOrfP4PqX/3jp15Dj4kQQspCK5SK7OZDCCGEEBIfbneH4kgCoT9vLCQJguqPaD8CDdXzlZDogaEuFotgKSLL9uBnYmAJiZqg+vupPlzbJSR6YKSh8sSODVyTI5j+LO9NlxDFIqzzSJfW+jPPnz4Ng+DDGRvqnz5t9GeePxNsEHx2+U798+BY/e3FzPNnwLE6Uv88oI6EEEIIIYQQQgghhBBCCCGEEEIIIYQQQkiRoHyQxz/T51gdqX8evKfjlzdeNHp4eFjp15OTk5N/hCQHjoFWOt7o139VOj5/8HXUPwOO1f+/02ApXEhJmmnTzIP6p49r28wlRFMJMgwhmnlQ/3RB854g/RwaBgF7wkVOyGYe1D9N0L4vWDMXGwTaFHIsJGpgpF5TyIm0hPqnR6XTdLPZrF2oZi7aVIDePxFgqCH1ov6EEEIIITHRtl7jixBCkuToPH8ocGMQrihmiqh/8Jnjau6hrwen/sPQOs8fAgxA5on7xxcfBigDQf2HIUSdR6g3wmKRnolGfKH+QxCT/vaGOAh6Ijrxhfr3SYz613AQdE+04gv174Ng5b1dwUHQHTEbv0H9u6X6PGeTySTu69oaBsFYSCui9/we1L87tBpzFv1naoPg8vISA2AqpBX4DPFZxm78BvUn9awF8R07yrRGPf80pdmU+hNCyJHoYa4ZHSghhWEBXwT84ASEEFIGDdmec8mJ6j+EyNAiu/9YACC+fjaXkinU/21SSPW2BuIzT/waX/yKpWQK9W+mCOMHLBZ5TfbLPg/q/5pijN/gINhTnPhC/X1cwAauScFBUKbxG9R/h9P7F0rTv6bkQVCy8Rt0Aju00OtUSqTEQZBSbX/X0AmQF4Mg5wi4cRAJn0jhlKY/aUBrx5c558ANzYUvafx7StAfqxv0UKyer4QQUg5+zAfXdgkhpAxKqvMghHgUm+cPhdufhU/Oa+qRTp6Jb0HK+oOi8/whcC+74SSTIrJlH7vitCMl/RHcqx4I8uHN/u19v9w8f1swi6aWJ+aeLxyp6F+9r2u8v/F47M7Oztzt7S3e61xIe1IqFmGFX3hi19/tLuesjX+73brFYlG/V3xdQlq7F1JwAjT+7ohVfzX+Ma5ngwPwn+EI1AmMhLQnZidA4++e2PTHsh8Gvl6vna0AsPzXy1Ld+fm5OQDu/0MRoxOg8fdHLPoj4Gd7flv6w/DxvtDLD9+7urrC+7sTEhZ/EOB2WhkYE57G3w8x6I9oP2Z7GD4es9nM3dzc1DM/lv46FpZc/ncEBgEMD7XVMjB4DxiINP7+GEp/t7/voF7uI0WJ2R4OAM93d3f4I7TzPhNCSD5Yqm86ndbLfTzm87nt8+ulP2Z/x+vQCMkL7Pktwo/Z3oJ9MH6LA+ief/AVKSEkILbdgJHr3v4ez74T0FUA9/wxgP1XF0Lozx0LiZqQ+uuefwEDh8Fj+a+lvrfmBJSxkOGBEF4UNliKyFJ9usdjgCdSQupve37s7RHhb3ICOvPzfH8swDhD54kb8vwjIVESSn+/ug91/SjqQcT/wAlgNhiz0CcyQhaLsMgnPULoX73m0nL7fnnvw8ND7QT0sA+LfGKlYRB82ks7NnNIlmP1d/sjvVtsJTDbm/HXG/3x2OmfTznzR44NgmOX7Y7NHJLms/q7gyO9MPqLi4t6+b9cLustgKb6eMw3FdwfmjFggKg3X71l4I7NHJLmHf3PVPs5/o7l9H///r214p7a2udzv8hn5RgDShsN3Czg1SE4lom6xKO4heB2rdnvYdi6QljgGbO9BvfgOLa65Ac3+hpOBinjtHkDhMdv/Qe+p45gTkeQL7bUtwIeaK5OoJ4MdKZHlG9lDkBIPsDzQ/QmJ3B6emopHqwB2corQzDDX19fOzvNh7GAr+EE/CO9eHDPnxH+0t8/ugnBpWE1QOHzwpbvurxfwbibnEA9/VdpPh7pzQjs3yyfK2rkMHxzBAj0+I6ADiAvdFsHLvT37zkBGP5YSB6YA2ha9lvrJiz9hQ4gO7CVswo+jfH80QlgMqD2GaKC35unF88JYCtAB5AnGvi9h6F7GZ9GJ2CZP0b7M8XSO4eZADqAvLHIPxzAW07AjvpKYfxPCkBngevn5+fVr1+/TqtAoFQDQUieuF2RD1J5SOyP1+v15c+fP6Vy9HJxcSHfv3+X6nsIAF2cnJysq5d8r1YAP/EshVGEA6iYVkZ/+e3bN5nNZu/+5a9fv+LpXyHJocG72x8/fpxXDv+2+vocDr+K9cDp31UrvYcDJ3AOJ1A9bqrHs5D80BlhZdF+f8lvhz3we68QZMX0T3pglWcHd6Cjdeyx/L6W+M6s6EdP9c2ElIHbneJaWStnFIRoTOBe94D4eiokSZyW72oxl/MLfvA1jB6642CPpoCXDPhljO79RwffG6kj2OrzqT5e1Xo3vZ7EC2K7B0073GGaD9/XmX/1nvFT/4Rx2syjbT+AIW+gIZ/D7ao9b//kBDQ4ePkB46f+qeICtPFy2g8gpavJSwZpW8zw1sWnyQl8Zs9P/RPFBWzj5RK6mrxkTCfb/1uu/9AJfHbPT/0Tw3XQxqthELArcETocn5lffvtXL/vBNr08KP+CQFxvLbQEwmEDQJe/RQXTi/tsBp+O/AFEOn3Un9z1yLaT/0TQgNBwb20Zg/o/SPBsjkwShh7vb5fLq2M22/wEqS8V/+9sRBChsXtuvfWxo1f7EQnHpj1se/XZh5s3U1ITrhdfX+91LdZ3io73b7JqwX8RkIIyQPs5THLY6kPYPjmCLw8/0hI3iAd8/j4uN1sNisZGLwH/3gpCYcfuHPeFd0wdtv3myPwWnf32suR+veMn+fHBy8DA0fEPHF4NOhmS/r6kA/2+tbCHZd2aMAP38D6/8ENUNtP/XvERXhXn2OxSCcggId9vRXx4LNF12avdfsLJyADQf17IkbjNzgIwoOUK27p8Sv58Nl6vf1qJ6DL/kE7+VD/jonZ+A0OgvB8wAngbH8UN/ZQ/45IwfgNDoLwvOUEtLw3qr6N1D8wiOimYvxGwyAYC2lFkxNAjCCGmf8Q6h8QRHeR7knF+A0bBJqqmgr5NO6gGYc5gTYHe/qC+gfC7bv3jCUx3K5ibepYmPJp3BvNXNyut+M0xpn/EOpPyBG4AM1cCCEJkmLMhxASiKenp3saf4Fg2Vc9FsjpSuZo3hr/115r1lMAe+bNZrPO2fip/wH+nq9iKZkD8ZknLhfq79EQ8MneK7JYpGyov5JShV9oOAjKvnSjeP1LNn6j5EHgWl7akgPF6k/j31PiIGCef09x+jPP+5qSBgGd/2uKcgIHEdCJkBp/EOSaCaHxv00J+tdoDnRJ8V+jtePLHGshaPzvk7P+pGC47SOkYCqDn6FvH42fkAJxuyPdaN01FlIGbnc/37TkFE8o3L4nAmvHCyQ5/S3gw24oYXAvuyKxbLgwktK/xNr+rsFqKpU8sa78Zlz5hSMZ/Znq6Y4UikVMf72oYyYkGNHrT+PvnpgHAVd+3ROt/jT+/ohxEFD//ohOf4rfPzENAurfP1E5AVzPRPH7xx8EuJ1WBoDGPxyH+ruhjlTjbnR9AxMhvYLPHA4YGkjPIMpP4x+WIfUnhYMZx2voMRFCSFlohVqR3XwIIaQc3O5OtrGQJFC9RkKKRCsyRxICi/YuFgvs986ERA3Eh1ahUkT4GQg0Vc9XQqInqP6ODRyTA046VJ7Y1x/XdgmJnmD6M8+bLiGKRVjemy6t9WeeN30aBsGHI/bUP33a6M88bybYIPjs9o3658Gx+tuLmefNgGN1pP55QB0JIYQQQgghhBBCCJGy+T9ftRg+rVNPfAAAAABJRU5ErkJggg==');
`;
var bannerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: "16px",
  right: "16px",
  padding: "12px",
  borderRadius: "4px",
  boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.03)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  backgroundColor: "#FFC000",
  color: "#1E1E1E",
  zIndex: 2e4
};
var buttonStyles = {
  display: "inline-flex",
  position: "relative",
  border: "none",
  borderRadius: "4px",
  padding: "5px",
  backgroundColor: "transparent",
  transition: "color 0.2s ease-in-out",
  outline: "none",
  cursor: "pointer"
};
var licenseKeyUrl = "https://www.telerik.com/kendo-angular-ui/components/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-banner";
var bannerPresentOnPage = false;
var WatermarkOverlayComponent = class {
  constructor() {
    this.watermarkStyle = watermarkStyles;
    this.isOpen = true;
    this.bannerMounted = false;
    this.bannerStyles = bannerStyles;
    this.buttonStyles = buttonStyles;
    this.licenseKeyUrl = licenseKeyUrl;
  }
  ngOnInit() {
    if (!bannerPresentOnPage) {
      this.bannerMounted = true;
      bannerPresentOnPage = true;
    }
  }
  ngAfterViewInit() {
    if (this.isBannerRendered) {
      document.body.appendChild(this.banner.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.isBannerRendered) {
      document.body.removeChild(this.banner.nativeElement);
    }
  }
  closeBanner() {
    this.isOpen = false;
  }
  get isBannerRendered() {
    return isDocumentAvailable() && this.banner && this.banner.nativeElement;
  }
};
WatermarkOverlayComponent.ɵfac = function WatermarkOverlayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WatermarkOverlayComponent)();
};
WatermarkOverlayComponent.ɵcmp = ɵɵdefineComponent({
  type: WatermarkOverlayComponent,
  selectors: [["div", "kendoWatermarkOverlay", ""]],
  viewQuery: function WatermarkOverlayComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.banner = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function WatermarkOverlayComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleMap(ctx.watermarkStyle);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c1,
  decls: 1,
  vars: 1,
  consts: [["banner", ""], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z", "fill", "#1E1E1E"], [3, "href", "ngStyle"], ["title", "Learn More", 3, "ngStyle"], ["d", "M15 8C15 11.8656 11.8656 15 8 15C4.13437 15 1 11.8656 1 8C1 4.13437 4.13437 1 8 1C11.8656 1 15 4.13437 15 8ZM14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8ZM11 6C11 7.4125 10.2687 8.05937 9.73125 8.53125C9.25937 8.94688 9 9.17813 9 10H7C7 8.275 7.84688 7.525 8.40938 7.03125C8.84062 6.65312 9 6.50938 9 6C9 5.45 8.55 5 8 5C7.45 5 7 5.45 7 6H5C5 4.34375 6.34375 3 8 3C9.65625 3 11 4.34375 11 6ZM9 13V11H7V13H9Z", "fill", "#1E1E1E"], ["title", "Close", 3, "click", "ngStyle"], ["d", "M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z", "fill", "#1E1E1E"]],
  template: function WatermarkOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, WatermarkOverlayComponent_div_0_Template, 15, 10, "div", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isOpen && ctx.bannerMounted);
    }
  },
  dependencies: [NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WatermarkOverlayComponent, [{
    type: Component,
    args: [{
      selector: "div[kendoWatermarkOverlay]",
      template: `
        <div #banner *ngIf="isOpen && bannerMounted" [ngStyle]="bannerStyles">
            <span [ngStyle]="{ display: 'flex', alignSelf: 'center', marginRight: '8px' }">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z" fill="#1E1E1E"/>
                </svg>
            </span>

            <span>No valid license found for Kendo UI for Angular. Learn how to activate your license.</span>

            <div [ngStyle]="{ display: 'flex', alignItems: 'center', marginLeft: '24px' }">
                <a [href]="licenseKeyUrl" [ngStyle]="{marginRight: '8px', display: 'flex'}">
                    <button title='Learn More' [ngStyle]="buttonStyles">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M15 8C15 11.8656 11.8656 15 8 15C4.13437 15 1 11.8656 1 8C1 4.13437 4.13437 1 8 1C11.8656 1 15 4.13437 15 8ZM14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8ZM11 6C11 7.4125 10.2687 8.05937 9.73125 8.53125C9.25937 8.94688 9 9.17813 9 10H7C7 8.275 7.84688 7.525 8.40938 7.03125C8.84062 6.65312 9 6.50938 9 6C9 5.45 8.55 5 8 5C7.45 5 7 5.45 7 6H5C5 4.34375 6.34375 3 8 3C9.65625 3 11 4.34375 11 6ZM9 13V11H7V13H9Z" fill="#1E1E1E"/>
                        </svg>
                    </button>
                </a>

                <button title='Close' [ngStyle]="buttonStyles" (click)="closeBanner()">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z" fill="#1E1E1E"/>
                    </svg>
                </button>
            </div>
        </div>
    `,
      standalone: true,
      imports: [NgIf, NgStyle]
    }]
  }], null, {
    watermarkStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    banner: [{
      type: ViewChild,
      args: ["banner"]
    }]
  });
})();
var WatermarkModule = class {
};
WatermarkModule.ɵfac = function WatermarkModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WatermarkModule)();
};
WatermarkModule.ɵmod = ɵɵdefineNgModule({
  type: WatermarkModule,
  imports: [WatermarkOverlayComponent],
  exports: [WatermarkOverlayComponent]
});
WatermarkModule.ɵinj = ɵɵdefineInjector({
  imports: [WatermarkOverlayComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WatermarkModule, [{
    type: NgModule,
    args: [{
      exports: [WatermarkOverlayComponent],
      imports: [WatermarkOverlayComponent]
    }]
  }], null, null);
})();
var allowed = ["telerik.com", "progress.com", "stackblitz.io", "csb.app"];
function shouldShowValidationUI(isPackageValid) {
  const skip2 = allowed.some((hostname) => {
    var _a;
    return (_a = globalThis.document) === null || _a === void 0 ? void 0 : _a.location.hostname.endsWith(hostname);
  });
  return !skip2 && !isPackageValid;
}
var PrefixTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._showSeparator = false;
  }
  /**
   * Sets the `showSeparator` attribute of the `prefixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
};
PrefixTemplateDirective.ɵfac = function PrefixTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PrefixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
PrefixTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: PrefixTemplateDirective,
  selectors: [["", "kendoPrefixTemplate", ""]],
  inputs: {
    showSeparator: "showSeparator"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPrefixTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    showSeparator: [{
      type: Input
    }]
  });
})();
var SuffixTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._showSeparator = false;
  }
  /**
   * Sets the `showSeparator` attribute of the `suffixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
};
SuffixTemplateDirective.ɵfac = function SuffixTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SuffixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
SuffixTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: SuffixTemplateDirective,
  selectors: [["", "kendoSuffixTemplate", ""]],
  inputs: {
    showSeparator: "showSeparator"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuffixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSuffixTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    showSeparator: [{
      type: Input
    }]
  });
})();
var SeparatorComponent = class {
  constructor() {
    this.orientation = "vertical";
    this.hostClass = true;
  }
  /**
   * @hidden
   */
  get vertical() {
    return this.orientation === "vertical";
  }
  /**
   * @hidden
   */
  get horizontal() {
    return this.orientation === "horizontal";
  }
};
SeparatorComponent.ɵfac = function SeparatorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SeparatorComponent)();
};
SeparatorComponent.ɵcmp = ɵɵdefineComponent({
  type: SeparatorComponent,
  selectors: [["kendo-separator"]],
  hostVars: 6,
  hostBindings: function SeparatorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-input-separator-vertical", ctx.vertical)("k-input-separator-horizontal", ctx.horizontal)("k-input-separator", ctx.hostClass);
    }
  },
  inputs: {
    orientation: "orientation"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SeparatorComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeparatorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-separator",
      template: ``,
      standalone: true
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    vertical: [{
      type: HostBinding,
      args: ["class.k-input-separator-vertical"]
    }],
    horizontal: [{
      type: HostBinding,
      args: ["class.k-input-separator-horizontal"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-separator"]
    }]
  });
})();
var TemplateContextDirective = class {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  set templateContext(context2) {
    if (this.insertedViewRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
      this.insertedViewRef = void 0;
    }
    if (context2.templateRef) {
      this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context2.templateRef, context2);
    }
  }
};
TemplateContextDirective.ɵfac = function TemplateContextDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TemplateContextDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
TemplateContextDirective.ɵdir = ɵɵdefineDirective({
  type: TemplateContextDirective,
  selectors: [["", "templateContext", ""]],
  inputs: {
    templateContext: "templateContext"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateContextDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[templateContext]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    templateContext: [{
      type: Input
    }]
  });
})();
var MultiTabStop = class {
};
var tags = ["kendo-splitbutton", "kendo-combobox", "kendo-multicolumncombobox", "kendo-datepicker", "kendo-timepicker", "kendo-datetimepicker"];
var ToggleButtonTabStopDirective = class {
  /**
   * @hidden
   */
  constructor(hostEl, renderer, zone, hostComponent) {
    this.hostEl = hostEl;
    this.renderer = renderer;
    this.zone = zone;
    this.hostComponent = hostComponent;
    this.toggleButtonAriaLabel = "toggle popup";
    this.sub = new import_rxjs.Subscription();
    this.onFocus = () => {
      this.renderer.setStyle(this.button, "box-shadow", "inset 0 0 0 1px rgba(0, 0, 0, 0.08)");
    };
    this.onBlur = () => {
      this.renderer.removeStyle(this.button, "box-shadow");
    };
    this.onClick = (e) => {
      const splitButtonToggleEnter = e instanceof KeyboardEvent && e.keyCode === Keys.Enter;
      const isClick = e instanceof PointerEvent;
      (splitButtonToggleEnter || isClick) && (this.focusButton = true);
    };
    this.onKeyDown = (e) => {
      if (e.keyCode === Keys.ArrowDown && e.altKey) {
        e.stopImmediatePropagation();
        this.focusButton = true;
        this.button.click();
      }
    };
    if (isDevMode() && tags.indexOf(hostEl.nativeElement.tagName.toLowerCase()) === -1) {
      console.warn(`The kendoToggleButtonTabStop directive can be applied to the following components only: ${tags}`);
    }
  }
  ngOnInit() {
    this.active = true;
  }
  ngAfterViewInit() {
    var _a, _b;
    if (!isDocumentAvailable()) {
      return;
    }
    this.isSplitButton = this.hostEl.nativeElement.classList.contains("k-split-button");
    if (this.active) {
      this.activateButton();
    }
    if (((_a = this.hostComponent) === null || _a === void 0 ? void 0 : _a.escape) instanceof EventEmitter) {
      this.sub = (_b = this.hostComponent) === null || _b === void 0 ? void 0 : _b.escape.subscribe(() => {
        this.returnFocusToToggleButton();
      });
      this.sub.add(this.hostComponent.close.subscribe((e) => {
        if (!e.isDefaultPrevented() && this.focusButton) {
          this.zone.onStable.pipe((0, import_operators.take)(1)).subscribe(() => {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => this.focusButton = false);
            });
          });
          const mainFocusableElement = this.hostEl.nativeElement.querySelector(".k-split-button > .k-button:first-child, .k-input-inner");
          const optionsListContainer = document.getElementById(`${mainFocusableElement.getAttribute("aria-controls")}`);
          const inList = !!optionsListContainer && optionsListContainer.contains(document.activeElement);
          const inWrapper = this.hostEl.nativeElement.contains(document.activeElement);
          const focusInComponent = inList || inWrapper;
          if (focusInComponent) {
            this.returnFocusToToggleButton();
          }
        }
      }));
    }
    const close = this.hostComponent.close;
  }
  ngOnChanges(changes) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (changes["active"]) {
      changes["active"].currentValue ? this.activateButton() : this.deactivateButton();
    }
    if (changes["toggleButtonAriaLabel"]) {
      this.button && this.renderer.setAttribute(this.button, "aria-label", changes["toggleButtonAriaLabel"].currentValue);
    }
  }
  ngOnDestroy() {
    this.removeListeners();
    this.sub.unsubscribe();
  }
  activateButton() {
    var _a;
    const el = this.hostEl.nativeElement;
    const tabindex2 = (_a = el.querySelector('button:not([tabindex^="-"]), input:not([tabindex^="-"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("tabindex");
    this.button = el.querySelector(".k-input-button, .k-split-button-arrow");
    this.button && this.renderer.setAttribute(this.button, "tabindex", tabindex2);
    this.button && this.renderer.setAttribute(this.button, "aria-label", this.toggleButtonAriaLabel);
    this.button && this.renderer.removeAttribute(this.button, "aria-hidden");
    if (!this.observer) {
      this.initializeObserver(el);
    }
    this.removeListeners();
    this.addListeners();
  }
  deactivateButton() {
    this.button && this.renderer.setAttribute(this.button, "tabindex", "-1");
    this.button && this.renderer.setAttribute(this.button, "aria-hidden", "true");
    this.button && this.renderer.removeAttribute(this.button, "aria-label");
    this.removeListeners();
    this.observer && this.observer.disconnect();
    this.observer = null;
  }
  addListeners() {
    if (this.button) {
      this.zone.runOutsideAngular(() => this.button.addEventListener("focus", this.onFocus));
      this.zone.runOutsideAngular(() => this.button.addEventListener("blur", this.onBlur));
      this.zone.runOutsideAngular(() => this.button.addEventListener("click", this.onClick));
      this.isSplitButton && this.zone.runOutsideAngular(() => this.button.addEventListener("keyup", this.onClick));
      this.zone.runOutsideAngular(() => this.button.addEventListener("keydown", this.onKeyDown, true));
    }
  }
  removeListeners() {
    if (this.button) {
      this.zone.runOutsideAngular(() => this.button.removeEventListener("focus", this.onFocus));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("blur", this.onBlur));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("click", this.onClick));
      this.isSplitButton && this.zone.runOutsideAngular(() => this.button.removeEventListener("keyup", this.onClick));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("keydown", this.onKeyDown));
    }
  }
  focusToggleButton() {
    this.focusButton && this.zone.runOutsideAngular(() => this.button.focus());
    this.focusButton = false;
  }
  returnFocusToToggleButton() {
    if (this.isSplitButton) {
      this.zone.onStable.pipe((0, import_operators.take)(1)).subscribe(() => {
        this.focusToggleButton();
      });
    } else {
      this.focusToggleButton();
    }
  }
  // Keeps the `aria-controls` and `aria-expanded` attributes of the main focusable element of the component
  // and the toggle button element in sync.
  initializeObserver(element) {
    const mainFocusableElement = element.querySelector(".k-split-button > .k-button:first-child, .k-input-inner");
    const initialExpanded = mainFocusableElement.getAttribute("aria-expanded");
    const initialControls = mainFocusableElement.getAttribute("aria-controls");
    this.button && this.renderer.setAttribute(this.button, "aria-expanded", initialExpanded);
    this.button && initialControls && this.renderer.setAttribute(this.button, "aria-controls", initialControls);
    this.zone.runOutsideAngular(() => {
      const mutationConfig = {
        attributes: true
      };
      const callback = (mutationList) => {
        for (const mutation of mutationList) {
          if (mutation.attributeName === "aria-expanded") {
            this.renderer.setAttribute(this.button, "aria-expanded", mainFocusableElement.getAttribute("aria-expanded"));
          } else if (mutation.attributeName === "aria-controls") {
            const controlsRef = mainFocusableElement.getAttribute("aria-controls");
            !this.isSplitButton && controlsRef ? this.renderer.setAttribute(this.button, "aria-controls", controlsRef) : this.renderer.removeAttribute(this.button, "aria-controls");
          }
        }
      };
      this.observer = new MutationObserver(callback);
      this.observer.observe(mainFocusableElement, mutationConfig);
    });
  }
};
ToggleButtonTabStopDirective.ɵfac = function ToggleButtonTabStopDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToggleButtonTabStopDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(MultiTabStop));
};
ToggleButtonTabStopDirective.ɵdir = ɵɵdefineDirective({
  type: ToggleButtonTabStopDirective,
  selectors: [["", "kendoToggleButtonTabStop", ""]],
  inputs: {
    active: [0, "kendoToggleButtonTabStop", "active"],
    toggleButtonAriaLabel: "toggleButtonAriaLabel"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonTabStopDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoToggleButtonTabStop]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: MultiTabStop
    }];
  }, {
    active: [{
      type: Input,
      args: ["kendoToggleButtonTabStop"]
    }],
    toggleButtonAriaLabel: [{
      type: Input
    }]
  });
})();
var KENDO_ADORNMENTS = [PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent];
var KENDO_COMMON = [...KENDO_ADORNMENTS, DraggableDirective, EventsOutsideAngularDirective, ResizeSensorComponent, ToggleButtonTabStopDirective, WatermarkOverlayComponent];
var KENDO_RESIZESENSOR = [ResizeSensorComponent];
var AdornmentsModule = class {
};
AdornmentsModule.ɵfac = function AdornmentsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AdornmentsModule)();
};
AdornmentsModule.ɵmod = ɵɵdefineNgModule({
  type: AdornmentsModule,
  imports: [PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent],
  exports: [PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent]
});
AdornmentsModule.ɵinj = ɵɵdefineInjector({
  imports: [SeparatorComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdornmentsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_ADORNMENTS],
      exports: [...KENDO_ADORNMENTS]
    }]
  }], null, null);
})();
var PreventableEvent = class {
  constructor() {
    this.prevented = false;
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses
   * the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented
   * by any of its subscribers.
   *
   * @returns `true` if the default action was prevented.
   * Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var canCreateElement = () => isDocumentAvailable() && document.createElement;
var propName = "--kendo-scrollbar-width";
var scrollbarWidth = () => {
  let scrollbarWidth3 = 0;
  if (canCreateElement()) {
    const div2 = document.createElement("div");
    div2.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div2.innerHTML = "&nbsp;";
    document.body.appendChild(div2);
    scrollbarWidth3 = div2.offsetWidth - div2.scrollWidth;
    document.body.removeChild(div2);
  }
  return scrollbarWidth3;
};
var ScrollbarWidthService = class {
  constructor() {
    this.changes = new EventEmitter();
    if (typeof window !== "undefined" && isDocumentAvailable()) {
      document.body.style.setProperty(propName, `${scrollbarWidth()}px`);
    }
  }
};
ScrollbarWidthService.ɵfac = function ScrollbarWidthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ScrollbarWidthService)();
};
ScrollbarWidthService.ɵprov = ɵɵdefineInjectable({
  token: ScrollbarWidthService,
  factory: ScrollbarWidthService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarWidthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ToggleButtonTabStopModule = class {
};
ToggleButtonTabStopModule.ɵfac = function ToggleButtonTabStopModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToggleButtonTabStopModule)();
};
ToggleButtonTabStopModule.ɵmod = ɵɵdefineNgModule({
  type: ToggleButtonTabStopModule,
  imports: [ToggleButtonTabStopDirective],
  exports: [ToggleButtonTabStopDirective]
});
ToggleButtonTabStopModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonTabStopModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButtonTabStopDirective],
      exports: [ToggleButtonTabStopDirective]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-svg-icons/dist/index.es.js
var caretAltUpIcon = {
  name: "caret-alt-up",
  content: '<path d="m256 160 128 192H128z" />',
  viewBox: "0 0 512 512"
};
var caretAltRightIcon = {
  name: "caret-alt-right",
  content: '<path d="M352 256 160 384V128z" />',
  viewBox: "0 0 512 512"
};
var caretAltDownIcon = {
  name: "caret-alt-down",
  content: '<path d="M256 352 128 160h256z" />',
  viewBox: "0 0 512 512"
};
var caretAltLeftIcon = {
  name: "caret-alt-left",
  content: '<path d="m160 256 192-128v256z" />',
  viewBox: "0 0 512 512"
};
var caretAltToRightIcon = {
  name: "caret-alt-to-right",
  content: '<path d="m128 128 192 128-192 128zm224 256V128h-32v256z" />',
  viewBox: "0 0 512 512"
};
var caretAltToLeftIcon = {
  name: "caret-alt-to-left",
  content: '<path d="M352 384 160 256l192-128zM128 128v256h32V128z" />',
  viewBox: "0 0 512 512"
};
var caretAltExpandIcon = {
  name: "caret-alt-expand",
  content: '<path d="M128 288h256L256 480zM256 32 128 224h256.001z" />',
  viewBox: "0 0 512 512"
};
var chevronUpIcon = {
  name: "chevron-up",
  content: '<path d="m129.941 353.941 126.06-126.06 126.061 126.06L416 320 256.001 160 96 320z" />',
  viewBox: "0 0 512 512"
};
var chevronRightIcon = {
  name: "chevron-right",
  content: '<path d="m158.059 129.941 126.06 126.06-126.06 126.061L192 416l160-159.999L192 96z" />',
  viewBox: "0 0 512 512"
};
var chevronDownIcon = {
  name: "chevron-down",
  content: '<path d="m382.059 158.059-126.06 126.06-126.061-126.06L96 192l159.999 160L416 192z" />',
  viewBox: "0 0 512 512"
};
var chevronLeftIcon = {
  name: "chevron-left",
  content: '<path d="m353.941 382.059-126.06-126.06 126.06-126.061L320 96 160 255.999 320 416z" />',
  viewBox: "0 0 512 512"
};
var arrowRightIcon = {
  name: "arrow-right",
  content: '<path d="M224 384v-96H96v-64h128v-96l192 128z" />',
  viewBox: "0 0 512 512"
};
var arrowLeftIcon = {
  name: "arrow-left",
  content: '<path d="M288 128v96h128v64l-128 .001V384L96 256.001z" />',
  viewBox: "0 0 512 512"
};
var columnsIcon = {
  name: "columns",
  content: '<path d="M64 32h96v448H64zm128 448h96V32h-96zM320 32v448h96V32z" />',
  viewBox: "0 0 512 512"
};
var reorderIcon = {
  name: "reorder",
  content: '<path d="M480 128v64H32v-64zM32 224v64h448v-64zm448 96H32v64h448z" />',
  viewBox: "0 0 512 512"
};
var moreVerticalIcon = {
  name: "more-vertical",
  content: '<path d="M240 128c26.4 0 48-21.6 48-48s-21.6-48-48-48-48 21.6-48 48 21.6 48 48 48m0 64c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48m0 160c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48" />',
  viewBox: "0 0 512 512"
};
var displayInlineFlexIcon = {
  name: "display-inline-flex",
  content: '<path d="M96 416h320V96H96zm32-288h256v256H128zm32 32h64v192h-64zm128 0h64v192h-64zM32 32h32v448H32zm416 0h32v448h-32z" />',
  viewBox: "0 0 512 512"
};
var dropletSliderIcon = {
  name: "droplet-slider",
  content: '<path d="M192 384v32c-53 0-96-43-96-96h32c0 35.3 28.7 64 64 64m160-72c0 92.8-71.6 168-160 168S32 404.8 32 312C32 181.3 192 32 192 32s160 149.3 160 280m-32 0c0-46.3-25.3-104.7-73-169-20-27-40.3-49.8-55-65.4-14.7 15.6-34.9 38.5-55 65.4-47.8 64.3-73 122.8-73 169 0 75 57.4 136 128 136s128-61 128-136m128-88h-32v256h32zm0-192h-32v64h32zm-64 96v64h96v-64z" />',
  viewBox: "0 0 512 512"
};
var maxWidthIcon = {
  name: "max-width",
  content: '<path d="M0 96v288h32V96zm479 0v143.4L352 160v64H160v-64L32 240l128 80v-64h192v64l127-79.4V384h32V96z" />',
  viewBox: "0 0 512 512"
};
var clockIcon = {
  name: "clock",
  content: '<path d="M256 128h-32v160h160v-32H256zm0-96C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m0 416c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192" />',
  viewBox: "0 0 512 512"
};
var calendarIcon = {
  name: "calendar",
  content: '<path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z" />',
  viewBox: "0 0 512 512"
};
var lockIcon = {
  name: "lock",
  content: '<path d="M384 224h-32v-96c0-53-43-96-96-96s-96 43-96 96v96h-32c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V256c0-17.6-14.4-32-32-32m-192-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96H192zm64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32" />',
  viewBox: "0 0 512 512"
};
var unlockIcon = {
  name: "unlock",
  content: '<path d="M416 224H224v-96c0-53-43-96-96-96s-96 43-96 96v128h32V128c0-35.3 28.7-64 64-64s64 28.7 64 64v96h-32c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V256c0-17.6-14.4-32-32-32M288 384c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32" />',
  viewBox: "0 0 512 512"
};
var cancelIcon = {
  name: "cancel",
  content: '<path d="M256 32c-50.3 0-96.8 16.6-134.1 44.6-17.2 12.8-32.4 28.1-45.3 45.3C48.6 159.2 32 205.7 32 256c0 123.7 100.3 224 224 224 50.3 0 96.8-16.6 134.1-44.6 17.2-12.8 32.4-28.1 45.3-45.3 28-37.4 44.6-83.8 44.6-134.1 0-123.7-100.3-224-224-224m0 384c-88.2 0-160-71.8-160-160 0-32.6 9.8-62.9 26.6-88.2l221.6 221.6C318.9 406.2 288.6 416 256 416m133.4-71.8L167.8 122.6C193.1 105.8 223.4 96 256 96c88.2 0 160 71.8 160 160 0 32.6-9.8 62.9-26.6 88.2" />',
  viewBox: "0 0 512 512"
};
var checkIcon = {
  name: "check",
  content: '<path d="M434.7 82.7 480 128 192 416 32 256l45.3-45.3L192 325.5z" />',
  viewBox: "0 0 512 512"
};
var checkCircleIcon = {
  name: "check-circle",
  content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m-32 352L96 256l45-45 83 83 147-147 45 45z" />',
  viewBox: "0 0 512 512"
};
var xIcon = {
  name: "x",
  content: '<path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z" />',
  viewBox: "0 0 512 512"
};
var xCircleIcon = {
  name: "x-circle",
  content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m128 306.7L338.7 384 256 301.3 173.3 384 128 338.7l82.7-82.7-82.7-82.7 45.3-45.3 82.7 82.7 82.7-82.7 45.3 45.3-82.7 82.7z" />',
  viewBox: "0 0 512 512"
};
var plusIcon = {
  name: "plus",
  content: '<path d="M288 224V96h-64v128H96v64h128v128h64V288h128v-64z" />',
  viewBox: "0 0 512 512"
};
var minusIcon = {
  name: "minus",
  content: '<path d="M96 224v64h320v-64z" />',
  viewBox: "0 0 512 512"
};
var sortAscSmallIcon = {
  name: "sort-asc-small",
  content: '<path d="M256 192v224h-32V192h-96L240 64l112 128z" />',
  viewBox: "0 0 512 512"
};
var sortDescSmallIcon = {
  name: "sort-desc-small",
  content: '<path d="M352 288 240 416 128 288h96V64h32v224z" />',
  viewBox: "0 0 512 512"
};
var filterIcon = {
  name: "filter",
  content: '<path d="M64 64v32l160 160v224l64-64V256L448 96V64z" />',
  viewBox: "0 0 512 512"
};
var filterClearIcon = {
  name: "filter-clear",
  content: '<path d="m143.5 64 168.2 168.2L288 256v160l-64 64V256L64 96V64zm236.1 100.4L448 96V64H279.3l-64-64L192 22l298 298 22-23.3z" />',
  viewBox: "0 0 512 512"
};
var hyperlinkOpenIcon = {
  name: "hyperlink-open",
  content: '<path d="M32 480h448V256h-32v192H64V64h192V32H32zM320 32l56.9 56.9.5.5L224 242.7l45.3 45.3 153.3-153.4L480 192V32z" />',
  viewBox: "0 0 512 512"
};
var windowIcon = {
  name: "window",
  content: '<path d="M96 96v320h320V96zm288 288H128V192h256z" />',
  viewBox: "0 0 512 512"
};
var windowRestoreIcon = {
  name: "window-restore",
  content: '<path d="M448 32v288h-32V128H160V32zM64 192h288v288H64zm32 256h224V288H96z" />',
  viewBox: "0 0 512 512"
};
var windowMinimizeIcon = {
  name: "window-minimize",
  content: '<path d="M416 288v64H96v-64z" />',
  viewBox: "0 0 512 512"
};
var searchIcon = {
  name: "search",
  content: '<path d="M365.3 320h-22.7l-26.7-26.7C338.5 265.7 352 230.4 352 192c0-88.4-71.6-160-160-160S32 103.6 32 192s71.6 160 160 160c38.4 0 73.7-13.5 101.3-36.1l26.7 26.7v22.7L434.7 480l45.3-45.3zM64 192c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128S64 262.7 64 192" />',
  viewBox: "0 0 512 512"
};
var stickIcon = {
  name: "stick",
  content: '<path d="M192 96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v32h128zm128 160c0 35.3-28.7 64-64 64s-64-28.7-64-64v-96H64v96c0 106 86 192 192 192s192-86 192-192v-96H320zm96-192h-64c-17.7 0-32 14.3-32 32v32h128V96c0-17.7-14.3-32-32-32" />',
  viewBox: "0 0 512 512"
};
var unstickIcon = {
  name: "unstick",
  content: '<path d="M290.6 131.4c12.4-12.4 12.4-32.6 0-45l-45-45c-12.4-12.4-32.6-12.4-45 0L178 63.8l90.1 90zM268.1 334c-24.9 24.9-65.2 24.9-90.1 0s-24.9-65.2 0-90.1l67.5-67.5-90-90.1L88 153.9C13.4 228.5 13.4 349.4 88 424s195.5 74.6 270.1 0l67.5-67.5-90-90.1zm202.6-67.5-45-45c-12.4-12.4-32.6-12.4-45 0L358.2 244l90 90 22.5-22.5c12.4-12.4 12.4-32.6 0-45" />',
  viewBox: "0 0 512 512"
};
var setColumnPositionIcon = {
  name: "set-column-position",
  content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32M192 416H96V96h96zm224 0H224v-32h192zm0-64H224v-64h192zm0-96H224v-64h192zm0-96H224V96h192z" />',
  viewBox: "0 0 512 512"
};
var starOutlineIcon = {
  name: "star-outline",
  content: '<path d="M480 202.4 319.1 188 256 32l-63.1 156L32 202.4l122 111.7L117.2 480 256 391.5 394.8 480 358 314.1zM256 353.6l-90.8 57.9 24-108.5-82.1-75.2 108.1-9.7L256 117.3l40.8 100.8 108.1 9.7-82.1 75.2 24.1 108.5z" />',
  viewBox: "0 0 512 512"
};
var starIcon = {
  name: "star",
  content: '<path d="M256 391.5 117.2 480 154 314.1 32 202.4 192.9 188 256 32l63.1 156L480 202.4 358 314.1 394.8 480z" />',
  viewBox: "0 0 512 512"
};
var exclamationCircleIcon = {
  name: "exclamation-circle",
  content: '<path d="M224 128h64v160h-64zm0 256h64v-64h-64zm256-128c0 123.7-100.3 224-224 224S32 379.7 32 256 132.3 32 256 32s224 100.3 224 224m-32 0c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192" />',
  viewBox: "0 0 512 512"
};
var paletteIcon = {
  name: "palette",
  content: '<path d="m206 256.6 160-160c-2.2-5.7-4.8-11.1-7.9-16.3-24.2-40.8-60.1-66-107.8-75.9-2.3-.5-4.7-1-7.1-1.4C192-5.8 143.1 4.8 96.5 34.6 49.3 64.7 19.2 107.2 6.1 162c-13 54.8-5.2 106.4 23.4 154.6 14.2 23.8 31.3 43.2 51.4 58.4 3.8-25.2 13.4-52 36.4-75 31.3-31.4 64-41.3 88.7-43.4M288 64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m-96-32c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32M64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m0-128c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m438.7 12.9L480 118.3c-12.4-12.4-32.8-12.4-45.3 0L281.1 271.9c11.5 5.8 20.8 12.2 27.7 17.6 5.3 4.2 9.2 7.7 11.3 9.8l11.3 12.7c5.4 6.8 11.8 16.2 17.6 27.6l153.5-153.5c12.6-12.4 12.6-32.8.2-45.2M354.3 289.3c-4.8-5.8-8.6-9.9-10.6-11.9-2.3-2.3-6.3-6.1-12-10.7L457.4 141h.1l22.5 22.5zm-78.7 169c-23.8 23.7-48.4 33-70.7 37.7-49.6 10.4-96 16-96 16s34.7-17.3 33.9-77c-.4-32.7-3.7-66.4 19.7-89.8 56.6-56.7 113.3.2 113.3.2s56.7 56-.2 112.9" />',
  viewBox: "0 0 512 512"
};
var slidersIcon = {
  name: "sliders",
  content: '<path d="M480 96v32H285.3c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32H32V96h162.7c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32zm-112 96c-20.9 0-38.7 13.4-45.3 32H32v32h290.7c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32H480v-32h-66.7c-6.6-18.6-24.4-32-45.3-32M176 320c-20.9 0-38.7 13.4-45.3 32H32v32h98.7c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32H480v-32H221.3c-6.6-18.6-24.4-32-45.3-32" />',
  viewBox: "0 0 512 512"
};
var dropletSlashIcon = {
  name: "droplet-slash",
  content: '<path d="m317.9 431 23.2 23.2C316.5 470.6 287.3 480 256 480c-88.4 0-160-75.2-160-168 0-27.8 7.2-56.4 18.6-84.2l24.8 24.8C131.9 274 128 293.9 128 312c0 75 57.4 136 128 136 22.4 0 43.5-6.2 61.9-17M256 416v-32c-35.3 0-64-28.7-64-64h-32c0 53 43 96 96 96m224 41.4L457.4 480 32 54.6 54.6 32l108.7 108.7C207 77.7 256 32 256 32s160 149.3 160 280c0 24.1-4.9 47.1-13.6 67.8zM384 312c0-46.3-25.3-104.7-73-169-20-27-40.3-49.8-55-65.4-14.7 15.6-34.9 38.5-55 65.4-1.4 1.9-2.7 3.7-4.1 5.6-.8 1.1-1.5 2.1-2.3 3.2l-1.5 2.1-3 4.2c-.2.3-.4.5-.6.8-1 1.5-2.1 3-3.1 4.5-.1.1-.1.2-.2.3l191.2 191.2c.5-1.6 1-3.3 1.4-4.9 0-.2.1-.4.1-.5.4-1.5.8-2.9 1.1-4.4.1-.3.1-.6.2-.9.3-1.4.6-2.7.9-4.1.1-.4.2-.8.2-1.2.2-1.3.5-2.6.7-3.9.1-.5.2-1 .2-1.5.2-1.2.3-2.5.5-3.7.1-.5.1-1.1.2-1.6l.3-3.6c0-.6.1-1.1.1-1.7.1-1.3.2-2.5.2-3.8 0-.5.1-1 .1-1.6.4-1.9.4-3.7.4-5.5" />',
  viewBox: "0 0 512 512"
};
var insertTopIcon = {
  name: "insert-top",
  content: '<path d="M192 320h192v32H192zm0-128h288v-32H192zm192 64H192v32h192zM32 64v224l96-112z" />',
  viewBox: "0 0 512 512"
};
var insertMiddleIcon = {
  name: "insert-middle",
  content: '<path d="M192 128h192v32H192zm0 128h288v-32H192zm192 64H192v32h192zM32 128v224l96-112z" />',
  viewBox: "0 0 512 512"
};
var insertBottomIcon = {
  name: "insert-bottom",
  content: '<path d="M192 224h192v32H192zm0 128h288v-32H192zm192-192H192v32h192zM32 224v224l96-112z" />',
  viewBox: "0 0 512 512"
};

// node_modules/@progress/kendo-angular-l10n/fesm2015/progress-kendo-angular-l10n.mjs
var import_rxjs2 = __toESM(require_cjs(), 1);
var import_operators2 = __toESM(require_operators(), 1);
var MessageService = class {
  /**
   * @hidden
   */
  constructor() {
    this.changes = new import_rxjs2.BehaviorSubject({
      rtl: void 0
    });
  }
  /**
   * Notifies the components that the messages were changed.
   *
   * @param rtl - (Optional) A new value for the [text direction token]({% slug api_l10n_rtl %}).
   */
  notify(rtl) {
    this.changes.next({
      rtl
    });
  }
  /**
   * Returns a localized message for the supplied key.
   *
   * @param _key - The message key. For example, `"kendo.grid.noRecords"`.
   * @return - The localized message for this key or `undefined` if not found.
   */
  get(_key) {
    return void 0;
  }
};
MessageService.ɵfac = function MessageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MessageService)();
};
MessageService.ɵprov = ɵɵdefineInjectable({
  token: MessageService,
  factory: MessageService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var ComponentMessages = class {
  get override() {
    return false;
  }
  ngOnChanges(changes) {
    this.register(changes);
    if (Object.keys(changes).some((field) => !changes[field].isFirstChange())) {
      this.service.notifyChanges();
    }
  }
  ngOnInit() {
    this.subscription = this.service.changes.pipe((0, import_operators2.skip)(1)).subscribe(() => this.register(this));
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  register(changes) {
    const keys = Object.keys(changes);
    keys.forEach((key) => this.service.register(key, this[key], this.override));
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
ComponentMessages.ɵfac = function ComponentMessages_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ComponentMessages)();
};
ComponentMessages.ɵdir = ɵɵdefineDirective({
  type: ComponentMessages,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentMessages, [{
    type: Directive,
    args: [{}]
  }], null, null);
})();
var RTL = new InjectionToken("Kendo UI Right-to-Left token");
var L10N_PREFIX = new InjectionToken("Localization key prefix");
var LocalizationService = class {
  constructor(prefix, messageService, _rtl) {
    this.prefix = prefix;
    this.messageService = messageService;
    this._rtl = _rtl;
    this.changes = new import_rxjs2.BehaviorSubject({
      rtl: this._rtl
    });
    this.dictionary = {};
    if (messageService) {
      this.subscription = messageService.changes.pipe((0, import_operators2.map)(({
        rtl
      }) => rtl !== void 0 ? rtl : this._rtl), (0, import_operators2.tap)((rtl) => this._rtl = rtl)).subscribe((rtl) => {
        this.dictionary = {};
        this.changes.next({
          rtl
        });
      });
    }
  }
  get rtl() {
    return this._rtl;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  get(shortKey) {
    const key = this.key(shortKey);
    return this.dictionary[key];
  }
  register(shortKey, value, override = false) {
    const key = this.key(shortKey);
    let message = value;
    if (!override) {
      if (Object.hasOwnProperty.call(this.dictionary, key)) {
        return;
      }
      message = this.defaultValue(key, value);
    }
    this.dictionary[key] = message;
  }
  notifyChanges() {
    this.changes.next({
      rtl: this.rtl
    });
  }
  key(shortKey) {
    return this.prefix + "." + shortKey;
  }
  defaultValue(key, value) {
    if (!this.messageService) {
      return value;
    }
    const alt = this.messageService.get(key);
    return alt === void 0 ? value : alt;
  }
};
LocalizationService.ɵfac = function LocalizationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8));
};
LocalizationService.ɵprov = ɵɵdefineInjectable({
  token: LocalizationService,
  factory: LocalizationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [L10N_PREFIX]
      }]
    }, {
      type: MessageService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }];
  }, null);
})();

// node_modules/@progress/kendo-angular-buttons/fesm2015/progress-kendo-angular-buttons.mjs
var import_rxjs5 = __toESM(require_cjs(), 1);

// node_modules/@progress/kendo-licensing/dist/index.mjs
var _0x10f4 = ["z2v0vgLTzq==", "ww91CIbSAwnLBNnLigv4CgLYzwqGB24G", "zgf0yq==", "uhjVz3jLC3mG", "AgvmshG=", "u2vLia==", "ChjVzhvJDenVzgvZ", "C2nYAxb0s2v5", "D3rmuhm=", "rKjcwKG=", "tM8GBgLJzw5ZzsbMB3vUzc4k", "CgfJA2fNzu5HBwu=", "qvfYAMq=", "CgfYC2u=", "ChjVzhvJDhm=", "igzVCIbTB3jLigLUzM9YBwf0Aw9UlGO=", "sgr5sMW=", "rg9iAwe=", "zxDJr2C=", "Du9wCuK=", "z2v0rNvSBfLLyxi=", "lcb0AguGCgfJA2fNzsb3yxmGChvIBgLZAgvKig9Uia==", "C2v0", "zxrNsxC=", "C29YDa==", "EeXMBLu=", "AgfZ", "s0XeCe8=", "rM1Ttxy=", "tNvstvG=", "ww91CIb0CMLHBcbSAwnLBNnLigv4CgLYzwqGB24G", "z2v0rgf0zq==", "BgvUz3rO", "txPHwe8=", "BgLJzw5Zzuv4CgLYyxrPB25eyxrL", "DhjPywW=", "vejxq3K=", "r2Ltv1q=", "uhPWBva=", "z2v0", "vgHLihbYB2r1y3qGAxmGBM90igLUy2X1zgvKigLUihrOzsbSAwnLBNnLlGO=", "z2v0tw9UDgG=", "s2DnDfK=", "DMvYC2LVBG==", "rKj6sum=", "DgLTzxn0yw1W", "B2jQzwn0", "DhLWzq==", "BgLJzw5ZAw5Nrg9JC1vYBa==", "BMfTzq==", "DwTXAeq=", "zg9JC1vYBa==", "z3jVDxbfBMq=", "z3jVDxa=", "yuDyzhy=", "zMLUza==", "D2fYBG==", "zNvUy3rPB24=", "Dw5KzwzPBMvK", "ChjVzhvJDe5HBwu=", "y29Uy2f0", "ChvIBgLZAerHDgu=", "zxHWAxj5rgf0zq==", "CeDhAfu=", "y29Kzq==", "Dg9mB2nHBgvtDhjPBMC=", "tgLJzw5ZzsbHy3rPDMf0Aw9UigzHAwXLzcbMB3iG"];
(function(_0x50aaef, _0x10f4b0) {
  var _0x145713 = function(_0x421c90) {
    while (--_0x421c90) {
      _0x50aaef["push"](_0x50aaef["shift"]());
    }
  };
  _0x145713(++_0x10f4b0);
})(_0x10f4, 439);
var _0x1457 = function(_0x50aaef, _0x10f4b0) {
  _0x50aaef = _0x50aaef - 0;
  var _0x145713 = _0x10f4[_0x50aaef];
  if (_0x1457["aWziBr"] === void 0) {
    var _0x421c90 = function(_0x1aecb4) {
      var _0x16aa36 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", _0x27d11b = String(_0x1aecb4)["replace"](/=+$/, "");
      var _0x46c2e8 = "";
      for (var _0x29c8dd = 0, _0x5ea27f, _0x25dc8b2, _0xcce2102 = 0; _0x25dc8b2 = _0x27d11b["charAt"](_0xcce2102++); ~_0x25dc8b2 && (_0x5ea27f = _0x29c8dd % 4 ? _0x5ea27f * 64 + _0x25dc8b2 : _0x25dc8b2, _0x29c8dd++ % 4) ? _0x46c2e8 += String["fromCharCode"](255 & _0x5ea27f >> (-2 * _0x29c8dd & 6)) : 0) {
        _0x25dc8b2 = _0x16aa36["indexOf"](_0x25dc8b2);
      }
      return _0x46c2e8;
    };
    _0x1457["XjGMHe"] = function(_0x2c6af5) {
      var _0x1b5a14 = _0x421c90(_0x2c6af5);
      var _0x2181c6 = [];
      for (var _0x4e0ecf2 = 0, _0x1a2fc42 = _0x1b5a14["length"]; _0x4e0ecf2 < _0x1a2fc42; _0x4e0ecf2++) {
        _0x2181c6 += "%" + ("00" + _0x1b5a14["charCodeAt"](_0x4e0ecf2)["toString"](16))["slice"](-2);
      }
      return decodeURIComponent(_0x2181c6);
    }, _0x1457["XQgCdR"] = {}, _0x1457["aWziBr"] = !![];
  }
  var _0x1b62be = _0x1457["XQgCdR"][_0x50aaef];
  return _0x1b62be === void 0 ? (_0x145713 = _0x1457["XjGMHe"](_0x145713), _0x1457["XQgCdR"][_0x50aaef] = _0x145713) : _0x145713 = _0x1b62be, _0x145713;
};
var context = {
  data: '  {"timestamp":1728983928,"products":[{"trial":true,"code":"KENDOUIANGULAR","licenseExpirationDate":1731539799}],"integrity":"UWSBfbk6kZj6q7fAQsf2aH7AFBI="}  '
};
var cache = /* @__PURE__ */ new Map();
function validatePackage(_0x401145) {
  if (cache[_0x1457("0x38")](_0x401145[_0x1457("0xc")])) {
    if (_0x1457("0x3a") !== _0x1457("0x3a")) {
      let _0x40b483 = function() {
        _0x55416e[_0x1457("0x10")](_0x394293);
      };
    } else return cache[_0x1457("0x2")](_0x401145[_0x1457("0xc")]);
  }
  var _0x13003c = _0x401145[_0x1457("0x6")] ? " v" + _0x401145[_0x1457("0x6")] : "", _0x487465 = _0x401145[_0x1457("0xc")] + _0x13003c, _0x5ac69b = JSON[_0x1457("0x2b")](context[_0x1457("0x20")]), _0x12f1b9 = !_0x5ac69b[_0x1457("0x25")] && !_0x5ac69b[_0x1457("0x8")], _0x404bc6 = _0x5ac69b[_0x1457("0x25")] && typeof KendoLicensing === _0x1457("0x15"), _0x21bd47 = matchProduct(_0x5ac69b, _0x401145[_0x1457("0x24")]), _0x379487;
  if (_0x12f1b9 || _0x404bc6) {
    if (_0x1457("0x2a") === _0x1457("0x2f")) {
      let _0x32c728 = function() {
        var _0x210aed = _0x1457("0x21")[_0x1457("0x17")](_0x1ec4d4[_0x1457("0x16")]), _0x5a1943 = typeof _0x5077fd[_0x1457("0x10")] === _0x1457("0x14");
        _0x5a1943 ? _0x1cbf22[_0x1457("0x10")](_0x210aed) : _0x52c64a[_0x1457("0x13")](_0x210aed), _0x19add1[_0x1457("0x13")](_0x2bf2c1(_0x2b5d62)), _0x5a1943 && _0x210919[_0x1457("0xf")]();
      };
    } else _0x379487 = {
      "type": 0,
      "packageName": _0x487465,
      "docsUrl": _0x401145[_0x1457("0xb")]
    };
  } else {
    if (_0x1457("0x39") === _0x1457("0x39")) {
      if (!_0x21bd47) {
        if (_0x1457("0x1a") !== _0x1457("0x1a")) {
          let _0x118e65 = function() {
            return _0x388bef[_0x1457("0x38")](_0x14b8a6[_0x1457("0x1b")]);
          };
        } else _0x379487 = {
          "type": 1,
          "packageName": _0x487465,
          "docsUrl": _0x401145[_0x1457("0xb")]
        };
      } else {
        if (_0x21bd47[_0x1457("0x41")] === !![] && isExpired(getCurrentDate(), _0x21bd47[_0x1457("0x40")])) {
          if (_0x1457("0x0") === _0x1457("0x0")) _0x379487 = {
            "type": 3,
            "packageName": _0x487465,
            "expiryDate": parseDate(_0x21bd47[_0x1457("0x40")]),
            "docsUrl": _0x401145[_0x1457("0xb")]
          };
          else {
            let _0x2acfd0 = function() {
              return new _0x538141(_0x6547c3 * 1e3);
            };
          }
        } else {
          if (isExpired(_0x401145[_0x1457("0x18")], _0x21bd47[_0x1457("0x40")])) {
            if (_0x1457("0x22") !== _0x1457("0x22")) {
              let _0x54738d = function() {
                _0xff686d += _0x1457("0x28");
              };
            } else _0x379487 = {
              "type": 2,
              "packageName": _0x487465,
              "publishDate": parseDate(_0x401145[_0x1457("0x18")]),
              "expiryDate": parseDate(_0x21bd47[_0x1457("0x40")]),
              "docsUrl": _0x401145[_0x1457("0xb")]
            };
          }
        }
      }
    } else {
      let _0x45a77a = function() {
        _0x4e0ecf = {
          "type": 0,
          "packageName": _0x1a2fc4,
          "docsUrl": _0x281109[_0x1457("0xb")]
        };
      };
    }
  }
  if (_0x379487 && typeof console === _0x1457("0x9")) {
    if (_0x1457("0x5") !== _0x1457("0x5")) {
      let _0x27a0d3 = function() {
        _0x23dc27[_0x1457("0xf")]();
      };
    } else {
      var _0x3e0d1b = _0x1457("0x21")[_0x1457("0x17")](_0x401145[_0x1457("0x16")]), _0x225671 = typeof console[_0x1457("0x10")] === _0x1457("0x14");
      if (_0x225671) {
        if (_0x1457("0x2e") === _0x1457("0x2e")) console[_0x1457("0x10")](_0x3e0d1b);
        else {
          let _0x1c2d92 = function() {
            if (!_0x3e4ff8) _0x37b223 = {
              "type": 1,
              "packageName": _0x36e726,
              "docsUrl": _0x3f80b8[_0x1457("0xb")]
            };
            else {
              if (_0x15d67c[_0x1457("0x41")] === !![] && _0x3b51a9(_0x102df8(), _0x3171d7[_0x1457("0x40")])) _0x1e0cab = {
                "type": 3,
                "packageName": _0x2724db,
                "expiryDate": _0x33ff27(_0x4eb9e1[_0x1457("0x40")]),
                "docsUrl": _0x2a3029[_0x1457("0xb")]
              };
              else _0x2a1aff(_0x3a6131[_0x1457("0x18")], _0x30ed8b[_0x1457("0x40")]) && (_0x36826b = {
                "type": 2,
                "packageName": _0x2a7f61,
                "publishDate": _0x19d46e(_0x3f1d0c[_0x1457("0x18")]),
                "expiryDate": _0x18bd78(_0x3231eb[_0x1457("0x40")]),
                "docsUrl": _0x265a7c[_0x1457("0xb")]
              });
            }
          };
        }
      } else {
        if (_0x1457("0x30") !== _0x1457("0x7")) console[_0x1457("0x13")](_0x3e0d1b);
        else {
          let _0x135861 = function() {
            _0x283aa0 += _0x1457("0x3c")[_0x1457("0x17")](_0x111d35[_0x1457("0x19")][_0x1457("0x1c")](), ".\n");
          };
        }
      }
      console[_0x1457("0x13")](formatError(_0x379487));
      if (_0x225671) {
        if (_0x1457("0xd") !== _0x1457("0xd")) {
          let _0x21b2c4 = function() {
            _0x2b9264 = {
              "type": 1,
              "packageName": _0x346bb2,
              "docsUrl": _0x2e7146[_0x1457("0xb")]
            };
          };
        } else console[_0x1457("0xf")]();
      }
    }
  }
  var _0x415e0e = !_0x379487;
  return cache[_0x1457("0x34")](_0x401145[_0x1457("0xc")], _0x415e0e), _0x415e0e;
}
function formatError(_0x594e89) {
  var _0x2d7e52 = _0x1457("0x1d")[_0x1457("0x17")](_0x594e89[_0x1457("0x29")], "\n");
  if (_0x594e89[_0x1457("0xa")] === 2) {
    if (_0x1457("0x3f") !== _0x1457("0x1")) _0x2d7e52 += _0x1457("0x1f")[_0x1457("0x17")](_0x594e89[_0x1457("0x19")][_0x1457("0x1c")](), _0x1457("0x33"))[_0x1457("0x17")](_0x594e89[_0x1457("0x18")][_0x1457("0x1c")](), ".\n");
    else {
      let _0x4205ac = function() {
        _0x339f11 = {
          "type": 3,
          "packageName": _0x324919,
          "expiryDate": _0x301701(_0xaf8b40[_0x1457("0x40")]),
          "docsUrl": _0x5b91f9[_0x1457("0xb")]
        };
      };
    }
  }
  if (_0x594e89[_0x1457("0xa")] === 3) {
    if (_0x1457("0x11") === _0x1457("0x11")) _0x2d7e52 += _0x1457("0x3c")[_0x1457("0x17")](_0x594e89[_0x1457("0x19")][_0x1457("0x1c")](), ".\n");
    else {
      let _0x3e8c99 = function() {
        _0x3f28ec += _0x1457("0x1f")[_0x1457("0x17")](_0x4667d4[_0x1457("0x19")][_0x1457("0x1c")](), _0x1457("0x33"))[_0x1457("0x17")](_0x23b5da[_0x1457("0x18")][_0x1457("0x1c")](), ".\n");
      };
    }
  } else {
    if (_0x594e89[_0x1457("0xa")] === 0) {
      if (_0x1457("0x35") === _0x1457("0x35")) _0x2d7e52 += _0x1457("0x28");
      else {
        let _0x3442b2 = function() {
          _0x5ccb08 += _0x1457("0x3");
        };
      }
    } else {
      if (_0x594e89[_0x1457("0xa")] === 1) {
        if (_0x1457("0x26") !== _0x1457("0x26")) {
          let _0x23b1cd = function() {
            var _0x5bedaa = _0x465bb0(_0x2ba0db), _0x6c2ce2 = new _0x4a6023(_0x5bedaa[_0x1457("0x32")](), _0x5bedaa[_0x1457("0x4")](), _0x5bedaa[_0x1457("0x3d")]() + 1), _0x34ce8e = _0x6c2ce2[_0x1457("0x1e")]() / 1e3;
            return _0x2f1bc7 > _0x34ce8e;
          };
        } else _0x2d7e52 += _0x1457("0x3");
      }
    }
  }
  return _0x2d7e52 += _0x1457("0x23")[_0x1457("0x17")](_0x594e89[_0x1457("0xe")], _0x1457("0x2d")), _0x2d7e52;
}
function matchProduct(_0x408a16, _0x9b416b) {
  var _0x45ca78 = _0x408a16[_0x1457("0x2c")];
  if (!_0x45ca78 || !_0x45ca78[_0x1457("0x3e")]) {
    if (_0x1457("0x27") !== _0x1457("0x37")) return null;
    else {
      let _0x52a8d4 = function() {
        return _0x25dc8b[_0x1457("0x2")](_0xcce210[_0x1457("0xc")]);
      };
    }
  }
  var _0x1880f2 = new Set(_0x9b416b);
  return _0x45ca78[_0x1457("0x36")](function(_0x226118, _0x16f928) {
    if (_0x1457("0x42") !== _0x1457("0x31")) return _0x16f928[_0x1457("0x40")] - _0x226118[_0x1457("0x40")];
    else {
      let _0x3dde91 = function() {
        return null;
      };
    }
  })[_0x1457("0x12")](function(_0x4632fe) {
    if (_0x1457("0x3b") === _0x1457("0x3b")) return _0x1880f2[_0x1457("0x38")](_0x4632fe[_0x1457("0x1b")]);
    else {
      let _0x43b66d = function() {
        return _0x22688d[_0x1457("0x40")] - _0x522bbc[_0x1457("0x40")];
      };
    }
  });
}
function parseDate(_0xe99283) {
  return new Date(_0xe99283 * 1e3);
}
function getCurrentDate() {
  return (/* @__PURE__ */ new Date())[_0x1457("0x1e")]() / 1e3;
}
function isExpired(_0x4b71d2, _0x1df709) {
  var _0x4f97fc = parseDate(_0x1df709), _0xea6b1d = new Date(_0x4f97fc[_0x1457("0x32")](), _0x4f97fc[_0x1457("0x4")](), _0x4f97fc[_0x1457("0x3d")]() + 1), _0x302664 = _0xea6b1d[_0x1457("0x1e")]() / 1e3;
  return _0x4b71d2 > _0x302664;
}

// node_modules/@progress/kendo-angular-icons/fesm2015/progress-kendo-angular-icons.mjs
var import_rxjs3 = __toESM(require_cjs(), 1);
var import_operators3 = __toESM(require_operators(), 1);
function SVGIconComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("pointer-events", "none");
    ɵɵproperty("innerHTML", ctx_r0.content, ɵɵsanitizeHtml);
    ɵɵattribute("viewBox", ctx_r0.icon.viewBox);
  }
}
function IconWrapperComponent_kendo_svgicon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-svgicon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.innerCssClass)("icon", ctx_r0.svgIcon)("size", ctx_r0.size || (ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.size))("themeColor", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.themeColor)("flip", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.flip);
  }
}
function IconWrapperComponent_ng_template_1_kendo_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.innerCssClass)("name", ctx_r0.name)("size", ctx_r0.size || (ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.size))("themeColor", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.themeColor)("flip", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.flip);
  }
}
function IconWrapperComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.customClasses);
  }
}
function IconWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, IconWrapperComponent_ng_template_1_kendo_icon_0_Template, 1, 5, "kendo-icon", 4)(1, IconWrapperComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const custom_r2 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r0.customFontIconClass)("ngIfElse", custom_r2);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-icons",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372116,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var sizeClasses = {
  "default": "k-icon",
  "xsmall": "k-icon-xs",
  "small": "k-icon-sm",
  "medium": "k-icon-md",
  "large": "k-icon-lg",
  "xlarge": "k-icon-xl",
  "xxlarge": "k-icon-xxl",
  "xxxlarge": "k-icon-xxxl"
};
var IconBaseDirective = class {
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
    validatePackage(packageMetadata);
  }
  get horizontalFlip() {
    return this.flip === "horizontal" || this.flip === "both";
  }
  get verticalFlip() {
    return this.flip === "vertical" || this.flip === "both";
  }
  /**
   * Specifies the theme color for the Icon.
   *
   * The possible values are:
   * * `inherit` (Default)&mdash;Applies coloring based on the current color.
   * * `primary` &mdash;Applies coloring based on primary theme color.
   * * `secondary`&mdash;Applies coloring based on secondary theme color.
   * * `tertiary`&mdash; Applies coloring based on tertiary theme color.
   * * `info`&mdash;Applies coloring based on info theme color.
   * * `success`&mdash; Applies coloring based on success theme color.
   * * `warning`&mdash; Applies coloring based on warning theme color.
   * * `error`&mdash; Applies coloring based on error theme color.
   * * `dark`&mdash; Applies coloring based on dark theme color.
   * * `light`&mdash; Applies coloring based on light theme color.
   * * `inverse`&mdash; Applies coloring based on inverse theme color.
   *
   */
  set themeColor(themeColor) {
    const element = this.element.nativeElement;
    if (this._themeColor) {
      this.renderer.removeClass(element, `!k-color-${this._themeColor}`);
    }
    this._themeColor = themeColor;
    if (themeColor) {
      this.renderer.addClass(element, `!k-color-${themeColor}`);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the Icon.
   *
   * The possible values are:
   * * `default` (Default) (Font-size: 16px; Width: 16px; Height: 16px)
   * * `xsmall` (Font-size: 12px; Width: 12px; Height: 12px;)
   * * `small` (Font-size: 14px; Width: 14px; Height: 14px;)
   * * `medium` (Font-size: 16px; Width: 16px; Height: 16px;)
   * * `large` (Font-size: 20px; Width: 20px; Height: 20px;)
   * * `xlarge` (Font-size: 24px; Width: 24px; Height: 24px;)
   * * `xxlarge` (Font-size: 32px; Width: 32px; Height: 32px;)
   * * `xxxlarge` (Font-size: 48px; Width: 48px; Height: 48px;)
   *
   */
  set size(size) {
    const currentClass = sizeClasses[this.size];
    const newClass = sizeClasses[size];
    const element = this.element.nativeElement;
    this.renderer.removeClass(element, currentClass);
    if (size && size !== "default") {
      this.renderer.addClass(element, newClass);
    }
    this._size = size;
  }
  get size() {
    return this._size;
  }
};
IconBaseDirective.ɵfac = function IconBaseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconBaseDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
IconBaseDirective.ɵdir = ɵɵdefineDirective({
  type: IconBaseDirective,
  selectors: [["", "kendoIconBase", ""]],
  hostVars: 4,
  hostBindings: function IconBaseDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-flip-h", ctx.horizontalFlip)("k-flip-v", ctx.verticalFlip);
    }
  },
  inputs: {
    flip: "flip",
    themeColor: "themeColor",
    size: "size"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconBaseDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoIconBase]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    horizontalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-h"]
    }],
    verticalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-v"]
    }],
    flip: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var IconComponent = class extends IconBaseDirective {
  constructor(element, renderer) {
    super(element, renderer);
    this.element = element;
    this.renderer = renderer;
    this.hostClass = true;
    this.hostAriaHidden = true;
  }
  /**
   * Defines the name for an existing icon in a Kendo UI theme, which will be rendered.
   * All [Kendo UI Icons](slug:icon_list) are supported.
   */
  set name(name) {
    if (isDocumentAvailable()) {
      const newName = name !== this._name;
      if (newName) {
        const element = this.element.nativeElement;
        this.renderer.removeClass(element, `k-i-${this.name}`);
        this.renderer.addClass(element, `k-i-${name}`);
      }
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
};
IconComponent.ɵfac = function IconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
IconComponent.ɵcmp = ɵɵdefineComponent({
  type: IconComponent,
  selectors: [["kendo-icon"]],
  hostVars: 5,
  hostBindings: function IconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", ctx.hostAriaHidden);
      ɵɵclassProp("k-icon", ctx.hostClass)("k-font-icon", ctx.hostClass);
    }
  },
  inputs: {
    name: "name"
  },
  exportAs: ["kendoIcon"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function IconComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIcon",
      selector: "kendo-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-font-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    name: [{
      type: Input
    }]
  });
})();
var areSame = (i1, i2) => (i1 === null || i1 === void 0 ? void 0 : i1.name) === (i2 === null || i2 === void 0 ? void 0 : i2.name) && i1.content === i2.content && i1.viewBox === i2.viewBox;
var SVGIconComponent = class extends IconBaseDirective {
  constructor(domSanitizer, element, renderer) {
    super(element, renderer);
    this.domSanitizer = domSanitizer;
    this.element = element;
    this.renderer = renderer;
    this.hostClass = true;
    this.hostAriaHidden = true;
  }
  /**
   * Defines the SVG icon, which will be rendered. All [Kendo UI SVG Icons](slug:svgicon_list) are supported.
   */
  set icon(icon) {
    var _a;
    const element = this.element.nativeElement;
    const hasDocument = isDocumentAvailable();
    const newName = (icon === null || icon === void 0 ? void 0 : icon.name) && icon.name !== ((_a = this._icon) === null || _a === void 0 ? void 0 : _a.name);
    if (this._icon && this._icon.name && newName && hasDocument) {
      this.renderer.removeClass(element, `k-svg-i-${this._icon.name}`);
    }
    if (!areSame(icon, this._icon)) {
      this._icon = icon;
    }
    if (hasDocument && newName) {
      this.renderer.addClass(element, `k-svg-i-${this._icon.name}`);
    }
  }
  get icon() {
    return this._icon;
  }
  get content() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.icon.content);
  }
  get visible() {
    return this.icon && isDocumentAvailable();
  }
  ngOnInit() {
    this.verifyIconProperty();
  }
  verifyIconProperty() {
    if (!isDevMode()) {
      return;
    }
    if (!this._icon) {
      throw new Error(`
                Invalid configuration.
                The input [icon] is required for the Kendo UI SVG Icon component for Angular.
                See https://www.telerik.com/kendo-angular-ui/components/icons/svg-icon
            `);
    }
  }
};
SVGIconComponent.ɵfac = function SVGIconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SVGIconComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
SVGIconComponent.ɵcmp = ɵɵdefineComponent({
  type: SVGIconComponent,
  selectors: [["kendo-svg-icon"], ["kendo-svgicon"]],
  hostVars: 5,
  hostBindings: function SVGIconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", ctx.hostAriaHidden);
      ɵɵclassProp("k-svg-icon", ctx.hostClass)("k-icon", ctx.hostClass);
    }
  },
  inputs: {
    icon: "icon"
  },
  exportAs: ["kendoSVGIcon"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "pointerEvents", "innerHTML", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "innerHTML"]],
  template: function SVGIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SVGIconComponent__svg_svg_0_Template, 1, 4, "svg", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.visible);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSVGIcon",
      selector: "kendo-svg-icon, kendo-svgicon",
      template: `
        <svg [style.pointerEvents]="'none'" *ngIf="visible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            [attr.viewBox]="icon.viewBox" [innerHTML]="content">
        </svg>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgIf, NgClass]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-svg-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    icon: [{
      type: Input
    }]
  });
})();
var isPresent2 = (value) => value !== null && value !== void 0;
var ICON_SETTINGS = new InjectionToken("Kendo UI Icon-Settings token");
var IconSettingsService = class {
  constructor() {
    this.changes = new import_rxjs3.Subject();
  }
  /**
   * Notifies subscribers that the icon settings were changed.
   *
   * @param iconSettings - (Optional) A new value for the [icon settings token]({% slug api_icons_icon_settings %}).
   */
  notify(iconSettings) {
    this.changes.next(iconSettings);
  }
  /**
   * Returns the [`SVGIcon`](slug:api_icons_svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   *
   * @hidden
   */
  getSvgIcon(_name) {
    return null;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   *
   * @hidden
   */
  getCustomFontIconClass(_key) {
    return null;
  }
};
IconSettingsService.ɵfac = function IconSettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconSettingsService)();
};
IconSettingsService.ɵprov = ɵɵdefineInjectable({
  token: IconSettingsService,
  factory: IconSettingsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSettingsService, [{
    type: Injectable
  }], null, null);
})();
var IconsService = class {
  constructor(_iconSettings, iconSettingsService) {
    this._iconSettings = _iconSettings;
    this.iconSettingsService = iconSettingsService;
    this.changes = new import_rxjs3.BehaviorSubject(this.iconSettings || {
      type: "svg"
    });
    this.subs = new import_rxjs3.Subscription();
    if (iconSettingsService) {
      this.subs.add(iconSettingsService.changes.pipe((0, import_operators3.map)((iconSettings) => isPresent2(iconSettings) ? iconSettings : this._iconSettings), (0, import_operators3.tap)((iconSettings) => this._iconSettings = iconSettings)).subscribe((iconSettings) => this.changes.next(iconSettings)));
    }
  }
  /**
   * @hidden
   */
  get iconSettings() {
    return this._iconSettings;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * Returns the [`SVGIcon`](slug:api_icons_svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   */
  getSvgIcon(name) {
    const customIcon = this.iconSettingsService && this.iconSettingsService.getSvgIcon(name);
    return customIcon;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   */
  getCustomFontIconClass(key) {
    const customClass = this.iconSettingsService && this.iconSettingsService.getCustomFontIconClass(key);
    return customClass;
  }
};
IconsService.ɵfac = function IconsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconsService)(ɵɵinject(ICON_SETTINGS, 8), ɵɵinject(IconSettingsService, 8));
};
IconsService.ɵprov = ɵɵdefineInjectable({
  token: IconsService,
  factory: IconsService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ICON_SETTINGS]
      }]
    }, {
      type: IconSettingsService,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var IconWrapperComponent = class {
  constructor(iconsService) {
    this.iconsService = iconsService;
    this.hostClass = true;
    this.innerCssClass = "";
    this.customFontClass = "";
    this.subs = new import_rxjs3.Subscription();
    this.subs = iconsService.changes.subscribe((iconSettings) => {
      this.iconSettings = iconSettings;
    });
  }
  get customClasses() {
    const classes = [this.customFontClass, this.innerCssClass, this.customFontIconClass].filter((cl) => !!cl).join(" ");
    return classes;
  }
  get hasSvgIcon() {
    this.svgIcon = this.iconsService.getSvgIcon(this.name) || this.svgIcon;
    if (this.svgIcon) {
      return true;
    }
    if (isDevMode()) {
      console.groupCollapsed(`Kendo UI for Angular: Icon type is set to 'svg', but only font icon name is provided. The "${this.name}" font icon will be rendered instead.`);
      console.warn(`
Starting from v7.0.0 (October, 2023) of the Kendo Themes, the font icons will be removed from the theme.
* To render an SVG icon, update the component configuration by setting the "svgIcon" input to the respective icon definition.
* To continue to use font icons, install the "@progress/kendo-font-icons" package and import "@progress/kendo-font-icons/dist/index.css".

Please note, that font icons are not compatible with a strict Content Security Policy and require the use of the "unsafe-inline" override.

For further details, check the following documentation articles:
https://www.telerik.com/kendo-angular-ui/components/icons/icon-settings
https://www.telerik.com/kendo-angular-ui/components/styling/icons/
https://www.telerik.com/kendo-angular-ui/components/styling/svg-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/font-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/
            `);
      console.groupEnd();
    }
    return false;
  }
  get customFontIconClass() {
    return this.iconsService.getCustomFontIconClass(this.name) || this.customFontClass;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
};
IconWrapperComponent.ɵfac = function IconWrapperComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconWrapperComponent)(ɵɵdirectiveInject(IconsService));
};
IconWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: IconWrapperComponent,
  selectors: [["kendo-icon-wrapper"]],
  hostVars: 2,
  hostBindings: function IconWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-icon-wrapper-host", ctx.hostClass);
    }
  },
  inputs: {
    name: "name",
    svgIcon: "svgIcon",
    innerCssClass: "innerCssClass",
    customFontClass: "customFontClass",
    size: "size"
  },
  exportAs: ["kendoIconWrapper"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [["font", ""], ["custom", ""], [3, "ngClass", "icon", "size", "themeColor", "flip", 4, "ngIf", "ngIfElse"], [3, "ngClass", "icon", "size", "themeColor", "flip"], [3, "ngClass", "name", "size", "themeColor", "flip", 4, "ngIf", "ngIfElse"], [3, "ngClass", "name", "size", "themeColor", "flip"], [3, "ngClass"]],
  template: function IconWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IconWrapperComponent_kendo_svgicon_0_Template, 1, 5, "kendo-svgicon", 2)(1, IconWrapperComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const font_r3 = ɵɵreference(2);
      ɵɵproperty("ngIf", (ctx.iconSettings == null ? null : ctx.iconSettings.type) === "svg" && ctx.hasSvgIcon)("ngIfElse", font_r3);
    }
  },
  dependencies: [NgClass, NgIf, IconComponent, SVGIconComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconWrapperComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIconWrapper",
      selector: "kendo-icon-wrapper",
      template: `
        <kendo-svgicon
            *ngIf="iconSettings?.type === 'svg' && hasSvgIcon; else font"
            [ngClass]="innerCssClass"
            [icon]="svgIcon"
            [size]="size || iconSettings?.size"
            [themeColor]="iconSettings?.themeColor"
            [flip]="iconSettings?.flip"></kendo-svgicon>
        <ng-template #font>
            <kendo-icon
                *ngIf="!customFontIconClass; else custom"
                [ngClass]="innerCssClass"
                [name]="name"
                [size]="size || iconSettings?.size"
                [themeColor]="iconSettings?.themeColor"
                [flip]="iconSettings?.flip"></kendo-icon>
            <ng-template #custom>
                <span [ngClass]="customClasses"></span>
            </ng-template>
        </ng-template>
    `,
      standalone: true,
      imports: [NgClass, NgIf, IconComponent, SVGIconComponent]
    }]
  }], function() {
    return [{
      type: IconsService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon-wrapper-host"]
    }],
    name: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    innerCssClass: [{
      type: Input
    }],
    customFontClass: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var IconModule = class {
};
IconModule.ɵfac = function IconModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconModule)();
};
IconModule.ɵmod = ɵɵdefineNgModule({
  type: IconModule,
  imports: [IconComponent],
  exports: [IconComponent]
});
IconModule.ɵinj = ɵɵdefineInjector({
  imports: [IconComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      exports: [IconComponent],
      imports: [IconComponent]
    }]
  }], null, null);
})();
var SVGIconModule = class {
};
SVGIconModule.ɵfac = function SVGIconModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SVGIconModule)();
};
SVGIconModule.ɵmod = ɵɵdefineNgModule({
  type: SVGIconModule,
  imports: [SVGIconComponent],
  exports: [SVGIconComponent]
});
SVGIconModule.ɵinj = ɵɵdefineInjector({
  imports: [SVGIconComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconModule, [{
    type: NgModule,
    args: [{
      exports: [SVGIconComponent],
      imports: [SVGIconComponent]
    }]
  }], null, null);
})();
var KENDO_ICON = [IconComponent];
var KENDO_SVGICON = [SVGIconComponent];
var KENDO_ICONS = [...KENDO_ICON, ...KENDO_SVGICON];
var IconsModule = class {
};
IconsModule.ɵfac = function IconsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconsModule)();
};
IconsModule.ɵmod = ɵɵdefineNgModule({
  type: IconsModule,
  imports: [IconComponent, SVGIconComponent],
  exports: [IconComponent, SVGIconComponent]
});
IconsModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [KENDO_ICONS]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_ICONS],
      exports: [...KENDO_ICONS],
      providers: [IconsService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-angular-buttons/fesm2015/progress-kendo-angular-buttons.mjs
var import_operators5 = __toESM(require_operators(), 1);

// node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var align_point_default = {
  "bottom": "bottom",
  "center": "center",
  "middle": "middle",
  "left": "left",
  "right": "right",
  "top": "top"
};

// node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var anchorHorizontal = anchorAlign.horizontal;
  var anchorVertical = anchorAlign.vertical;
  var elementHorizontal = elementAlign.horizontal;
  var elementVertical = elementAlign.vertical;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var top = anchorRect.top;
  var left = anchorRect.left;
  if (anchorVertical === align_point_default.bottom) {
    top += anchorRect.height;
  }
  if (anchorVertical === align_point_default.center || anchorVertical === align_point_default.middle) {
    top += Math.round(anchorRect.height / 2);
  }
  if (elementVertical === align_point_default.bottom) {
    top -= elementRect.height;
    verticalMargin *= -1;
  }
  if (elementVertical === align_point_default.center || elementVertical === align_point_default.middle) {
    top -= Math.round(elementRect.height / 2);
    verticalMargin *= -1;
  }
  if (anchorHorizontal === align_point_default.right) {
    left += anchorRect.width;
  }
  if (anchorHorizontal === align_point_default.center || anchorHorizontal === align_point_default.middle) {
    left += Math.round(anchorRect.width / 2);
  }
  if (elementHorizontal === align_point_default.right) {
    left -= elementRect.width;
    horizontalMargin *= -1;
  }
  if (elementHorizontal === align_point_default.center || elementHorizontal === align_point_default.middle) {
    left -= Math.round(elementRect.width / 2);
    horizontalMargin *= -1;
  }
  return {
    top: top + verticalMargin,
    left: left + horizontalMargin
  };
};
var align_default = align;

// node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
function addScroll(rect, scroll) {
  return {
    top: rect.top + scroll.y,
    left: rect.left + scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
function ownerDocument(element) {
  return element.ownerDocument || element.document || element;
}

// node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow = function(element) {
  return ownerDocument(element).defaultView;
};
var window_default = getWindow;

// node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocument = function(element) {
  return ownerDocument(element).documentElement;
};
var document_default = getDocument;

// node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
function scrollbarWidth2() {
  if (!cachedWidth && typeof document !== "undefined") {
    var div2 = document.createElement("div");
    div2.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div2.innerHTML = "&nbsp;";
    document.body.appendChild(div2);
    cachedWidth = div2.offsetWidth - div2.scrollWidth;
    document.body.removeChild(div2);
  }
  return cachedWidth;
}

// node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
function windowViewport(element) {
  var win = window_default(element);
  var document2 = document_default(element);
  var result = {
    height: win.innerHeight,
    width: win.innerWidth
  };
  if (document2.scrollHeight - document2.clientHeight > 0) {
    result.width -= scrollbarWidth2();
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element) {
  if (!element.getBoundingClientRect) {
    var viewport = windowViewport(element);
    return {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: 0
    };
  }
  var ref = element.getBoundingClientRect();
  var bottom = ref.bottom;
  var left = ref.left;
  var right = ref.right;
  var top = ref.top;
  return {
    bottom,
    left,
    right,
    top
  };
};
var bounding_offset_default = boundingOffset;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element) {
  var offsetParent2 = element.offsetParent;
  while (offsetParent2 && offsetParent2.style.position === "static") {
    offsetParent2 = offsetParent2.offsetParent;
  }
  return offsetParent2 || document_default(element);
};
var offset_parent_default = offsetParent;

// node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element) {
  var ref = element.style;
  var display = ref.display;
  var left = ref.left;
  var position2 = ref.position;
  element.style.display = "";
  element.style.left = "-10000px";
  element.style.position = "absolute";
  var rect = element.getBoundingClientRect();
  element.style.display = display;
  element.style.left = left;
  element.style.position = position2;
  return rect;
};
var offset = function(element) {
  var rect = element.getBoundingClientRect();
  var left = rect.left;
  var top = rect.top;
  if (!rect.height && !rect.width) {
    rect = rectOfHiddenElement(element);
  }
  return {
    top,
    left,
    height: rect.height,
    width: rect.width
  };
};
var offset_default = offset;

// node_modules/@progress/kendo-popup-common/dist/es/parents.js
function parents_default(element, until) {
  var result = [];
  var next = element.parentNode;
  while (next) {
    result.push(next);
    if (next === until) {
      break;
    }
    next = next.parentNode;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
function scrollPosition(element) {
  var documentElement = document_default(element);
  var win = window_default(element);
  return {
    x: win.pageXOffset || documentElement.scrollLeft || 0,
    y: win.pageYOffset || documentElement.scrollTop || 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
function element_scroll_position_default(element) {
  if (element === (element.ownerDocument || {}).body) {
    return scrollPosition(element);
  }
  return {
    x: element.scrollLeft,
    y: element.scrollTop
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
function parentScrollPosition(element) {
  var parent = offset_parent_default(element);
  return parent ? element_scroll_position_default(parent) : {
    x: 0,
    y: 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/position.js
var position = function(element, parent) {
  var win = window_default(element);
  var elementStyles = win.getComputedStyle(element);
  var offset2 = offset_default(element);
  var parentElement = parent || offset_parent_default(element);
  var ownerDocument2 = element.ownerDocument;
  var useRelative = parentElement !== ownerDocument2.body && parentElement !== ownerDocument2.documentElement;
  var parentOffset = {
    top: 0,
    left: 0
  };
  if (elementStyles.position !== "fixed" && useRelative) {
    var parentStyles = win.getComputedStyle(parentElement);
    parentOffset = offset_default(parentElement);
    parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
    parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
  }
  return {
    top: offset2.top - parentOffset.top,
    left: offset2.left - parentOffset.left,
    height: offset2.height,
    width: offset2.width
  };
};
var position_default = position;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
function offset_parent_scroll_position_default(offsetParentElement, element) {
  return (
    // eslint-disable-line no-arrow-condition
    offsetParentElement ? element_scroll_position_default(offsetParentElement) : parentScrollPosition(element)
  );
}

// node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
function position_with_scroll_default(element, parent, scale) {
  if (scale === void 0) scale = 1;
  var offsetParentElement = parent ? offset_parent_default(parent) : null;
  var ref = position_default(element, offsetParentElement);
  var top = ref.top;
  var left = ref.left;
  var height = ref.height;
  var width = ref.width;
  var ref$1 = offset_parent_scroll_position_default(offsetParentElement, element);
  var x = ref$1.x;
  var y = ref$1.y;
  var ownerDocument2 = element.ownerDocument;
  var positionScale = offsetParentElement === ownerDocument2.body || offsetParentElement === ownerDocument2.documentElement ? 1 : scale;
  return {
    top: top + y * positionScale,
    left: left + x * positionScale,
    height,
    width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
function removeScroll(rect, scroll) {
  return {
    top: rect.top - scroll.y,
    left: rect.left - scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/collision.js
var collision_default = {
  "fit": "fit",
  "flip": "flip",
  "none": "none"
};

// node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position2, size, viewPortSize) {
  var output = 0;
  if (position2 + size > viewPortSize) {
    output = viewPortSize - (position2 + size);
  }
  if (position2 < 0) {
    output = -position2;
  }
  return output;
};
var flip = function(ref) {
  var offset2 = ref.offset;
  var size = ref.size;
  var anchorSize = ref.anchorSize;
  var viewPortSize = ref.viewPortSize;
  var anchorAlignPoint = ref.anchorAlignPoint;
  var elementAlignPoint = ref.elementAlignPoint;
  var margin = ref.margin;
  var output = 0;
  var isPositionCentered = elementAlignPoint === align_point_default.center || elementAlignPoint === align_point_default.middle;
  var isOriginCentered = anchorAlignPoint === align_point_default.center || anchorAlignPoint === align_point_default.middle;
  var marginToAdd = 2 * margin;
  if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
    var isBeforeAnchor = anchorAlignPoint === align_point_default.top || anchorAlignPoint === align_point_default.left;
    if (offset2 < 0 && isBeforeAnchor) {
      output = size + anchorSize + marginToAdd;
      if (offset2 + output + size > viewPortSize) {
        output = 0;
      }
    } else if (offset2 >= 0 && !isBeforeAnchor) {
      if (offset2 + size > viewPortSize) {
        output += -(anchorSize + size + marginToAdd);
      }
      if (offset2 + output < 0) {
        output = 0;
      }
    }
  }
  return output;
};
var restrictToView = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var collisions = options.collisions;
  var viewPort = options.viewPort;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var elementTop = elementRect.top;
  var elementLeft = elementRect.left;
  var elementHeight = elementRect.height;
  var elementWidth = elementRect.width;
  var viewPortHeight = viewPort.height;
  var viewPortWidth = viewPort.width;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var left = 0;
  var top = 0;
  var isVerticalFit = collisions.vertical === collision_default.fit;
  var isHorizontalFit = collisions.horizontal === collision_default.fit;
  var isVerticalFlip = collisions.vertical === collision_default.flip;
  var isHorizontalFlip = collisions.horizontal === collision_default.flip;
  if (isVerticalFit) {
    top += fit(elementTop, elementHeight, viewPortHeight);
  }
  if (isHorizontalFit) {
    left += fit(elementLeft, elementWidth, viewPortWidth);
  }
  if (isVerticalFlip) {
    top += flip({
      margin: verticalMargin,
      offset: elementTop,
      size: elementHeight,
      anchorSize: anchorRect.height,
      viewPortSize: viewPortHeight,
      anchorAlignPoint: anchorAlign.vertical,
      elementAlignPoint: elementAlign.vertical
    });
  }
  if (isHorizontalFlip) {
    left += flip({
      margin: horizontalMargin,
      offset: elementLeft,
      size: elementWidth,
      anchorSize: anchorRect.width,
      viewPortSize: viewPortWidth,
      anchorAlignPoint: anchorAlign.horizontal,
      elementAlignPoint: elementAlign.horizontal
    });
  }
  var flippedVertical = isVerticalFlip && top !== 0;
  var flippedHorizontal = isHorizontalFlip && left !== 0;
  var fittedVertical = isVerticalFit && top !== 0;
  var fittedHorizontal = isHorizontalFit && left !== 0;
  return {
    flipped: flippedHorizontal || flippedVertical,
    fitted: fittedVertical || fittedHorizontal,
    flip: {
      horizontal: flippedHorizontal,
      vertical: flippedVertical
    },
    fit: {
      horizontal: fittedHorizontal,
      vertical: fittedVertical
    },
    offset: {
      left,
      top
    }
  };
};
var restrict_to_view_default = restrictToView;

// node_modules/@progress/kendo-popup-common/dist/es/siblings.js
function siblings_default(element) {
  var result = [];
  var sibling = element.parentNode.firstElementChild;
  while (sibling) {
    if (sibling !== element) {
      result.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
function sibling_container_default(anchor, container) {
  var parentElements = parents_default(anchor);
  var containerElement = container;
  var siblingElements;
  var result;
  while (containerElement) {
    siblingElements = siblings_default(containerElement);
    result = parentElements.reduce(function(list, p) {
      return list.concat(siblingElements.filter(function(s) {
        return s === p;
      }));
    }, [])[0];
    if (result) {
      break;
    }
    containerElement = containerElement.parentElement;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/utils.js
function memoize(fun) {
  var result;
  var called = false;
  return function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    if (called) {
      return result;
    }
    result = fun.apply(void 0, args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext = memoize(function(elementSource) {
  if (!canUseDOM()) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  parent.innerHTML = '<div style="position: fixed; top: ' + top + 'px;">child</div>';
  currentDocument.body.appendChild(parent);
  var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
});
var canUseDOM = function() {
  return Boolean(
    // from fbjs
    typeof window !== "undefined" && window.document && window.document.createElement
  );
};

// node_modules/@progress/kendo-angular-popup/fesm2015/progress-kendo-angular-popup.mjs
var import_rxjs4 = __toESM(require_cjs(), 1);
var import_operators4 = __toESM(require_operators(), 1);
var _c02 = ["container"];
var _c12 = ["*"];
function PopupComponent_ng_template_4_Template(rf, ctx) {
}
var eitherRect = (rect, offset2) => {
  if (!rect) {
    return {
      height: 0,
      left: offset2.left,
      top: offset2.top,
      width: 0
    };
  }
  return rect;
};
var removeStackingOffset = (rect, stackingOffset) => {
  if (!stackingOffset) {
    return rect;
  }
  const result = {
    height: rect.height,
    left: rect.left - stackingOffset.left,
    top: rect.top - stackingOffset.top,
    width: rect.width
  };
  return result;
};
var isDifferentOffset = (oldOffset, newOffset) => {
  const {
    left: oldLeft,
    top: oldTop
  } = oldOffset;
  const {
    left: newLeft,
    top: newTop
  } = newOffset;
  return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
var isWindowAvailable2 = () => {
  return typeof window !== "undefined";
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = (element) => {
  return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
var overflowComputedStyle = (element) => {
  const styles = window.getComputedStyle(element);
  return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
var overflowStyle = (element) => {
  return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = (element) => {
  const parentElements = [];
  if (!isDocumentAvailable() || !isWindowAvailable2()) {
    return parentElements;
  }
  let parent = element.parentElement;
  while (parent) {
    if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) {
      parentElements.push(parent);
    }
    parent = parent.parentElement;
  }
  parentElements.push(window);
  return parentElements;
};
var FRAME_DURATION = 1e3 / 60;
function memoize2(fun) {
  let result;
  let called = false;
  return (...args) => {
    if (called) {
      return result;
    }
    result = fun(...args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext2 = memoize2(() => {
  if (!isDocumentAvailable() && document.body !== null) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const childElement = document.createElement("div");
  childElement.style.position = "fixed";
  childElement.style.top = `${top}px`;
  childElement.textContent = "child";
  parent.appendChild(childElement);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
});
var zIndex2 = (anchor, container) => {
  if (!anchor || !isDocumentAvailable() || !isWindowAvailable2()) {
    return null;
  }
  const sibling = sibling_container_default(anchor, container);
  if (!sibling) {
    return null;
  }
  const result = [anchor].concat(parents_default(anchor, sibling)).reduce((index, p) => {
    const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
    const current = parseInt(zIndexStyle, 10);
    return current > index ? current : index;
  }, 0);
  return result ? result + 1 : null;
};
var scaleRect = (rect, scale) => {
  if (!rect || scale === 1) {
    return rect;
  }
  return {
    height: rect.height / scale,
    left: rect.left / scale,
    top: rect.top / scale,
    width: rect.width / scale
  };
};
var SCALE = new InjectionToken("Popup Document Scale");
var STYLES = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"];
var DOMService = class {
  addOffset(current, addition) {
    return {
      left: current.left + addition.left,
      top: current.top + addition.top
    };
  }
  addScroll(rect, scroll) {
    return addScroll(rect, scroll);
  }
  align(settings) {
    return align_default(settings);
  }
  boundingOffset(el) {
    return bounding_offset_default(el);
  }
  getFontStyles(el) {
    const window2 = this.getWindow();
    if (!window2 || !el) {
      return [];
    }
    const computedStyles = window2.getComputedStyle(el);
    return STYLES.map((key) => ({
      key,
      value: computedStyles[key]
    }));
  }
  getWindow() {
    return isWindowAvailable2() ? window : null;
  }
  hasOffsetParent(el) {
    if (!el || !isDocumentAvailable()) {
      return false;
    }
    return !!this.nativeElement(el).offsetParent;
  }
  offset(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return offset_default(el);
  }
  offsetAtPoint(el, currentLocation) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    const element = this.nativeElement(el);
    const {
      left,
      top,
      transition
    } = element.style;
    element.style.transition = "none";
    element.style.left = `${currentLocation.left}px`;
    element.style.top = `${currentLocation.top}px`;
    const currentOffset = offset_default(element);
    element.style.left = left;
    element.style.top = top;
    this._dummy = element.offsetHeight;
    element.style.transition = transition;
    return currentOffset;
  }
  nativeElement(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return el.nativeElement || el;
  }
  position(element, popup, scale = 1) {
    if (!element || !popup) {
      return null;
    }
    return position_with_scroll_default(element, this.nativeElement(popup), scale);
  }
  removeScroll(rect, scroll) {
    return removeScroll(rect, scroll);
  }
  restrictToView(settings) {
    return restrict_to_view_default(settings);
  }
  scrollPosition(el) {
    return scrollPosition(this.nativeElement(el));
  }
  scrollableParents(el) {
    return scrollableParents(el);
  }
  stackingElementOffset(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return null;
    }
    return offset_default(relativeContextElement);
  }
  stackingElementScroll(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: relativeContextElement.scrollLeft,
      y: relativeContextElement.scrollTop
    };
  }
  getRelativeContextElement(el) {
    if (!el || !hasRelativeStackingContext2()) {
      return null;
    }
    let parent = this.nativeElement(el).parentElement;
    while (parent) {
      if (window.getComputedStyle(parent).transform !== "none") {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
  useRelativePosition(el) {
    return !!this.getRelativeContextElement(el);
  }
  windowViewPort(el) {
    return windowViewport(this.nativeElement(el));
  }
  zIndex(anchor, container) {
    return zIndex2(anchor, this.nativeElement(container));
  }
  zoomLevel() {
    if (!isDocumentAvailable() || !isWindowAvailable2()) {
      return 1;
    }
    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
  }
  isZoomed() {
    return this.zoomLevel() > 1;
  }
};
DOMService.ɵfac = function DOMService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DOMService)();
};
DOMService.ɵprov = ɵɵdefineInjectable({
  token: DOMService,
  factory: DOMService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DOMService, [{
    type: Injectable
  }], null, null);
})();
var AlignService = class {
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  alignElement(settings) {
    const {
      anchor,
      element,
      anchorAlign,
      elementAlign,
      margin,
      offset: offset2,
      positionMode
    } = settings;
    const scale = this.scale || 1;
    const fixedMode = positionMode === "fixed" || !this._dom.hasOffsetParent(element);
    const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset2, scale) : this.relativeRect(anchor, element, offset2, scale);
    const elementRect = scaleRect(this._dom.offset(element.nativeElement), scale);
    const result = this._dom.align({
      anchorAlign,
      anchorRect,
      elementAlign,
      elementRect,
      margin
    });
    return result;
  }
  absoluteRect(anchor, element, offset2, scale) {
    const scrollPos = this.elementScrollPosition(anchor, element);
    const rect = eitherRect(this._dom.offset(anchor), offset2);
    const stackScale = 2 * scale;
    const stackScroll = this._dom.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
      stackScroll.x /= stackScale;
      stackScroll.y /= stackScale;
    }
    const stackOffset = this._dom.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
      stackOffset.left /= stackScale;
      stackOffset.top /= stackScale;
    }
    return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
  }
  elementScrollPosition(anchor, element) {
    return anchor ? {
      x: 0,
      y: 0
    } : this._dom.scrollPosition(element);
  }
  relativeRect(anchor, element, offset2, scale) {
    const rect = eitherRect(this._dom.position(anchor, element, scale), offset2);
    return scaleRect(rect, scale);
  }
};
AlignService.ɵfac = function AlignService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AlignService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
};
AlignService.ɵprov = ɵɵdefineInjectable({
  token: AlignService,
  factory: AlignService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var PositionService = class {
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  positionElement(settings) {
    const {
      anchor,
      currentLocation,
      element,
      anchorAlign,
      elementAlign,
      collisions,
      margin
    } = settings;
    const dom = this._dom;
    const scale = this.scale || 1;
    const elementOffset = dom.offsetAtPoint(element, currentLocation);
    const elementRect = scaleRect(elementOffset, scale);
    const anchorOffset = scaleRect(dom.offset(anchor), scale);
    const anchorRect = eitherRect(anchorOffset, currentLocation);
    const viewPort = settings.viewPort || dom.windowViewPort(element);
    viewPort.width = viewPort.width / scale;
    viewPort.height = viewPort.height / scale;
    const result = dom.restrictToView({
      anchorAlign,
      anchorRect,
      collisions,
      elementAlign,
      elementRect,
      margin,
      viewPort
    });
    const offset2 = dom.addOffset(currentLocation, result.offset);
    return {
      flip: result.flip,
      flipped: result.flipped,
      offset: offset2
    };
  }
};
PositionService.ɵfac = function PositionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PositionService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
};
PositionService.ɵprov = ɵɵdefineInjectable({
  token: PositionService,
  factory: PositionService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var ResizeService2 = class {
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  subscribe(callback) {
    if (!isDocumentAvailable()) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.subscription = (0, import_rxjs4.fromEvent)(this._dom.getWindow(), "resize").pipe((0, import_operators4.auditTime)(FRAME_DURATION)).subscribe(() => callback());
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isUnsubscribed() {
    return this.subscription && this.subscription.closed;
  }
};
ResizeService2.ɵfac = function ResizeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeService2)(ɵɵinject(DOMService), ɵɵinject(NgZone));
};
ResizeService2.ɵprov = ɵɵdefineInjectable({
  token: ResizeService2,
  factory: ResizeService2.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService2, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var THRESHOLD_DIFF = 1;
var ScrollableService = class {
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  forElement(element) {
    this.unsubscribe();
    this.element = element;
    return this;
  }
  subscribe(callback) {
    if (!callback || !isDocumentAvailable() || !this.element) {
      return;
    }
    const parents = this._dom.scrollableParents(this.element);
    this._zone.runOutsideAngular(() => {
      const observables = parents.map((p) => (0, import_rxjs4.fromEvent)(p, "scroll").pipe((0, import_operators4.auditTime)(FRAME_DURATION)));
      const subscriber = (e) => {
        const target = e.target;
        const isParent = parents.filter((p) => p === target).length > 0;
        const isDocument = target === document;
        const isWindow = target === window;
        if (isParent || isDocument || isWindow) {
          callback(this.isVisible(this.element, target));
        }
      };
      this.subscription = (0, import_rxjs4.merge)(...observables).subscribe(subscriber);
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isVisible(elem, container) {
    const elemRect = this._dom.boundingOffset(elem);
    const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
    if (THRESHOLD_DIFF < containerRect.top - elemRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.top - containerRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.left - containerRect.right) {
      return false;
    }
    if (THRESHOLD_DIFF < containerRect.left - elemRect.right) {
      return false;
    }
    return true;
  }
};
ScrollableService.ɵfac = function ScrollableService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ScrollableService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
};
ScrollableService.ɵprov = ɵɵdefineInjectable({
  token: ScrollableService,
  factory: ScrollableService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollableService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var LEFT = "left";
var RIGHT = "right";
var DOWN = "down";
var UP = "up";
var DEFAULT_TYPE = "slide";
var DEFAULT_DURATION = 100;
var animationTypes = {};
animationTypes.expand = (direction) => {
  const scale = direction === UP || direction === DOWN ? "scaleY" : "scaleX";
  const startScale = 0;
  const endScale = 1;
  let origin;
  if (direction === DOWN) {
    origin = "top";
  } else if (direction === LEFT) {
    origin = RIGHT;
  } else if (direction === RIGHT) {
    origin = LEFT;
  } else {
    origin = "bottom";
  }
  return {
    start: {
      transform: `${scale}(${startScale})`,
      transformOrigin: origin
    },
    end: {
      transform: `${scale}(${endScale})`
    }
  };
};
animationTypes.slide = (direction) => {
  const translate = direction === LEFT || direction === RIGHT ? "translateX" : "translateY";
  const start = direction === RIGHT || direction === DOWN ? -100 : 100;
  const end = 0;
  return {
    start: {
      transform: `${translate}(${start}%)`
    },
    end: {
      transform: `${translate}(${end}%)`
    }
  };
};
animationTypes.fade = () => {
  return {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1
    }
  };
};
animationTypes.zoom = () => {
  const start = 0;
  const end = 1;
  return {
    start: {
      transform: `scale(${start})`
    },
    end: {
      transform: `scale(${end})`
    }
  };
};
var AnimationService = class {
  constructor(animationBuilder) {
    this.animationBuilder = animationBuilder;
    this.start = new EventEmitter();
    this.end = new EventEmitter();
  }
  play(element, options, flip2) {
    if (!this.flip || this.flip.horizontal !== flip2.horizontal || this.flip.vertical !== flip2.vertical) {
      this.flip = flip2;
      const type = options.type || DEFAULT_TYPE;
      const statesFn = animationTypes[type];
      if (statesFn) {
        const direction = this.getDirection(flip2, options);
        const states = statesFn(direction);
        this.playStates(element, states, options);
      } else if (isDevMode()) {
        throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
      }
    }
  }
  ngOnDestroy() {
    this.stopPlayer();
  }
  playStates(element, states, options) {
    this.stopPlayer();
    const duration = options.duration || DEFAULT_DURATION;
    const factory = this.animationBuilder.build([style(states.start), animate(`${duration}ms ease-in`, style(states.end))]);
    const player = this.player = factory.create(element);
    player.onDone(() => {
      this.end.emit();
      this.stopPlayer();
    });
    this.start.emit();
    player.play();
  }
  getDirection(flip2, options) {
    let direction = options.direction || DOWN;
    if (flip2.horizontal) {
      if (direction === LEFT) {
        direction = RIGHT;
      } else if (direction === RIGHT) {
        direction = LEFT;
      }
    }
    if (flip2.vertical) {
      if (direction === DOWN) {
        direction = UP;
      } else if (direction === UP) {
        direction = DOWN;
      }
    }
    return direction;
  }
  stopPlayer() {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }
  }
};
AnimationService.ɵfac = function AnimationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AnimationService)(ɵɵinject(AnimationBuilder));
};
AnimationService.ɵprov = ɵɵdefineInjectable({
  token: AnimationService,
  factory: AnimationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationService, [{
    type: Injectable
  }], function() {
    return [{
      type: AnimationBuilder
    }];
  }, null);
})();
var packageMetadata2 = {
  name: "@progress/kendo-angular-popup",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372144,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var DEFAULT_OFFSET = {
  left: -1e4,
  top: 0
};
var ANIMATION_CONTAINER = "k-animation-container";
var ANIMATION_CONTAINER_FIXED = "k-animation-container-fixed";
var PopupComponent = class {
  constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
    this.container = container;
    this._alignService = _alignService;
    this.domService = domService;
    this._positionService = _positionService;
    this._resizeService = _resizeService;
    this._scrollableService = _scrollableService;
    this.animationService = animationService;
    this._renderer = _renderer;
    this._zone = _zone;
    this.animate = true;
    this.anchorAlign = {
      horizontal: "left",
      vertical: "bottom"
    };
    this.collision = {
      horizontal: "fit",
      vertical: "flip"
    };
    this.popupAlign = {
      horizontal: "left",
      vertical: "top"
    };
    this.copyAnchorStyles = false;
    this.positionMode = "fixed";
    this.offset = DEFAULT_OFFSET;
    this.anchorViewportLeave = new EventEmitter();
    this.close = new EventEmitter();
    this.open = new EventEmitter();
    this.positionChange = new EventEmitter();
    this.resolvedPromise = Promise.resolve(null);
    this.initialCheck = true;
    validatePackage(packageMetadata2);
    this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
    this.updateFixedClass();
  }
  ngOnInit() {
    this.reposition = this.reposition.bind(this);
    this._resizeService.subscribe(this.reposition);
    this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
    this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
    this._scrollableService.forElement(this.domService.nativeElement(this.anchor) || this.container.nativeElement).subscribe(this.onScroll.bind(this));
    this.currentOffset = DEFAULT_OFFSET;
    this.setZIndex();
    this.copyFontStyles();
    this.updateFixedClass();
    this.reposition();
  }
  ngOnChanges(changes) {
    if (changes.copyAnchorStyles) {
      this.copyFontStyles();
    }
    if (changes.positionMode) {
      this.updateFixedClass();
    }
  }
  ngAfterViewInit() {
    if (!this.animate) {
      this.resolvedPromise.then(() => {
        this.onAnimationEnd();
      });
    }
    this.reposition();
  }
  ngAfterViewChecked() {
    if (this.initialCheck) {
      this.initialCheck = false;
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.unsubscribeReposition();
      this.repositionSubscription = (0, import_rxjs4.from)(this.resolvedPromise).subscribe(this.reposition);
    });
  }
  ngOnDestroy() {
    this.anchorViewportLeave.complete();
    this.positionChange.complete();
    this.close.emit();
    this.close.complete();
    this._resizeService.unsubscribe();
    this._scrollableService.unsubscribe();
    this.animationSubscriptions.unsubscribe();
    this.unsubscribeReposition();
  }
  /**
   * @hidden
   */
  onResize() {
    this.reposition();
  }
  onAnimationStart() {
    this._renderer.removeClass(this.container.nativeElement, "k-animation-container-shown");
  }
  onAnimationEnd() {
    this._renderer.addClass(this.container.nativeElement, "k-animation-container-shown");
    this.open.emit();
    this.open.complete();
  }
  get currentOffset() {
    return this._currentOffset;
  }
  set currentOffset(offset2) {
    this.setContainerStyle("left", `${offset2.left}px`);
    this.setContainerStyle("top", `${offset2.top}px`);
    this._currentOffset = offset2;
  }
  setZIndex() {
    if (this.anchor) {
      this.setContainerStyle("z-index", String(this.domService.zIndex(this.domService.nativeElement(this.anchor), this.container)));
    }
  }
  reposition() {
    if (!isDocumentAvailable()) {
      return;
    }
    const {
      flip: flip2,
      offset: offset2
    } = this.position();
    if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset2)) {
      this.currentOffset = offset2;
      if (hasObservers(this.positionChange)) {
        this._zone.run(() => this.positionChange.emit({
          offset: offset2,
          flip: flip2
        }));
      }
    }
    if (this.animate) {
      this.animationService.play(this.contentContainer.nativeElement, this.animate, flip2);
    }
    this.resizeSensor.acceptSize();
  }
  position() {
    const alignedOffset = this._alignService.alignElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin,
      offset: this.offset,
      positionMode: this.positionMode
    });
    return this._positionService.positionElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      collisions: this.collision,
      currentLocation: alignedOffset,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin
    });
  }
  onScroll(isInViewPort) {
    const hasLeaveObservers = hasObservers(this.anchorViewportLeave);
    if (isInViewPort || !hasLeaveObservers) {
      this.reposition();
    } else if (hasLeaveObservers) {
      this._zone.run(() => {
        this.anchorViewportLeave.emit();
      });
    }
  }
  copyFontStyles() {
    if (!this.anchor || !this.copyAnchorStyles) {
      return;
    }
    this.domService.getFontStyles(this.domService.nativeElement(this.anchor)).forEach((s) => this.setContainerStyle(s.key, s.value));
  }
  updateFixedClass() {
    const action = this.positionMode === "fixed" ? "addClass" : "removeClass";
    this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
  }
  setContainerStyle(name, value) {
    this._renderer.setStyle(this.container.nativeElement, name, value);
  }
  unsubscribeReposition() {
    if (this.repositionSubscription) {
      this.repositionSubscription.unsubscribe();
    }
  }
};
PopupComponent.ɵfac = function PopupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AlignService), ɵɵdirectiveInject(DOMService), ɵɵdirectiveInject(PositionService), ɵɵdirectiveInject(ResizeService2), ɵɵdirectiveInject(ScrollableService), ɵɵdirectiveInject(AnimationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
};
PopupComponent.ɵcmp = ɵɵdefineComponent({
  type: PopupComponent,
  selectors: [["kendo-popup"]],
  viewQuery: function PopupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 7);
      ɵɵviewQuery(ResizeSensorComponent, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
    }
  },
  inputs: {
    animate: "animate",
    anchor: "anchor",
    anchorAlign: "anchorAlign",
    collision: "collision",
    popupAlign: "popupAlign",
    copyAnchorStyles: "copyAnchorStyles",
    popupClass: "popupClass",
    positionMode: "positionMode",
    offset: "offset",
    margin: "margin"
  },
  outputs: {
    anchorViewportLeave: "anchorViewportLeave",
    close: "close",
    open: "open",
    positionChange: "positionChange"
  },
  exportAs: ["kendo-popup"],
  standalone: true,
  features: [ɵɵProvidersFeature([AlignService, AnimationService, DOMService, PositionService, ResizeService2, ScrollableService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c12,
  decls: 6,
  vars: 4,
  consts: [["container", ""], [1, "k-child-animation-container"], [1, "k-popup", 3, "ngClass"], [3, "ngTemplateOutlet", "ngIf"], [3, "resize", "rateLimit"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1)(1, "div", 2, 0);
      ɵɵprojection(3);
      ɵɵtemplate(4, PopupComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
      ɵɵelementStart(5, "kendo-resize-sensor", 4);
      ɵɵlistener("resize", function PopupComponent_Template_kendo_resize_sensor_resize_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onResize());
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.popupClass);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.content)("ngIf", ctx.content);
      ɵɵadvance();
      ɵɵproperty("rateLimit", 100);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet, NgIf, ResizeSensorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendo-popup",
      providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService2, ScrollableService],
      selector: "kendo-popup",
      template: `
        <div class="k-child-animation-container">
            <div class="k-popup" [ngClass]="popupClass" #container>
                <ng-content></ng-content>
                <ng-template [ngTemplateOutlet]="content" [ngIf]="content"></ng-template>
                <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
                </kendo-resize-sensor>
            </div>
        </div>
     `,
      standalone: true,
      imports: [NgClass, NgTemplateOutlet, NgIf, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: AlignService
    }, {
      type: DOMService
    }, {
      type: PositionService
    }, {
      type: ResizeService2
    }, {
      type: ScrollableService
    }, {
      type: AnimationService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    animate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    copyAnchorStyles: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    anchorViewportLeave: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }]
  });
})();
var removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var POPUP_CONTAINER = new InjectionToken("Popup Container");
var PopupService = class {
  constructor(applicationRef, componentFactoryResolver, injector, container) {
    this.applicationRef = applicationRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.container = container;
  }
  /**
   * Gets the root view container into which the component will be injected.
   *
   * @returns {ComponentRef<any>}
   */
  get rootViewContainer() {
    const rootComponents = this.applicationRef.components || [];
    if (rootComponents[0]) {
      return rootComponents[0];
    }
    throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See https://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
  }
  /**
   * Sets or gets the HTML element of the root component container.
   *
   * @returns {HTMLElement}
   */
  get rootViewContainerNode() {
    return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
  }
  /**
   * Opens a Popup component. Created Popups are mounted
   * in the DOM directly in the root application component.
   *
   * @param {PopupSettings} options - The options which define the Popup.
   * @returns {ComponentRef<PopupComponent>} - A reference to the Popup object.
   *
   * @example
   *
   * ```ts-no-run
   * _@Component({
   *   selector: 'my-app',
   *   template: `
   *     <ng-template #template>
   *      Popup content
   *     </ng-template>
   *     <button #anchor kendoButton (click)="open(anchor, template)">Open</button>
   *   `
   * })
   * export class AppComponent {
   *     public popupRef: PopupRef;
   *
   *     constructor( private popupService: PopupService ) {}
   *
   *     public open(anchor: ElementRef, template: TemplateRef<any>): void {
   *         if (this.popupRef) {
   *              this.popupRef.close();
   *              this.popupRef = null;
   *              return;
   *         }
   *
   *         this.popupRef = this.popupService.open({
   *           anchor: anchor,
   *           content: template
   *         });
   *     }
   * }
   * ```
   */
  open(options = {}) {
    const {
      component,
      nodes
    } = this.contentFrom(options.content);
    const popupComponentRef = this.appendPopup(nodes, options.appendTo);
    const popupInstance = popupComponentRef.instance;
    this.projectComponentInputs(popupComponentRef, options);
    popupComponentRef.changeDetectorRef.detectChanges();
    if (component) {
      component.changeDetectorRef.detectChanges();
    }
    const popupElement = this.getComponentRootNode(popupComponentRef);
    return {
      close: () => {
        if (component) {
          component.destroy();
        }
        popupComponentRef.destroy();
        removeElement(popupElement);
      },
      content: component,
      popup: popupComponentRef,
      popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
      popupClose: popupInstance.close,
      popupElement,
      popupOpen: popupInstance.open,
      popupPositionChange: popupInstance.positionChange
    };
  }
  appendPopup(nodes, container) {
    const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
    if (!container) {
      this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
    }
    return popupComponentRef;
  }
  /**
   * Gets the HTML element for a component reference.
   *
   * @param {ComponentRef<any>} componentRef
   * @returns {HTMLElement}
   */
  getComponentRootNode(componentRef) {
    return componentRef.location.nativeElement;
  }
  /**
   * Gets the `ComponentFactory` instance by its type.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  getComponentFactory(componentClass) {
    return this.componentFactoryResolver.resolveComponentFactory(componentClass);
  }
  /**
   * Creates a component reference from a `Component` type class.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  createComponent(componentClass, nodes, container) {
    const factory = this.getComponentFactory(componentClass);
    if (container) {
      return container.createComponent(factory, void 0, this.injector, nodes);
    } else {
      const component = factory.create(this.injector, nodes);
      this.applicationRef.attachView(component.hostView);
      return component;
    }
  }
  /**
   * Projects the inputs on the component.
   *
   * @param {ComponentRef<any>} component
   * @param {*} options
   * @returns {ComponentRef<any>}
   */
  projectComponentInputs(component, options) {
    Object.getOwnPropertyNames(options).filter((prop) => prop !== "content" || options.content instanceof TemplateRef).map((prop) => {
      component.instance[prop] = options[prop];
    });
    return component;
  }
  /**
   * Gets the component and the nodes to append from the `content` option.
   *
   * @param {*} content
   * @returns {any}
   */
  contentFrom(content) {
    if (!content || content instanceof TemplateRef) {
      return {
        component: null,
        nodes: [[]]
      };
    }
    const component = this.createComponent(content);
    const nodes = component ? [component.location.nativeElement] : [];
    return {
      component,
      nodes: [
        nodes
        // <ng-content>
      ]
    };
  }
};
PopupService.ɵfac = function PopupService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopupService)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(POPUP_CONTAINER, 8));
};
PopupService.ɵprov = ɵɵdefineInjectable({
  token: PopupService,
  factory: PopupService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ApplicationRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [POPUP_CONTAINER]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var KENDO_POPUP = [PopupComponent];
var PopupModule = class {
};
PopupModule.ɵfac = function PopupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopupModule)();
};
PopupModule.ɵmod = ɵɵdefineNgModule({
  type: PopupModule,
  imports: [ResizeSensorComponent, PopupComponent],
  exports: [PopupComponent]
});
PopupModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, ResizeBatchService],
  imports: [ResizeSensorComponent, KENDO_POPUP]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_POPUP],
      imports: [ResizeSensorComponent, ...KENDO_POPUP],
      providers: [PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-angular-buttons/fesm2015/progress-kendo-angular-buttons.mjs
var _c03 = ["kendoButton", ""];
var _c13 = ["*"];
function ButtonComponent_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ButtonComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function ButtonComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
function ButtonComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.arrowIcon.iconClass);
  }
}
function ButtonComponent_kendo_icon_wrapper_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.arrowIcon.icon || "caret-alt-down")("svgIcon", ctx_r0.arrowIcon.svgIcon || ctx_r0.caretAltDownIcon);
  }
}
var _c22 = [[["", "kendoButton", ""], ["kendo-button"]]];
var _c32 = ["[kendoButton], kendo-button"];
function ChipComponent_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ChipComponent_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("customFontClass", ctx_r0.customIconClass);
  }
}
function ChipComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵelement(1, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.chipAvatarClass);
  }
}
function ChipComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
  }
}
function ChipComponent_ng_content_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!label"]);
  }
}
function ChipComponent_span_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function ChipComponent_span_6_span_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onMenuClick($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.defaultMenuIcon || ctx_r0.menuSvgIcon)("customFontClass", ctx_r0.menuIcon);
  }
}
function ChipComponent_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 17);
    ɵɵlistener("click", function ChipComponent_span_6_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onRemoveClick($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.removeSvgIcon || ctx_r0.defaultRemoveIcon)("customFontClass", ctx_r0.removeIcon);
  }
}
function ChipComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, ChipComponent_span_6_span_1_Template, 2, 2, "span", 13)(2, ChipComponent_span_6_span_2_Template, 2, 2, "span", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.hasMenu);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.removable);
  }
}
var _c42 = (a0, a1) => ({
  templateRef: a0,
  $implicit: a1
});
function ListComponent_li_1_ng_template_1_ng_template_1_Template(rf, ctx) {
}
function ListComponent_li_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, ListComponent_li_1_ng_template_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", dataItem_r4.disabled);
    ɵɵproperty("ngClass", dataItem_r4.cssClass);
    ɵɵadvance();
    ɵɵproperty("templateContext", ɵɵpureFunction2(4, _c42, ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef, dataItem_r4));
  }
}
function ListComponent_li_1_ng_template_2_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 9);
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("name", dataItem_r4.icon)("svgIcon", dataItem_r4.svgIcon)("customFontClass", dataItem_r4.iconClass);
  }
}
function ListComponent_li_1_ng_template_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 10);
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("src", dataItem_r4.imageUrl, ɵɵsanitizeUrl)("alt", dataItem_r4.imageAlt);
  }
}
function ListComponent_li_1_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getText(dataItem_r4), " ");
  }
}
function ListComponent_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, ListComponent_li_1_ng_template_2_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 6)(2, ListComponent_li_1_ng_template_2_img_2_Template, 1, 2, "img", 7)(3, ListComponent_li_1_ng_template_2_span_3_Template, 2, 1, "span", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", dataItem_r4.disabled);
    ɵɵproperty("ngClass", dataItem_r4.cssClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", dataItem_r4.icon || dataItem_r4.iconClass || dataItem_r4.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", dataItem_r4.imageUrl);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getText(dataItem_r4));
  }
}
function ListComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 2);
    ɵɵlistener("click", function ListComponent_li_1_Template_li_click_0_listener($event) {
      const index_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      $event.stopImmediatePropagation();
      return ɵɵresetView(ctx_r2.onClick(index_r2));
    })("blur", function ListComponent_li_1_Template_li_blur_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onBlur());
    });
    ɵɵtemplate(1, ListComponent_li_1_ng_template_1_Template, 2, 7, "ng-template", 3)(2, ListComponent_li_1_ng_template_2_Template, 4, 6, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("index", index_r2);
    ɵɵattribute("aria-disabled", dataItem_r4.disabled ? true : false);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef));
  }
}
var _c5 = ["button"];
var _c6 = ["buttonList"];
var _c7 = ["popupTemplate"];
var _c8 = ["container"];
function DropDownButtonComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-button-list", 5, 3);
    ɵɵlistener("onItemClick", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_onItemClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick($event));
    })("keydown", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.keyDownHandler($event));
    })("keyup", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keyup_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.keyUpHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.listId)("data", ctx_r2.data)("textField", ctx_r2.textField)("itemTemplate", ctx_r2.itemTemplate)("size", ctx_r2.size);
    ɵɵattribute("dir", ctx_r2.dir)("aria-labelledby", ctx_r2.buttonId);
  }
}
var _c9 = ["kendoDialItem", ""];
var _c10 = (a0, a1, a2) => ({
  $implicit: a0,
  index: a1,
  isFocused: a2
});
function DialItemComponent_0_ng_template_0_Template(rf, ctx) {
}
function DialItemComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DialItemComponent_0_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dialItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c10, ctx_r0.item, ctx_r0.index, ctx_r0.isFocused));
  }
}
function DialItemComponent_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.label);
  }
}
function DialItemComponent_ng_container_1_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function DialItemComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DialItemComponent_ng_container_1_span_1_Template, 2, 1, "span", 2)(2, DialItemComponent_ng_container_1_kendo_icon_wrapper_2_Template, 1, 3, "kendo-icon-wrapper", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.label);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.icon || ctx_r0.item.iconClass || ctx_r0.item.svgIcon);
  }
}
var _c11 = ["kendoDialList", ""];
function DialListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "li", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("item", ctx_r2.dialItems[idx_r2])("index", idx_r2)("dialItemTemplate", ctx_r2.dialItemTemplate)("isFocused", ctx_r2.isFocused(idx_r2))("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("align", ctx_r2.align);
  }
}
var _c122 = (a0, a1, a2) => ({
  keydown: a0,
  click: a1,
  pointerdown: a2
});
var _c132 = (a0, a1) => ({
  keydown: a0,
  focusout: a1
});
function FloatingActionButtonComponent_2_ng_template_0_Template(rf, ctx) {
}
function FloatingActionButtonComponent_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FloatingActionButtonComponent_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.fabTemplate == null ? null : ctx_r1.fabTemplate.templateRef);
  }
}
function FloatingActionButtonComponent_ng_container_3_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r1.icon)("customFontClass", ctx_r1.iconClass)("svgIcon", ctx_r1.svgIcon);
  }
}
function FloatingActionButtonComponent_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.text);
  }
}
function FloatingActionButtonComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FloatingActionButtonComponent_ng_container_3_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 5)(2, FloatingActionButtonComponent_ng_container_3_span_2_Template, 2, 1, "span", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.icon || ctx_r1.iconClass || ctx_r1.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.text);
  }
}
function FloatingActionButtonComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 9);
    ɵɵlistener("click", function FloatingActionButtonComponent_ng_template_4_Template_ul_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.dialListId)("ngClass", ctx_r1.dialClass)("dialItems", ctx_r1.dialItems)("dialItemTemplate", ctx_r1.dialItemTemplate == null ? null : ctx_r1.dialItemTemplate.templateRef)("align", ctx_r1.align)("kendoEventsOutsideAngular", ɵɵpureFunction2(7, _c132, ctx_r1.keyDownHandler.bind(ctx_r1), ctx_r1.focusOutHandler.bind(ctx_r1)));
    ɵɵattribute("aria-labelledby", ctx_r1.id);
  }
}
var _c14 = ["arrowButton"];
function SplitButtonComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.text, " ");
  }
}
function SplitButtonComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-button-list", 10);
    ɵɵlistener("onItemClick", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_onItemClick_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    })("keydown", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.keyDownHandler($event));
    })("keyup", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keyup_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.keyUpHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.listId)("data", ctx_r1.data)("textField", ctx_r1.textField)("itemTemplate", ctx_r1.itemTemplate)("size", ctx_r1.size);
    ɵɵattribute("dir", ctx_r1.dir);
  }
}
var packageMetadata3 = {
  name: "@progress/kendo-angular-buttons",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1728372178,
  version: "16.11.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var resolvedPromise = Promise.resolve(null);
var isPresent3 = (value) => value !== null && value !== void 0;
function isDocumentNode(container) {
  return container.nodeType === 9;
}
function closest2(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  const matches = Element.prototype.matches ? (el, sel) => el.matches(sel) : (el, sel) => el.msMatchesSelector(sel);
  let node = element;
  while (node && !isDocumentNode(node)) {
    if (matches(node, selector)) {
      return node;
    }
    node = node.parentNode;
  }
}
var replaceMessagePlaceholder = (message, name, value) => message.replace(new RegExp(`{\\s*${name}\\s*}`, "g"), value);
var SIZES = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var ROUNDNESS = {
  small: "sm",
  medium: "md",
  large: "lg",
  full: "full"
};
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZES[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZES[newValue]}` : ""
      };
    case "rounded":
      return {
        toRemove: `k-rounded-${ROUNDNESS[previousValue]}`,
        toAdd: newValue !== "none" ? `k-rounded-${ROUNDNESS[newValue]}` : ""
      };
    case "fillMode":
      return {
        toRemove: `k-${componentType}-${previousValue}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${newValue}` : ""
      };
    default:
      break;
  }
};
var getThemeColorClasses = (componentType, prevFillMode, fillMode, previousValue, newValue) => {
  return {
    toRemove: `k-${componentType}-${prevFillMode}-${previousValue}`,
    toAdd: newValue !== "none" ? `k-${componentType}-${fillMode}-${newValue}` : ""
  };
};
var KendoButtonService = class {
  constructor() {
    this.buttonClicked = new import_rxjs5.Subject();
    this.buttonClicked$ = this.buttonClicked.asObservable();
  }
  click(button) {
    this.buttonClicked.next(button);
  }
};
KendoButtonService.ɵfac = function KendoButtonService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || KendoButtonService)();
};
KendoButtonService.ɵprov = ɵɵdefineInjectable({
  token: KendoButtonService,
  factory: KendoButtonService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KendoButtonService, [{
    type: Injectable
  }], null, null);
})();
var SPAN_TAG_NAME = "SPAN";
var BUTTON_TAG_NAME = "BUTTON";
var KENDO_BUTTON_TAG_NAME = "KENDO-BUTTON";
var DEFAULT_ROUNDED$3 = "medium";
var DEFAULT_SIZE$2 = "medium";
var DEFAULT_THEME_COLOR$2 = "base";
var DEFAULT_FILL_MODE$3 = "solid";
var ButtonComponent = class {
  constructor(element, renderer, service, localization, ngZone) {
    this.renderer = renderer;
    this.service = service;
    this.ngZone = ngZone;
    this.arrowIcon = false;
    this.toggleable = false;
    this.role = "button";
    this.selectedChange = new EventEmitter();
    this.click = new EventEmitter();
    this.isDisabled = false;
    this.caretAltDownIcon = caretAltDownIcon;
    this._size = DEFAULT_SIZE$2;
    this._rounded = DEFAULT_ROUNDED$3;
    this._fillMode = DEFAULT_FILL_MODE$3;
    this._themeColor = DEFAULT_THEME_COLOR$2;
    this._focused = false;
    this.subs = new import_rxjs5.Subscription();
    validatePackage(packageMetadata3);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.element = element.nativeElement;
  }
  /**
   * Backwards-compatible alias
   *
   * @hidden
   */
  get togglable() {
    return this.toggleable;
  }
  /**
   * @hidden
   */
  set togglable(value) {
    this.toggleable = value;
  }
  /**
   * Sets the selected state of the Button.
   *
   * @default false
   */
  get selected() {
    return this._selected || false;
  }
  set selected(value) {
    this._selected = value;
  }
  /**
   * @hidden
   */
  set tabIndex(index) {
    this.element.tabIndex = index;
  }
  get tabIndex() {
    return this.element.tabIndex;
  }
  /**
   * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
   * which are applied to a `span` element inside the Button. Allows the usage of custom icons.
   */
  set iconClass(value) {
    if (isDevMode() && value && (this.icon || this.svgIcon)) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._iconClass = value;
  }
  get iconClass() {
    return this._iconClass;
  }
  /**
   * Defines the name for an existing font icon in the Kendo UI theme.
   */
  set icon(name) {
    if (isDevMode() && name && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._icon = name;
  }
  get icon() {
    return this._icon;
  }
  /**
   * If set to `true`, it disables the Button.
   *
   * @default false
   */
  set disabled(disabled) {
    if (disabled && isDocumentAvailable() && isFirefox(navigator.userAgent)) {
      this.blur();
    }
    this.isDisabled = disabled;
    this.renderer.setProperty(this.element, "disabled", disabled);
  }
  get disabled() {
    return this.isDisabled;
  }
  /**
   * The size property specifies the padding of the Button
   * ([see example]({% slug appearance_button %}#toc-size)).
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$2;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the Button
   * ([see example](slug:appearance_button#toc-roundness)).
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$3;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the Button
   * ([see example](slug:appearance_button#toc-fill-mode)).
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$3;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * The Button allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color while also amending the text color accordingly
   * ([see example](slug:appearance_button#toc-theme-colors)).
   *
   * @default 'base'
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR$2;
    this.handleThemeColor(newThemeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Defines an SVGIcon to be rendered within the button.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  set isFocused(isFocused) {
    this.toggleClass("k-focus", isFocused);
    this._focused = isFocused;
  }
  get isFocused() {
    return this._focused;
  }
  get classButton() {
    return true;
  }
  get isToggleable() {
    return this.toggleable;
  }
  get iconButtonClass() {
    const hasIcon = this.icon || this.iconClass || this.imageUrl || this.svgIcon;
    return hasIcon && !this.hasText;
  }
  get roleSetter() {
    const isButtonElementAndRole = this.element.tagName === BUTTON_TAG_NAME && this.role === "button";
    return isButtonElementAndRole ? void 0 : this.role;
  }
  get classDisabled() {
    return this.isDisabled;
  }
  get classActive() {
    return this.selected;
  }
  get getDirection() {
    return this.direction;
  }
  /**
   * @hidden
   */
  onFocus() {
    this.isFocused = true;
  }
  /**
   * @hidden
   */
  onBlur() {
    this.isFocused = false;
  }
  /**
   * @hidden
   */
  set primary(value) {
    this.themeColor = value ? "primary" : "base";
  }
  /**
   * @hidden
   */
  set look(value) {
    switch (value) {
      case "default":
        this.fillMode = "solid";
        break;
      default:
        this.fillMode = value;
        break;
    }
  }
  /**
   * Alias for ElementRef.nativeElement to workaround
   * ViewChild() selectors that used to return the host element before v11.
   *
   * @hidden
   */
  get nativeElement() {
    return this.element;
  }
  ngOnInit() {
    const elementTagName = this.element.tagName;
    const isSpanOrKendoButton = elementTagName === SPAN_TAG_NAME || elementTagName === KENDO_BUTTON_TAG_NAME;
    if (!this.element.hasAttribute("role") && this.togglable) {
      this.toggleAriaPressed(this.toggleable);
    }
    if (this.role) {
      const isButtonElementAndRole = elementTagName === BUTTON_TAG_NAME && this.role === "button";
      if (!isButtonElementAndRole) {
        this.setAttribute("role", this.role);
      }
    }
    if (isSpanOrKendoButton && !this.isDisabled) {
      this.tabIndex = 0;
    }
    if (isDevMode() && isSpanOrKendoButton) {
      console.warn(`As of package v16, the "span[kendoButton]" and "kendo-button" selectors are deprecated and can
            be removed in a future major version. We recommend using the "button[kendoButton]" selector
            to avoid discrepancies between the behavior of the "ButtonComponent" and the native HTML Button element.`);
    }
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.element, "click", this._onButtonClick.bind(this)));
      this.subs.add(this.renderer.listen(this.element, "keydown", (event) => {
        const isSpaceOrEnter = event.keyCode === Keys.Space || event.keyCode === Keys.Enter;
        if (isSpanOrKendoButton && isSpaceOrEnter) {
          this.ngZone.run(() => {
            this.click.emit(event);
          });
          this._onButtonClick();
        }
      }));
      this.subs.add(this.renderer.listen(this.element, "mousedown", (event) => {
        const elementTagName2 = this.element.tagName;
        const isButton = elementTagName2 === BUTTON_TAG_NAME;
        const isBrowserSafari = isDocumentAvailable() && isSafari(navigator.userAgent);
        if (!this.isDisabled && isButton && isBrowserSafari) {
          event.preventDefault();
          this.element.focus();
        }
      }));
    });
  }
  ngOnChanges(change) {
    if (isChanged("togglable", change) || isChanged("toggleable", change)) {
      this.toggleAriaPressed(this.toggleable);
    }
  }
  ngAfterViewInit() {
    const stylingOptions = ["size", "rounded", "fillMode"];
    stylingOptions.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * @hidden
   */
  get hasText() {
    return isDocumentAvailable() && this.element.textContent.trim().length > 0;
  }
  /**
   * Focuses the Button component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.focus();
      this.isFocused = true;
    }
  }
  /**
   * Blurs the Button component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.blur();
      this.isFocused = false;
    }
  }
  /**
   * @hidden
   */
  setAttribute(attribute, value) {
    this.renderer.setAttribute(this.element, attribute, value);
  }
  /**
   * @hidden
   */
  removeAttribute(attribute) {
    this.renderer.removeAttribute(this.element, attribute);
  }
  /**
   * @hidden
   *
   * Internal setter that triggers selectedChange
   */
  setSelected(value) {
    const changed = this.selected !== value;
    this.selected = value;
    this.setAttribute("aria-pressed", this.selected.toString());
    this.toggleClass("k-selected", this.selected);
    if (changed && hasObservers(this.selectedChange)) {
      this.ngZone.run(() => {
        this.selectedChange.emit(value);
      });
    }
  }
  toggleAriaPressed(shouldSet) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (shouldSet) {
      this.setAttribute("aria-pressed", this.selected.toString());
    } else {
      this.removeAttribute("aria-pressed");
    }
  }
  toggleClass(className, add) {
    if (add) {
      this.renderer.addClass(this.element, className);
    } else {
      this.renderer.removeClass(this.element, className);
    }
  }
  _onButtonClick() {
    if (!this.disabled && this.service) {
      this.ngZone.run(() => {
        this.service.click(this);
      });
    }
    if (this.togglable && !this.service) {
      this.setSelected(!this.selected);
    }
  }
  handleClasses(value, input) {
    const elem = this.element;
    const classes = getStylingClasses("button", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor, this[input], value);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value, prevFillMode, fillMode) {
    const elem = this.element;
    const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
    const addFillMode = fillMode ? fillMode : this.fillMode;
    const themeColorClass = getThemeColorClasses("button", removeFillMode, addFillMode, this.themeColor, value);
    this.renderer.removeClass(elem, themeColorClass.toRemove);
    if (addFillMode !== "none" && fillMode !== "none") {
      if (themeColorClass.toAdd) {
        this.renderer.addClass(elem, themeColorClass.toAdd);
      }
    }
  }
};
ButtonComponent.ɵfac = function ButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(KendoButtonService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
ButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: ButtonComponent,
  selectors: [["button", "kendoButton", ""], ["span", "kendoButton", ""], ["kendo-button"]],
  hostVars: 13,
  hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function ButtonComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function ButtonComponent_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.roleSetter)("aria-disabled", ctx.classDisabled)("dir", ctx.getDirection);
      ɵɵclassProp("k-button", ctx.classButton)("k-toggle-button", ctx.isToggleable)("k-icon-button", ctx.iconButtonClass)("k-disabled", ctx.classDisabled)("k-selected", ctx.classActive);
    }
  },
  inputs: {
    arrowIcon: "arrowIcon",
    toggleable: "toggleable",
    togglable: "togglable",
    selected: "selected",
    tabIndex: "tabIndex",
    imageUrl: "imageUrl",
    iconClass: "iconClass",
    icon: "icon",
    disabled: "disabled",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor",
    svgIcon: "svgIcon",
    role: "role",
    primary: "primary",
    look: "look"
  },
  outputs: {
    selectedChange: "selectedChange",
    click: "click"
  },
  exportAs: ["kendoButton"],
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c03,
  ngContentSelectors: _c13,
  decls: 7,
  vars: 5,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ButtonComponent_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, ButtonComponent_span_1_Template, 2, 1, "span", 1)(2, ButtonComponent_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
      ɵɵtemplate(5, ButtonComponent_span_5_Template, 1, 1, "span", 2)(6, ButtonComponent_kendo_icon_wrapper_6_Template, 1, 2, "kendo-icon-wrapper", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.arrowIcon.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.arrowIcon && !ctx.arrowIcon.iconClass);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButton",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoButton], span[kendoButton], kendo-button",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
        <span *ngIf="$any(arrowIcon).iconClass" class="k-button-icon" [ngClass]="$any(arrowIcon).iconClass"></span>
        <kendo-icon-wrapper
            *ngIf="arrowIcon && !$any(arrowIcon).iconClass"
            innerCssClass="k-button-icon"
            [name]="$any(arrowIcon).icon || 'caret-alt-down'"
            [svgIcon]="$any(arrowIcon).svgIcon || caretAltDownIcon"></kendo-icon-wrapper>
    `,
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: KendoButtonService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    arrowIcon: [{
      type: Input
    }],
    toggleable: [{
      type: Input
    }],
    togglable: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    click: [{
      type: Output
    }],
    classButton: [{
      type: HostBinding,
      args: ["class.k-button"]
    }],
    isToggleable: [{
      type: HostBinding,
      args: ["class.k-toggle-button"]
    }],
    iconButtonClass: [{
      type: HostBinding,
      args: ["class.k-icon-button"]
    }],
    roleSetter: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    classDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    classActive: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    getDirection: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    primary: [{
      type: Input
    }],
    look: [{
      type: Input
    }]
  });
})();
var PreventableEvent2 = class {
  constructor() {
    this.prevented = false;
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * If the event is prevented by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var tabindex = "tabindex";
var ButtonGroupComponent = class {
  constructor(service, localization, renderer, element) {
    this.service = service;
    this.renderer = renderer;
    this.element = element;
    this.selection = "multiple";
    this.navigable = true;
    this.navigate = new EventEmitter();
    this._tabIndex = 0;
    this.currentTabIndex = 0;
    this.lastFocusedIndex = -1;
    this.subs = new import_rxjs5.Subscription();
    this.role = "group";
    this.focusHandler = () => {
      this.currentTabIndex = -1;
      this.defocus(this.buttons.toArray());
      const firstFocusableIndex = this.buttons.toArray().findIndex((current) => !current.disabled);
      const index = this.lastFocusedIndex === -1 ? firstFocusableIndex : this.lastFocusedIndex;
      this.focus(this.buttons.filter((_current, i) => {
        return i === index;
      }));
    };
    validatePackage(packageMetadata3);
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
  }
  /**
   * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   */
  set tabIndex(value) {
    this._tabIndex = value;
    this.currentTabIndex = value;
  }
  get tabIndex() {
    return this._tabIndex;
  }
  get wrapperClass() {
    return true;
  }
  get disabledClass() {
    return this.disabled;
  }
  get stretchedClass() {
    return !!this.width;
  }
  get dir() {
    return this.direction;
  }
  get ariaDisabled() {
    return this.disabled;
  }
  get wrapperWidth() {
    return this.width;
  }
  get wrapperTabIndex() {
    return this.disabled ? void 0 : this.navigable ? this.currentTabIndex : void 0;
  }
  ngOnInit() {
    this.subs.add(this.service.buttonClicked$.subscribe((button) => {
      let newSelectionValue;
      if (this.isSelectionSingle()) {
        newSelectionValue = true;
        this.deactivate(this.buttons.filter((current) => current !== button));
      } else {
        if (this.navigable) {
          this.defocus(this.buttons.toArray());
        }
        newSelectionValue = !button.selected;
      }
      if (button.togglable) {
        button.setSelected(newSelectionValue);
      }
      if (this.navigable) {
        this.currentTabIndex = -1;
        this.renderer.setAttribute(button, tabindex, "0");
      }
    }));
    this.handleSubs("focus", () => this.navigable, this.focusHandler);
    this.handleSubs("keydown", () => this.navigable && !this.disabled, (event) => this.navigateFocus(event));
    this.handleSubs("focusout", (event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement, () => {
      this.lastFocusedIndex = this.buttons.toArray().findIndex((button) => button.tabIndex !== -1);
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    });
    this.subs.add((0, import_rxjs5.fromEvent)(this.element.nativeElement, "focusout").pipe((0, import_operators5.filter)((event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement)).subscribe(() => {
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    }));
  }
  ngOnChanges(changes) {
    if (isChanged("disabled", changes)) {
      this.buttons.forEach((button) => {
        if (isPresent3(this.disabled)) {
          button.disabled = this.disabled;
        }
      });
    }
    if (isChanged("navigable", changes)) {
      if (changes["navigable"].currentValue) {
        this.defocus(this.buttons.toArray());
        this.currentTabIndex = 0;
      } else {
        this.currentTabIndex = -1;
        this.buttons.forEach((button) => this.renderer.setAttribute(button, tabindex, "0"));
      }
    }
  }
  ngAfterContentInit() {
    if (!this.navigable) {
      return;
    }
    this.defocus(this.buttons.toArray());
  }
  ngAfterViewChecked() {
    if (this.buttons.length) {
      this.renderer.addClass(this.buttons.first.element, "k-group-start");
      this.renderer.addClass(this.buttons.last.element, "k-group-end");
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngAfterContentChecked() {
    this.verifySettings();
  }
  navigateFocus(event) {
    const navigationButtons = this.buttons.toArray().filter((button) => !button.disabled);
    const focusedIndex = navigationButtons.findIndex((current) => current.element.tabIndex !== -1);
    const firstIndex = 0;
    const lastIndex = navigationButtons.length - 1;
    const eventArgs = new PreventableEvent2();
    if (event.keyCode === Keys.ArrowRight && focusedIndex < lastIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex + 1;
        }));
      }
    }
    if (event.keyCode === Keys.ArrowLeft && focusedIndex > firstIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex - 1;
        }));
      }
    }
  }
  deactivate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(false);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "-1");
      }
    });
  }
  activate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(true);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "0");
      }
      button.focus();
    });
  }
  defocus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "-1");
    });
  }
  focus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "0");
      button.focus();
    });
  }
  verifySettings() {
    if (isDevMode()) {
      if (this.isSelectionSingle() && this.buttons.filter((button) => button.selected).length > 1) {
        throw new Error("Having multiple selected buttons with single selection mode is not supported");
      }
    }
  }
  isSelectionSingle() {
    return this.selection === "single";
  }
  handleSubs(eventName, predicate, handler) {
    this.subs.add((0, import_rxjs5.fromEvent)(this.element.nativeElement, eventName).pipe((0, import_operators5.filter)(predicate)).subscribe(handler));
  }
};
ButtonGroupComponent.ɵfac = function ButtonGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonGroupComponent)(ɵɵdirectiveInject(KendoButtonService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
ButtonGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: ButtonGroupComponent,
  selectors: [["kendo-buttongroup"]],
  contentQueries: function ButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ButtonComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttons = _t);
    }
  },
  hostVars: 12,
  hostBindings: function ButtonGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("dir", ctx.dir)("aria-disabled", ctx.ariaDisabled)("tabindex", ctx.wrapperTabIndex);
      ɵɵstyleProp("width", ctx.wrapperWidth);
      ɵɵclassProp("k-button-group", ctx.wrapperClass)("k-disabled", ctx.disabledClass)("k-button-group-stretched", ctx.stretchedClass);
    }
  },
  inputs: {
    disabled: "disabled",
    selection: "selection",
    width: "width",
    tabIndex: "tabIndex",
    navigable: "navigable"
  },
  outputs: {
    navigate: "navigate"
  },
  exportAs: ["kendoButtonGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([KendoButtonService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.buttongroup"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c32,
  decls: 1,
  vars: 0,
  template: function ButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c22);
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButtonGroup",
      providers: [KendoButtonService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.buttongroup"
      }],
      selector: "kendo-buttongroup",
      template: `
        <ng-content select="[kendoButton], kendo-button"></ng-content>
    `,
      standalone: true
    }]
  }], function() {
    return [{
      type: KendoButtonService
    }, {
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    disabled: [{
      type: Input,
      args: ["disabled"]
    }],
    selection: [{
      type: Input,
      args: ["selection"]
    }],
    width: [{
      type: Input,
      args: ["width"]
    }],
    tabIndex: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    buttons: [{
      type: ContentChildren,
      args: [ButtonComponent]
    }],
    wrapperClass: [{
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    stretchedClass: [{
      type: HostBinding,
      args: ["class.k-button-group-stretched"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    wrapperWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    wrapperTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var DEFAULT_SIZE$1 = "medium";
var DEFAULT_ROUNDED$2 = "medium";
var DEFAULT_THEME_COLOR$1 = "base";
var DEFAULT_FILL_MODE$2 = "solid";
var ChipComponent = class {
  constructor(element, renderer, ngZone, localizationService) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.localizationService = localizationService;
    this.selected = false;
    this.removable = false;
    this.hasMenu = false;
    this.disabled = false;
    this.remove = new EventEmitter();
    this.menuToggle = new EventEmitter();
    this.contentClick = new EventEmitter();
    this.tabIndex = 0;
    this.hostClass = true;
    this.defaultRemoveIcon = xCircleIcon;
    this.defaultMenuIcon = moreVerticalIcon;
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this._themeColor = "base";
    this.focused = false;
    this.subs = new import_rxjs5.Subscription();
    validatePackage(packageMetadata3);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * The size property specifies the padding of the Chip
   * ([see example]({% slug appearance_chip %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$1;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the Chip
   * ([see example](slug:appearance_chip#toc-roundness)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$2;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the Chip
   * ([see example](slug:appearance_chip#toc-fill-mode)).
   *
   * The possible values are:
   * * `solid` (default)
   * * `outline`
   * * `none`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$2;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * The Chip allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color while also amending the text color accordingly
   * ([see example](slug:appearance_chip#toc-theme-colors)).
   *
   * The possible values are:
   * * `base` (default)
   * * `info`
   * * `success`
   * * `warning`
   * * `error`
   * * `none`
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR$1;
    this.handleThemeColor(newThemeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  get hasIconClass() {
    return Boolean(this.icon || this.iconClass || this.avatarClass);
  }
  get disabledClass() {
    return this.disabled;
  }
  get selectedClass() {
    return this.selected;
  }
  get focusedClass() {
    return this.focused;
  }
  ngOnInit() {
    this.subs.add(this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.renderer.setAttribute(this.element.nativeElement, "role", "button");
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngOnChanges(changes) {
    if (changes && changes["selected"]) {
      const hasAriaSelected = this.element.nativeElement.hasAttribute("aria-selected");
      if (!hasAriaSelected) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-pressed", `${this.selected}`);
      }
    }
  }
  ngAfterViewInit() {
    const chip = this.element.nativeElement;
    const stylingOptions = ["size", "rounded", "fillMode"];
    stylingOptions.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.attachElementEventHandlers(chip);
  }
  /**
   * @hidden
   */
  get kendoIconClass() {
    this.verifyIconSettings([this.iconClass, this.avatarClass]);
    return `k-i-${this.icon}`;
  }
  /**
   * @hidden
   */
  get customIconClass() {
    this.verifyIconSettings([this.icon, this.avatarClass]);
    return this.iconClass;
  }
  /**
   * @hidden
   */
  get chipAvatarClass() {
    this.verifyIconSettings([this.icon, this.iconClass]);
    return this.avatarClass;
  }
  /**
   * @hidden
   */
  get removeIconClass() {
    return this.removeIcon ? this.removeIcon : "k-i-x-circle";
  }
  /**
   * Focuses the Chip component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.focus();
    }
  }
  /**
   * Blurs the Chip component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.blur();
    }
  }
  /**
   * @hidden
   */
  onRemoveClick(e) {
    if (this.removable) {
      this.remove.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  /**
   * @hidden
   */
  onMenuClick(e) {
    if (this.hasMenu) {
      this.menuToggle.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  attachElementEventHandlers(chip) {
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chip, "focus", () => {
        this.renderer.addClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "blur", () => {
        this.renderer.removeClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "click", (e) => {
        const isActionClicked = closest2(e.target, ".k-chip-action");
        if (!isActionClicked) {
          this.ngZone.run(() => {
            this.contentClick.emit({
              sender: this,
              originalEvent: e
            });
          });
        }
      }));
      this.subs.add(this.renderer.listen(chip, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  /**
   * @hidden
   */
  verifyIconSettings(iconsToCheck) {
    if (isDevMode()) {
      if (iconsToCheck.filter((icon) => icon !== null && icon !== void 0).length > 0) {
        this.renderer.removeClass(this.element.nativeElement, "k-chip-has-icon");
        throw new Error("Invalid configuration: Having multiple icons is not supported. Only a single icon on a chip can be displayed.");
      }
    }
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor, this[input], value);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value, prevFillMode, fillMode) {
    const elem = this.element.nativeElement;
    const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
    const addFillMode = fillMode ? fillMode : this.fillMode;
    const themeColorClass = getThemeColorClasses("chip", removeFillMode, addFillMode, this.themeColor, value);
    this.renderer.removeClass(elem, themeColorClass.toRemove);
    if (addFillMode !== "none" && fillMode !== "none") {
      if (themeColorClass.toAdd) {
        this.renderer.addClass(elem, themeColorClass.toAdd);
      }
    }
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
    const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
    if (this.disabled) {
      return;
    }
    if (isEnterOrSpace) {
      this.ngZone.run(() => {
        this.contentClick.emit({
          sender: this,
          originalEvent: e
        });
      });
    } else if (isDeleteOrBackspace && this.removable) {
      this.ngZone.run(() => {
        this.remove.emit({
          sender: this,
          originalEvent: e
        });
      });
    }
  }
};
ChipComponent.ɵfac = function ChipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChipComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService));
};
ChipComponent.ɵcmp = ɵɵdefineComponent({
  type: ChipComponent,
  selectors: [["kendo-chip"]],
  hostVars: 13,
  hostBindings: function ChipComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.tabIndex)("aria-disabled", ctx.disabledClass)("dir", ctx.direction);
      ɵɵclassProp("k-chip", ctx.hostClass)("k-chip-has-icon", ctx.hasIconClass)("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass)("k-focus", ctx.focusedClass);
    }
  },
  inputs: {
    label: "label",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    avatarClass: "avatarClass",
    selected: "selected",
    removable: "removable",
    removeIcon: "removeIcon",
    removeSvgIcon: "removeSvgIcon",
    hasMenu: "hasMenu",
    menuIcon: "menuIcon",
    menuSvgIcon: "menuSvgIcon",
    disabled: "disabled",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor"
  },
  outputs: {
    remove: "remove",
    menuToggle: "menuToggle",
    contentClick: "contentClick"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.chip"
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c13,
  decls: 7,
  vars: 6,
  consts: [["size", "small", "innerCssClass", "k-chip-icon", 3, "name", "svgIcon", 4, "ngIf"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "customFontClass", 4, "ngIf"], ["class", "k-chip-avatar k-avatar k-avatar-md k-avatar-solid k-avatar-solid-primary k-rounded-full", 4, "ngIf"], [1, "k-chip-content"], ["class", "k-chip-label", 4, "ngIf"], [4, "ngIf"], ["class", "k-chip-actions", 4, "ngIf"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "name", "svgIcon"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "customFontClass"], [1, "k-chip-avatar", "k-avatar", "k-avatar-md", "k-avatar-solid", "k-avatar-solid-primary", "k-rounded-full"], [1, "k-avatar-image", 3, "ngClass"], [1, "k-chip-label"], [1, "k-chip-actions"], ["class", "k-chip-action k-chip-more-action", 3, "click", 4, "ngIf"], ["class", "k-chip-action k-chip-remove-action", 3, "click", 4, "ngIf"], [1, "k-chip-action", "k-chip-more-action", 3, "click"], ["name", "more-vertical", "size", "small", 3, "svgIcon", "customFontClass"], [1, "k-chip-action", "k-chip-remove-action", 3, "click"], ["name", "x-circle", "size", "small", 3, "svgIcon", "customFontClass"]],
  template: function ChipComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ChipComponent_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, ChipComponent_kendo_icon_wrapper_1_Template, 1, 1, "kendo-icon-wrapper", 1)(2, ChipComponent_span_2_Template, 2, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵtemplate(4, ChipComponent_span_4_Template, 2, 1, "span", 4)(5, ChipComponent_ng_content_5_Template, 1, 0, "ng-content", 5);
      ɵɵelementEnd();
      ɵɵtemplate(6, ChipComponent_span_6_Template, 3, 2, "span", 6);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.avatarClass);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.label);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.label);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasMenu || ctx.removable);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chip",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            size="small"
            innerCssClass="k-chip-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>

        <kendo-icon-wrapper
            *ngIf="iconClass"
            size="small"
            innerCssClass="k-chip-icon"
            [customFontClass]="customIconClass"></kendo-icon-wrapper>

        <span
            *ngIf="avatarClass"
            class="k-chip-avatar k-avatar k-avatar-md k-avatar-solid k-avatar-solid-primary k-rounded-full">
            <span class="k-avatar-image" [ngClass]="chipAvatarClass"></span>
        </span>

        <span class="k-chip-content">
            <span class="k-chip-label" *ngIf="label">
                {{ label }}
            </span>
            <ng-content *ngIf="!label"></ng-content>
        </span>

        <span class="k-chip-actions" *ngIf="hasMenu || removable">
            <span class="k-chip-action k-chip-more-action"
                *ngIf="hasMenu"
                (click)="onMenuClick($event)">
                <kendo-icon-wrapper
                    name="more-vertical"
                    size="small"
                    [svgIcon]="defaultMenuIcon || menuSvgIcon"
                    [customFontClass]="menuIcon"></kendo-icon-wrapper>
            </span>
            <span class="k-chip-action k-chip-remove-action"
                *ngIf="removable"
                (click)="onRemoveClick($event)">
                <kendo-icon-wrapper
                    name="x-circle"
                    size="small"
                    [svgIcon]="removeSvgIcon || defaultRemoveIcon"
                    [customFontClass]="removeIcon"></kendo-icon-wrapper>
            </span>
        </span>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chip"
      }],
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: LocalizationService
    }];
  }, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    avatarClass: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    removeSvgIcon: [{
      type: Input
    }],
    hasMenu: [{
      type: Input
    }],
    menuIcon: [{
      type: Input
    }],
    menuSvgIcon: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    remove: [{
      type: Output
    }],
    menuToggle: [{
      type: Output
    }],
    contentClick: [{
      type: Output
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip"]
    }],
    hasIconClass: [{
      type: HostBinding,
      args: ["class.k-chip-has-icon"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var ChipListComponent = class {
  constructor(localizationService, renderer, element, ngZone) {
    this.localizationService = localizationService;
    this.renderer = renderer;
    this.element = element;
    this.ngZone = ngZone;
    this.hostClass = true;
    this.orientation = "horizontal";
    this.selection = "none";
    this.selectedChange = new EventEmitter();
    this.remove = new EventEmitter();
    this.role = "listbox";
    this._size = "medium";
    this.subs = new import_rxjs5.Subscription();
    this._navigable = false;
    this.currentActiveIndex = 0;
    validatePackage(packageMetadata3);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * The size property specifies the gap between the Chips in the ChipList
   * ([see example]({% slug appearance_chiplist %}#toc-size)).
   *
   * The possible values are:
   * * `'small'`
   * * `'medium'` (default)
   * * `'large'`
   * * `none`
   */
  set size(size) {
    const sizeValue = size ? size : "medium";
    this.handleClasses(sizeValue, "size");
    this._size = sizeValue;
  }
  get size() {
    return this._size;
  }
  get single() {
    return this.selection === "single";
  }
  get multiple() {
    return this.selection === "multiple";
  }
  /**
   * @hidden
   */
  onClick($event) {
    const target = $event.target;
    const isRemoveClicked = closest2(target, ".k-chip-remove-action");
    const clickedChip = closest2(target, ".k-chip");
    const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
    this.currentActiveIndex = this.chips.toArray().indexOf(chip);
    chip && chip.focus();
    if (chip && this.navigable) {
      this.chips.forEach((c) => {
        this.renderer.setAttribute(c.element.nativeElement, "tabindex", "-1");
      });
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
    }
    if (isRemoveClicked && clickedChip) {
      const removeEventArgs = {
        sender: this,
        originalEvent: $event,
        removedChip: chip
      };
      this.remove.emit(removeEventArgs);
    }
    if (this.selection !== "none" && clickedChip && !isRemoveClicked) {
      this.setSelection(chip);
    }
  }
  /**
   * When set to `true`, keyboard navigation is available through arrow keys and roving tabindex. Otherwise, all chips
   * are part of the default tabbing sequence of the page.
   *
   * @default false
   */
  set navigable(value) {
    var _a, _b;
    this._navigable = value;
    (_a = this.chips) === null || _a === void 0 ? void 0 : _a.forEach((c) => this.renderer.setAttribute(c.element.nativeElement, "tabindex", value ? "-1" : "0"));
    ((_b = this.chips) === null || _b === void 0 ? void 0 : _b.first) && this.renderer.setAttribute(this.chips.first.element.nativeElement, "tabindex", "0");
  }
  get navigable() {
    return this._navigable;
  }
  ngOnInit() {
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr");
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.attachElementEventHandlers();
    this.updateChips();
  }
  ngAfterContentInit() {
    var _a;
    this.subs.add((_a = this.chips) === null || _a === void 0 ? void 0 : _a.changes.subscribe(() => this.updateChips()));
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subs.unsubscribe();
  }
  selectedChips() {
    return this.chips.reduce((acc, cur, idx) => {
      return cur.selected ? acc.concat(idx) : acc;
    }, []);
  }
  /**
   * Updates the selection on click of a Chip. Emits events.
   */
  setSelection(chip) {
    if (this.selection === "single") {
      this.clearSelection(chip);
    }
    chip.selected = !chip.selected;
    const chipEl = chip.element.nativeElement;
    this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
    this.selectedChange.emit(this.selectedChips());
  }
  clearSelection(chip) {
    this.chips.forEach((c) => {
      if (chip !== c) {
        c.selected = false;
        this.renderer.setAttribute(c.element.nativeElement, "aria-selected", "false");
      }
    });
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip-list", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  attachElementEventHandlers() {
    const chiplist = this.element.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chiplist, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
    const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
    const isLeftArrow = e.keyCode === Keys.ArrowLeft;
    const isRightArrow = e.keyCode === Keys.ArrowRight;
    if (isEnterOrSpace) {
      const target = e.target;
      const clickedChip = closest2(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      this.currentActiveIndex = this.chips.toArray().findIndex((chip2) => clickedChip === chip2.element.nativeElement);
      if (this.selection !== "none" && clickedChip) {
        this.ngZone.run(() => {
          this.setSelection(chip);
        });
      }
    } else if (isDeleteOrBackspace) {
      const target = e.target;
      const clickedChip = closest2(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      if (clickedChip) {
        const removeEventArgs = {
          sender: this,
          originalEvent: e,
          removedChip: chip
        };
        this.ngZone.run(() => {
          this.remove.emit(removeEventArgs);
        });
      }
    } else if (isLeftArrow) {
      this.handleArrowKeys("left");
    } else if (isRightArrow) {
      this.handleArrowKeys("right");
    }
  }
  handleArrowKeys(direction) {
    if (!this.navigable) {
      return;
    }
    const directionDelta = direction === "left" ? -1 : 1;
    this.currentActiveIndex = this.currentActiveIndex + directionDelta;
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = 0;
    } else if (this.currentActiveIndex < 0) {
      this.currentActiveIndex = this.chips.length - 1;
    }
    this.chips.forEach((chip, idx) => {
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "-1");
      if (idx === this.currentActiveIndex) {
        this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
        chip.focus();
      }
    });
  }
  updateChips() {
    this.normalizeActiveIndex();
    this.chips.forEach((chip, idx) => {
      const chipEl = chip.element.nativeElement;
      this.renderer.removeAttribute(chipEl, "aria-pressed");
      this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
      this.role === "listbox" && this.renderer.setAttribute(chipEl, "role", "option");
      if (!this.navigable) {
        return;
      }
      this.renderer.setAttribute(chipEl, "tabindex", "-1");
      if (idx === this.currentActiveIndex) {
        this.renderer.setAttribute(chipEl, "tabindex", "0");
        if (isDocumentAvailable() && document.activeElement.closest(".k-chip-list")) {
          chip.focus();
        }
      }
      if (chip.removable) {
        this.renderer.setAttribute(chipEl, "aria-keyshortcuts", "Enter Delete");
      }
    });
  }
  normalizeActiveIndex() {
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = Math.max(this.chips.length - 1, 0);
    }
  }
};
ChipListComponent.ɵfac = function ChipListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChipListComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ChipListComponent.ɵcmp = ɵɵdefineComponent({
  type: ChipListComponent,
  selectors: [["kendo-chiplist"], ["kendo-chip-list"]],
  contentQueries: function ChipListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ChipComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.chips = _t);
    }
  },
  hostVars: 10,
  hostBindings: function ChipListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ChipListComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-orientation", ctx.orientation)("dir", ctx.direction)("aria-multiselectable", ctx.multiple)("role", ctx.role);
      ɵɵclassProp("k-chip-list", ctx.hostClass)("k-selection-single", ctx.single)("k-selection-multiple", ctx.multiple);
    }
  },
  inputs: {
    selection: "selection",
    size: "size",
    role: "role",
    navigable: "navigable"
  },
  outputs: {
    selectedChange: "selectedChange",
    remove: "remove"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.chiplist"
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c13,
  decls: 1,
  vars: 0,
  template: function ChipListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chiplist, kendo-chip-list",
      template: `
        <ng-content></ng-content>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chiplist"
      }],
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip-list"]
    }],
    orientation: [{
      type: HostBinding,
      args: ["attr.aria-orientation"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    selection: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    chips: [{
      type: ContentChildren,
      args: [ChipComponent]
    }],
    single: [{
      type: HostBinding,
      args: ["class.k-selection-single"]
    }],
    multiple: [{
      type: HostBinding,
      args: ["attr.aria-multiselectable"]
    }, {
      type: HostBinding,
      args: ["class.k-selection-multiple"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    navigable: [{
      type: Input
    }]
  });
})();
var ButtonItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ButtonItemTemplateDirective.ɵfac = function ButtonItemTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
ButtonItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ButtonItemTemplateDirective,
  selectors: [["", "kendoDropDownButtonItemTemplate", ""], ["", "kendoSplitButtonItemTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var KeyEvents;
(function(KeyEvents2) {
  KeyEvents2[KeyEvents2["keydown"] = 0] = "keydown";
  KeyEvents2[KeyEvents2["keypress"] = 1] = "keypress";
  KeyEvents2[KeyEvents2["keyup"] = 2] = "keyup";
})(KeyEvents || (KeyEvents = {}));
var NavigationAction;
(function(NavigationAction2) {
  NavigationAction2[NavigationAction2["Undefined"] = 0] = "Undefined";
  NavigationAction2[NavigationAction2["Open"] = 1] = "Open";
  NavigationAction2[NavigationAction2["Close"] = 2] = "Close";
  NavigationAction2[NavigationAction2["Enter"] = 3] = "Enter";
  NavigationAction2[NavigationAction2["EnterPress"] = 4] = "EnterPress";
  NavigationAction2[NavigationAction2["EnterUp"] = 5] = "EnterUp";
  NavigationAction2[NavigationAction2["Tab"] = 6] = "Tab";
  NavigationAction2[NavigationAction2["Esc"] = 7] = "Esc";
  NavigationAction2[NavigationAction2["Navigate"] = 8] = "Navigate";
})(NavigationAction || (NavigationAction = {}));
var FocusService = class {
  constructor() {
    this.onFocus = new EventEmitter();
  }
  isFocused(index) {
    return index === this.focused;
  }
  focus(index) {
    if (this.isFocused(index)) {
      return;
    }
    this.focused = index;
    this.onFocus.emit(index);
  }
  resetFocus() {
    this.focused = -1;
  }
  get focused() {
    return this.focusedIndex;
  }
  set focused(index) {
    this.focusedIndex = index;
    this.onFocus.emit(index);
  }
};
FocusService.ɵfac = function FocusService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FocusService)();
};
FocusService.ɵprov = ɵɵdefineInjectable({
  token: FocusService,
  factory: FocusService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusService, [{
    type: Injectable
  }], null, null);
})();
var NAVIGATION_CONFIG = new InjectionToken("navigation.config");
var NavigationService = class {
  constructor(config) {
    this.navigate = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.enter = new EventEmitter();
    this.enterpress = new EventEmitter();
    this.enterup = new EventEmitter();
    this.tab = new EventEmitter();
    this.esc = new EventEmitter();
    this.useLeftRightArrows = config.useLeftRightArrows;
  }
  process(args) {
    const keyCode = args.keyCode;
    const keyEvent = args.keyEvent;
    let index;
    let action = NavigationAction.Undefined;
    if (keyEvent === KeyEvents.keyup) {
      if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.EnterUp;
      }
    } else {
      if (args.altKey && keyCode === Keys.ArrowDown) {
        action = NavigationAction.Open;
      } else if (args.altKey && keyCode === Keys.ArrowUp) {
        action = NavigationAction.Close;
      } else if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.Enter;
      } else if (keyCode === Keys.Escape) {
        action = NavigationAction.Esc;
      } else if (keyCode === Keys.Tab) {
        action = NavigationAction.Tab;
      } else if (keyCode === Keys.ArrowUp || this.useLeftRightArrows && keyCode === Keys.ArrowLeft) {
        const step = args.flipNavigation ? 1 : -1;
        const start = args.flipNavigation ? args.min : args.max;
        const end = args.flipNavigation ? args.max : args.min;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.ArrowDown || this.useLeftRightArrows && keyCode === Keys.ArrowRight) {
        const step = args.flipNavigation ? -1 : 1;
        const start = args.flipNavigation ? args.max : args.min;
        const end = args.flipNavigation ? args.min : args.max;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.Home) {
        index = args.min;
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.End) {
        index = args.max;
        action = NavigationAction.Navigate;
      }
    }
    if (action !== NavigationAction.Undefined) {
      this[NavigationAction[action].toLowerCase()].emit({
        index,
        target: args.target,
        esc: action === NavigationAction.Esc
      });
    }
    return action;
  }
  isEnterOrSpace(keyCode) {
    return keyCode === Keys.Enter || keyCode === Keys.Space;
  }
  next(args) {
    if (!isPresent3(args.current)) {
      return args.start;
    } else {
      return args.current !== args.end ? args.current + args.step : args.end;
    }
  }
};
NavigationService.ɵfac = function NavigationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NavigationService)(ɵɵinject(NAVIGATION_CONFIG));
};
NavigationService.ɵprov = ɵɵdefineInjectable({
  token: NavigationService,
  factory: NavigationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NAVIGATION_CONFIG]
      }]
    }];
  }, null);
})();
var PopupContainerService = class {
};
PopupContainerService.ɵfac = function PopupContainerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PopupContainerService)();
};
PopupContainerService.ɵprov = ɵɵdefineInjectable({
  token: PopupContainerService,
  factory: PopupContainerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupContainerService, [{
    type: Injectable
  }], null, null);
})();
var ListButton = class extends MultiTabStop {
  constructor(focusService, navigationService, wrapperRef, _zone, popupService, elRef, localization, cdr, containerService) {
    super();
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapperRef = wrapperRef;
    this._zone = _zone;
    this.popupService = popupService;
    this.elRef = elRef;
    this.cdr = cdr;
    this.containerService = containerService;
    this._open = false;
    this._disabled = false;
    this._active = false;
    this._popupSettings = {
      animate: true,
      popupClass: ""
    };
    this.listId = guid();
    this._isFocused = false;
    this.subs = new import_rxjs5.Subscription();
    this.popupSubs = new import_rxjs5.Subscription();
    this.tabIndex = 0;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.escape = new EventEmitter();
    this.isClosePrevented = false;
    validatePackage(packageMetadata3);
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapper = wrapperRef.nativeElement;
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.subscribeEvents();
  }
  /**
   * Sets the disabled state of the DropDownButton.
   */
  set disabled(value) {
    if (value && this.openState) {
      this.openState = false;
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.containerService.container : appendTo;
  }
  /**
   * Configures the popup of the DropDownButton.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true,
      popupClass: ""
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * @hidden
   */
  get anchorAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  ngOnChanges(changes) {
    if (isChanged("popupSettings", changes) && isPresent3(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  get popupClasses() {
    const popupClasses = ["k-menu-popup"];
    if (this._popupSettings.popupClass) {
      popupClasses.push(this._popupSettings.popupClass);
    }
    return popupClasses.join(" ");
  }
  get openState() {
    return this._open;
  }
  /**
   * @hidden
   */
  set openState(open) {
    if (this.disabled) {
      return;
    }
    this._open = open;
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this._open;
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (this._disabled) {
      return;
    }
    this._toggle(!this.openState, true);
    if (!this.isClosePrevented) {
      this.focusService.focus(this.openState ? 0 : -1);
    }
  }
  /**
   * @hidden
   */
  onItemClick(index) {
    this.emitItemClickHandler(index);
    this.togglePopupVisibility();
    if (isDocumentAvailable() && !this.isClosePrevented) {
      this.focusButton();
    }
  }
  ngOnDestroy() {
    this.openState = false;
    this.subs.unsubscribe();
    this.destroyPopup();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subscribeListItemFocusEvent();
    this.subscribeComponentBlurredEvent();
    this.subscribeNavigationEvents();
  }
  subscribeListItemFocusEvent() {
    this.subs.add(this.focusService.onFocus.subscribe(() => {
      this._isFocused = true;
    }));
  }
  subscribeComponentBlurredEvent() {
    this._zone.runOutsideAngular(() => {
      this.subs.add(this.navigationService.tab.pipe((0, import_operators5.filter)(() => this._isFocused), (0, import_operators5.tap)(() => this.focusButton())).subscribe(this.handleTab.bind(this)));
      this.subs.add((0, import_rxjs5.fromEvent)(document, "click").pipe((0, import_operators5.filter)((event) => !this.wrapperContains(event.target)), (0, import_operators5.filter)(() => this._isFocused)).subscribe(() => this._zone.run(() => this.blurWrapper())));
    });
  }
  subscribeNavigationEvents() {
    this.subs.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subs.add(this.navigationService.enterup.subscribe(this.onNavigationEnterUp.bind(this)));
    this.subs.add(this.navigationService.open.subscribe(this.onNavigationOpen.bind(this)));
    this.subs.add((0, import_rxjs5.merge)(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  /**
   * Toggles the visibility of the popup.
   * If the `toggle` method is used to open or close the popup, the `open` and `close` events will not be fired.
   *
   * @param open - The state of the popup.
   */
  toggle(open) {
    if (this.disabled) {
      return;
    }
    const value = open === void 0 ? !this.openState : open;
    this._toggle(value, false);
  }
  /**
   * @hidden
   */
  keyDownHandler(event, isHost) {
    this.keyHandler(event, null, isHost);
  }
  /**
   * @hidden
   */
  keyUpHandler(event) {
    this.keyHandler(event, KeyEvents.keyup);
  }
  /**
   * @hidden
   */
  keyHandler(event, keyEvent, isHost) {
    if (this._disabled) {
      return;
    }
    const eventData = event;
    if (!isHost) {
      eventData.stopImmediatePropagation();
    }
    const focused = this.focusService.focused || 0;
    const action = this.navigationService.process({
      altKey: eventData.altKey,
      current: focused,
      keyCode: eventData.keyCode,
      keyEvent,
      max: this._data ? this._data.length - 1 : 0,
      min: 0,
      target: event.target
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab && (action !== NavigationAction.Enter || action === NavigationAction.Enter && this.openState)) {
      if (!(event.keyCode === Keys.Space && action === NavigationAction.EnterUp)) {
        eventData.preventDefault();
      }
    }
  }
  emitItemClickHandler(index) {
    const dataItem = this._data[index];
    if (this._itemClick && !dataItem.disabled) {
      this._itemClick.emit(dataItem);
    }
    if (dataItem && dataItem.click && !dataItem.disabled) {
      dataItem.click(dataItem);
    }
    this.focusService.focus(index);
  }
  focusWrapper() {
    if (this.openState) {
      this.togglePopupVisibility();
      this.focusButton();
    }
  }
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  blurWrapper(emit = true) {
    if (!this._isFocused) {
      return;
    }
    if (this.openState) {
      this.togglePopupVisibility();
    }
    this._isFocused = false;
    if (emit) {
      this._blur.emit();
      this.cdr.markForCheck();
    }
  }
  focusButton() {
    if (this.button) {
      this.button.nativeElement.focus();
    }
  }
  handleTab() {
    this.blurWrapper();
  }
  onNavigationEnterUp(e) {
    if (!this._disabled && !this.openState) {
      this._active = false;
    }
    if (this.openState) {
      const focused = this.focusService.focused;
      if (isPresent3(focused) && focused !== -1) {
        this.emitItemClickHandler(focused);
      }
    }
    this.togglePopupVisibility();
    if (!this.openState && isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  onNavigationOpen() {
    if (!this._disabled && !this.openState) {
      this.togglePopupVisibility();
    }
  }
  onNavigationClose(e) {
    if (this.openState && !this.isClosePrevented) {
      this.togglePopupVisibility();
      if (isDocumentAvailable()) {
        (e === null || e === void 0 ? void 0 : e.esc) && hasObservers(this.escape) && this.escape.emit();
        this.button.nativeElement.focus();
      }
    }
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  _toggle(open, emitEvent) {
    if (this.openState === open) {
      return;
    }
    const eventArgs = new PreventableEvent2();
    if (emitEvent) {
      if (open && !this.openState) {
        this.open.emit(eventArgs);
      } else if (!open && this.openState) {
        this.close.emit(eventArgs);
      }
      if (eventArgs.isDefaultPrevented()) {
        this.isClosePrevented = true;
        return;
      }
    }
    this.openState = open;
    this.destroyPopup();
    if (this.openState) {
      this.createPopup();
    }
  }
  createPopup() {
    this.popupRef = this.popupService.open({
      anchor: this.elRef,
      anchorAlign: this.anchorAlign,
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      content: this.containerService.template,
      popupAlign: this.popupAlign,
      popupClass: this.popupClasses
    });
    this.popupSubs = this.popupRef.popupAnchorViewportLeave.subscribe(() => {
      this.togglePopupVisibility();
    });
  }
  destroyPopup() {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
      this.popupSubs.unsubscribe();
      this.isClosePrevented = false;
    }
  }
};
ListButton.ɵfac = function ListButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListButton)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupContainerService));
};
ListButton.ɵcmp = ɵɵdefineComponent({
  type: ListButton,
  selectors: [["ng-component"]],
  inputs: {
    disabled: "disabled",
    tabIndex: "tabIndex",
    buttonClass: "buttonClass",
    popupSettings: "popupSettings"
  },
  outputs: {
    open: "open",
    close: "close",
    escape: "escape"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 0,
  vars: 0,
  template: function ListButton_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListButton, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PopupContainerService
    }];
  }, {
    disabled: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    popupSettings: [{
      type: Input
    }]
  });
})();
var FocusableDirective = class {
  constructor(focusService, elementRef, renderer) {
    this.focusService = focusService;
    this.renderer = renderer;
    this.subs = new import_rxjs5.Subscription();
    this.element = elementRef.nativeElement;
    this.subscribeEvents();
  }
  ngOnInit() {
    if (this.index === this.focusService.focused) {
      this.renderer.addClass(this.element, "k-focus");
    } else {
      this.renderer.removeClass(this.element, "k-focus");
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subs.add(this.focusService.onFocus.subscribe((index) => {
      if (this.index === index) {
        this.renderer.addClass(this.element, "k-focus");
        this.renderer.setAttribute(this.element, "tabindex", "0");
        this.element.focus();
      } else {
        this.renderer.setAttribute(this.element, "tabindex", "-1");
        this.renderer.removeClass(this.element, "k-focus");
      }
    }));
  }
};
FocusableDirective.ɵfac = function FocusableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FocusableDirective)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
FocusableDirective.ɵdir = ɵɵdefineDirective({
  type: FocusableDirective,
  selectors: [["", "kendoButtonFocusable", ""]],
  inputs: {
    index: "index"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoButtonFocusable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    index: [{
      type: Input
    }]
  });
})();
var ListComponent = class {
  constructor() {
    this.onItemClick = new EventEmitter();
    this.onItemBlur = new EventEmitter();
    this.sizeClass = "";
    validatePackage(packageMetadata3);
  }
  set size(size) {
    if (size) {
      this.sizeClass = `k-menu-group-${SIZES[size]}`;
    } else {
      this.sizeClass = "";
    }
  }
  getText(dataItem) {
    if (dataItem) {
      return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
    }
    return void 0;
  }
  getIconClasses(dataItem) {
    const icon = dataItem.icon ? "k-icon k-i-" + dataItem.icon : void 0;
    const classes = {};
    classes[icon || dataItem.iconClass] = true;
    return classes;
  }
  onClick(index) {
    this.onItemClick.emit(index);
  }
  onBlur() {
    this.onItemBlur.emit();
  }
};
ListComponent.ɵfac = function ListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListComponent)();
};
ListComponent.ɵcmp = ɵɵdefineComponent({
  type: ListComponent,
  selectors: [["kendo-button-list"]],
  inputs: {
    data: "data",
    textField: "textField",
    itemTemplate: "itemTemplate",
    size: "size"
  },
  outputs: {
    onItemClick: "onItemClick",
    onItemBlur: "onItemBlur"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["role", "list", 1, "k-group", "k-menu-group", "k-reset", 3, "ngClass"], ["kendoButtonFocusable", "", "tabindex", "-1", "class", "k-item k-menu-item", "role", "listitem", 3, "index", "click", "blur", 4, "ngFor", "ngForOf"], ["kendoButtonFocusable", "", "tabindex", "-1", "role", "listitem", 1, "k-item", "k-menu-item", 3, "click", "blur", "index"], [3, "ngIf"], [1, "k-link", "k-menu-link", 3, "ngClass"], [3, "templateContext"], [3, "name", "svgIcon", "customFontClass", 4, "ngIf"], ["class", "k-image", 3, "src", "alt", 4, "ngIf"], ["class", "k-menu-link-text", 4, "ngIf"], [3, "name", "svgIcon", "customFontClass"], [1, "k-image", 3, "src", "alt"], [1, "k-menu-link-text"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ul", 0);
      ɵɵtemplate(1, ListComponent_li_1_Template, 3, 4, "li", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.sizeClass);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.data);
    }
  },
  dependencies: [NgClass, NgForOf, FocusableDirective, NgIf, TemplateContextDirective, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-button-list",
      template: `
        <ul class="k-group k-menu-group k-reset" role="list" [ngClass]="sizeClass">
            <li kendoButtonFocusable
                *ngFor="let dataItem of data; let index = index;"
                [index]="index"
                tabindex="-1"
                class="k-item k-menu-item"
                role="listitem"
                [attr.aria-disabled]="dataItem.disabled ? true : false"
                (click)="$event.stopImmediatePropagation(); onClick(index);"
                (blur)="onBlur()">
                <ng-template [ngIf]="itemTemplate?.templateRef">
                    <span
                        class="k-link k-menu-link"
                        [class.k-disabled]="dataItem.disabled"
                        [ngClass]="dataItem.cssClass">
                        <ng-template
                            [templateContext]="{ templateRef: itemTemplate?.templateRef, $implicit: dataItem }"
                        ></ng-template>
                    </span>
                </ng-template>
                <ng-template [ngIf]="!itemTemplate?.templateRef">
                    <span
                        class="k-link k-menu-link"
                        [class.k-disabled]="dataItem.disabled"
                        [ngClass]="dataItem.cssClass">
                        <kendo-icon-wrapper
                            *ngIf="dataItem.icon || dataItem.iconClass || dataItem.svgIcon"
                            [name]="dataItem.icon"
                            [svgIcon]="dataItem.svgIcon"
                            [customFontClass]="dataItem.iconClass"
                        ></kendo-icon-wrapper>
                        <img
                            *ngIf="dataItem.imageUrl"
                            class="k-image"
                            [src]="dataItem.imageUrl"
                            [alt]="dataItem.imageAlt"
                        >
                        <span *ngIf="getText(dataItem)" class="k-menu-link-text">
                            {{ getText(dataItem) }}
                        </span>
                    </span>
                </ng-template>
            </li>
        </ul>
    `,
      standalone: true,
      imports: [NgClass, NgForOf, FocusableDirective, NgIf, TemplateContextDirective, IconWrapperComponent]
    }]
  }], function() {
    return [];
  }, {
    data: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    onItemBlur: [{
      type: Output
    }],
    size: [{
      type: Input
    }]
  });
})();
var NAVIGATION_SETTINGS$2 = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER$2 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$2
};
var DEFAULT_FILL_MODE$1 = "solid";
var DropDownButtonComponent = class extends ListButton {
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService, renderer) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.containerService = containerService;
    this.renderer = renderer;
    this.arrowIcon = false;
    this.icon = "";
    this.iconClass = "";
    this.imageUrl = "";
    this.size = "medium";
    this.rounded = "medium";
    this.themeColor = "base";
    this.itemClick = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.listId = guid();
    this.buttonId = guid();
    this._fillMode = DEFAULT_FILL_MODE$1;
    this._buttonAttributes = null;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
  }
  /**
   * Sets or gets the data of the DropDownButton.
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    return this._data;
  }
  /**
   * The fillMode property specifies the background and border styles of the DropDownButton
   * ([see example]({% slug api_buttons_dropdownbuttoncomponent %}#toc-fillMode)).
   *
   * The available values are:
   * * `solid` (default)
   * * `flat`
   * * `outline`
   * * `link`
   * * `none`
   */
  set fillMode(fillMode) {
    this._fillMode = fillMode === "clear" ? "flat" : fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets attributes to the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes ? buttonAttributes : null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  get focused() {
    return this._isFocused && !this._disabled;
  }
  get widgetClasses() {
    return true;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    if (event.keyCode === Keys.Space || event.keyCode === Keys.Enter) {
      this._active = true;
    }
    if (event.keyCode === Keys.Enter) {
      event.preventDefault();
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this.keyUpHandler(event);
    this._active = false;
  }
  /**
   * @hidden
   */
  mousedown(event) {
    if (this._disabled) {
      event.preventDefault();
    }
    this._active = true;
  }
  /**
   * @hidden
   */
  mouseup(event) {
    if (this._disabled) {
      event.preventDefault();
    }
    this._active = false;
  }
  /**
   * @hidden
   */
  openPopup() {
    this._isFocused = true;
    this.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.openState) {
      this.blurWrapper();
    }
  }
  /**
   * Focuses the DropDownButton component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the DropDownButton component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  ngAfterViewInit() {
    this.containerService.container = this.container;
    this.containerService.template = this.popupTemplate;
    this.handleButtonAttributes(this.buttonAttributes);
  }
  /**
   * @hidden
   */
  handleFocus(event) {
    if (!this._disabled) {
      !this._isFocused && this.onFocus.emit();
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest2(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element) || this.popupRef && this.popupRef.popupElement.contains(element);
  }
  handleButtonAttributes(newButtonAttributes) {
    var _a;
    const mainButton = (_a = this.button) === null || _a === void 0 ? void 0 : _a.nativeElement;
    if (isPresent(this.buttonAttributes) && isPresent(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent(newButtonAttributes) && isPresent(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
};
DropDownButtonComponent.ɵfac = function DropDownButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownButtonComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupContainerService), ɵɵdirectiveInject(Renderer2));
};
DropDownButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: DropDownButtonComponent,
  selectors: [["kendo-dropdownbutton"]],
  contentQueries: function DropDownButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ButtonItemTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    }
  },
  viewQuery: function DropDownButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5, ElementRef);
      ɵɵviewQuery(_c6, 5);
      ɵɵviewQuery(_c7, 5);
      ɵɵviewQuery(_c8, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  hostVars: 5,
  hostBindings: function DropDownButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function DropDownButtonComponent_keydown_HostBindingHandler($event) {
        return ctx.keydown($event);
      })("keyup", function DropDownButtonComponent_keyup_HostBindingHandler($event) {
        return ctx.keyup($event);
      })("mousedown", function DropDownButtonComponent_mousedown_HostBindingHandler($event) {
        return ctx.mousedown($event);
      })("mouseup", function DropDownButtonComponent_mouseup_HostBindingHandler($event) {
        return ctx.mouseup($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-focus", ctx.focused)("k-dropdown-button", ctx.widgetClasses);
    }
  },
  inputs: {
    arrowIcon: "arrowIcon",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    imageUrl: "imageUrl",
    textField: "textField",
    data: "data",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor",
    buttonAttributes: "buttonAttributes"
  },
  outputs: {
    itemClick: "itemClick",
    onFocus: "focus",
    onBlur: "blur"
  },
  exportAs: ["kendoDropDownButton"],
  standalone: true,
  features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.dropdownbutton"
  }, PopupContainerService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c13,
  decls: 7,
  vars: 18,
  consts: [["button", ""], ["popupTemplate", ""], ["container", ""], ["buttonList", ""], ["kendoButton", "", "type", "button", 3, "click", "focus", "blur", "id", "tabindex", "disabled", "icon", "svgIcon", "arrowIcon", "iconClass", "imageUrl", "ngClass", "size", "rounded", "fillMode", "themeColor"], [3, "onItemClick", "keydown", "keyup", "id", "data", "textField", "itemTemplate", "size"]],
  template: function DropDownButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 4, 0);
      ɵɵlistener("click", function DropDownButtonComponent_Template_button_click_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.openPopup());
      })("focus", function DropDownButtonComponent_Template_button_focus_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus($event));
      })("blur", function DropDownButtonComponent_Template_button_blur_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onButtonBlur());
      });
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, DropDownButtonComponent_ng_template_3_Template, 2, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(5, null, 2);
    }
    if (rf & 2) {
      ɵɵclassProp("k-active", ctx.active);
      ɵɵproperty("id", ctx.buttonId)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("arrowIcon", ctx.arrowIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.fillMode ? ctx.themeColor : null);
      ɵɵattribute("aria-disabled", ctx.disabled)("aria-expanded", ctx.openState)("aria-controls", ctx.listId);
    }
  },
  dependencies: [ButtonComponent, NgClass, ListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoDropDownButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.dropdownbutton"
      }, PopupContainerService],
      selector: "kendo-dropdownbutton",
      template: `
        <button kendoButton #button
            type="button"
            [id]="buttonId"
            [tabindex]="componentTabIndex"
            [class.k-active]="active"
            [disabled]="disabled"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [arrowIcon]="arrowIcon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="fillMode ? themeColor : null"
            (click)="openPopup()"
            (focus)="handleFocus($event)"
            (blur)="onButtonBlur()"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-controls]="listId"
        >
            <ng-content></ng-content>
        </button>
        <ng-template #popupTemplate>
            <kendo-button-list
                #buttonList
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [attr.aria-labelledby]="buttonId"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `,
      standalone: true,
      imports: [ButtonComponent, NgClass, ListComponent]
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PopupContainerService
    }, {
      type: Renderer2
    }];
  }, {
    arrowIcon: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    focused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-dropdown-button"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        read: ElementRef
      }]
    }],
    buttonList: [{
      type: ViewChild,
      args: ["buttonList"]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate"]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef
      }]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    mousedown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    mouseup: [{
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }]
  });
})();
function getAnchorAlign(fabAlign, rtl) {
  const align2 = {
    horizontal: rtl ? "right" : "left",
    vertical: "bottom"
  };
  if (fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align2.vertical = "top";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
    align2.vertical = "top";
  }
  return align2;
}
function getPopupAlign(fabAlign, rtl) {
  const align2 = {
    horizontal: rtl ? "right" : "left",
    vertical: "top"
  };
  if (fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align2.vertical = "bottom";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
    align2.vertical = "bottom";
  }
  return align2;
}
function openAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }), stagger(gap, [animate(`${duration}ms ease-in`, style({
    opacity: "*",
    transform: "translateY(0)"
  }))])], {
    optional: true
  })]);
}
function closeAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: "*",
    transform: "translateY(0)"
  }), stagger(-gap, [animate(`${duration}ms ease-in`, style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }))])], {
    optional: true
  })]);
}
var DialItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
DialItemTemplateDirective.ɵfac = function DialItemTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
DialItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: DialItemTemplateDirective,
  selectors: [["", "kendoDialItemTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDialItemTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var FloatingActionButtonTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
FloatingActionButtonTemplateDirective.ɵfac = function FloatingActionButtonTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FloatingActionButtonTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
FloatingActionButtonTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: FloatingActionButtonTemplateDirective,
  selectors: [["", "kendoFloatingActionButtonTemplate", ""]],
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoFloatingActionButtonTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var DialItemComponent = class {
  constructor(element, renderer, localisationService) {
    this.element = element;
    this.renderer = renderer;
    this.localisationService = localisationService;
    this.hostClass = true;
    this.role = "menuitem";
  }
  get disabledClass() {
    return this.item.disabled;
  }
  get title() {
    const label = this.item.label;
    return label || this.itemTitle;
  }
  get indexAttr() {
    return this.index;
  }
  get iconClasses() {
    const classes = [];
    if (this.item.iconClass) {
      classes.push(`${this.item.iconClass}`);
    }
    if (this.item.icon) {
      classes.push(`k-fab-item-icon k-icon k-i-${this.item.icon}`);
    }
    return classes;
  }
  get itemTitle() {
    const icon = this.item.icon;
    const itemTitle = this.item.itemTitle;
    return icon && itemTitle ? itemTitle : icon;
  }
  ngAfterViewInit() {
    const element = this.element.nativeElement;
    const rtl = this.localisationService.rtl;
    const hAlign = this.align.horizontal;
    this.renderer.addClass(element, this.getTextDirectionClass(rtl, hAlign));
  }
  getTextDirectionClass(rtl, hAlign) {
    const dir = rtl ? "rtl" : "ltr";
    const align2 = hAlign === "end" ? "end" : "start";
    const directions = {
      rtl: {
        end: "k-text-left",
        start: "k-text-right"
      },
      ltr: {
        start: "k-text-left",
        end: "k-text-right"
      }
    };
    return directions[dir][align2];
  }
};
DialItemComponent.ɵfac = function DialItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
};
DialItemComponent.ɵcmp = ɵɵdefineComponent({
  type: DialItemComponent,
  selectors: [["", "kendoDialItem", ""]],
  hostVars: 9,
  hostBindings: function DialItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("aria-disabled", ctx.disabledClass)("title", ctx.title)("aria-label", ctx.title)("data-fab-item-index", ctx.indexAttr);
      ɵɵclassProp("k-fab-item", ctx.hostClass)("k-disabled", ctx.disabledClass);
    }
  },
  inputs: {
    cssClass: "cssClass",
    cssStyle: "cssStyle",
    isFocused: "isFocused",
    index: "index",
    item: "item",
    dialItemTemplate: "dialItemTemplate",
    align: "align"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c9,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "k-fab-item-text", 4, "ngIf"], ["innerCssClass", "k-fab-item-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], [1, "k-fab-item-text"], ["innerCssClass", "k-fab-item-icon", 3, "name", "customFontClass", "svgIcon"]],
  template: function DialItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DialItemComponent_0_Template, 1, 6, null, 0)(1, DialItemComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.dialItemTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.dialItemTemplate);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDialItem]",
      template: `
        <ng-template *ngIf="dialItemTemplate"
            [ngTemplateOutlet]="dialItemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item, index: index, isFocused: isFocused }"
        >
        </ng-template>

        <ng-container *ngIf="!dialItemTemplate">
            <span *ngIf="item.label" class="k-fab-item-text">{{ item.label }}</span>
            <kendo-icon-wrapper
                *ngIf="item.icon || item.iconClass || item.svgIcon"
                [name]="item.icon"
                innerCssClass="k-fab-item-icon"
                [customFontClass]="item.iconClass"
                [svgIcon]="item.svgIcon"></kendo-icon-wrapper>
        </ng-container>
    `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, IconWrapperComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-fab-item"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    title: [{
      type: HostBinding,
      args: ["attr.title"]
    }, {
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    indexAttr: [{
      type: HostBinding,
      args: ["attr.data-fab-item-index"]
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    isFocused: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var DialListComponent = class {
  constructor(focusService, cdr) {
    this.focusService = focusService;
    this.cdr = cdr;
    this.hostClass = true;
    this.subscriptions = new import_rxjs5.Subscription();
    this.subscriptions.add(this.focusService.onFocus.subscribe(() => this.cdr.detectChanges()));
  }
  get bottomClass() {
    return this.align.vertical === "top" || this.align.vertical === "middle";
  }
  get topClass() {
    return this.align.vertical === "bottom";
  }
  isFocused(index) {
    return this.focusService.isFocused(index);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
DialListComponent.ɵfac = function DialListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DialListComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(ChangeDetectorRef));
};
DialListComponent.ɵcmp = ɵɵdefineComponent({
  type: DialListComponent,
  selectors: [["", "kendoDialList", ""]],
  hostVars: 6,
  hostBindings: function DialListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-fab-items", ctx.hostClass)("k-fab-items-bottom", ctx.bottomClass)("k-fab-items-top", ctx.topClass);
    }
  },
  inputs: {
    dialItems: "dialItems",
    dialItemTemplate: "dialItemTemplate",
    align: "align"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c11,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["kendoButtonFocusable", "", "kendoDialItem", "", 3, "item", "index", "dialItemTemplate", "isFocused", "ngClass", "ngStyle", "align"]],
  template: function DialListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DialListComponent_ng_container_0_Template, 2, 7, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.dialItems);
    }
  },
  dependencies: [NgForOf, FocusableDirective, DialItemComponent, NgClass, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDialList]",
      template: `
        <ng-container *ngFor='let item of dialItems; let idx = index'>
            <li
                kendoButtonFocusable
                kendoDialItem
                [item]="dialItems[idx]"
                [index]="idx"
                [dialItemTemplate]="dialItemTemplate"
                [isFocused]="isFocused(idx)"
                [ngClass]='item.cssClass'
                [ngStyle]='item.cssStyle'
                [align]="align"
            >
            </li>
        </ng-container>
    `,
      standalone: true,
      imports: [NgForOf, FocusableDirective, DialItemComponent, NgClass, NgStyle]
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-fab-items"]
    }],
    bottomClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-bottom"]
    }],
    topClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-top"]
    }],
    dialItems: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var NAVIGATION_SETTINGS$1 = {
  useLeftRightArrows: false
};
var NAVIGATION_SETTINGS_PROVIDER$1 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$1
};
var SIZE_CLASSES = {
  small: "k-fab-sm",
  medium: "k-fab-md",
  large: "k-fab-lg"
};
var ROUNDED_CLASSES = {
  small: "k-rounded-sm",
  medium: "k-rounded-md",
  large: "k-rounded-lg",
  full: "k-rounded-full"
};
var FILLMODE_CLASS = "k-fab-solid";
var DEFAULT_DURATION2 = 180;
var DEFAULT_ITEM_GAP = 90;
var DEFAULT_OFFSET2 = "16px";
var DEFAULT_ROUNDED$1 = "full";
var DEFAULT_SIZE = "medium";
var DEFAULT_THEME_COLOR = "primary";
var FloatingActionButtonComponent = class {
  constructor(renderer, element, focusService, navigationService, ngZone, popupService, builder, localizationService) {
    this.renderer = renderer;
    this.element = element;
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.ngZone = ngZone;
    this.popupService = popupService;
    this.builder = builder;
    this.localizationService = localizationService;
    this.positionMode = "fixed";
    this.dialItemAnimation = true;
    this.tabIndex = 0;
    this.dialItems = [];
    this.onBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.dialItemClick = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.id = `k-${guid()}`;
    this.dialListId = `k-dial-list-${guid()}`;
    this._themeColor = DEFAULT_THEME_COLOR;
    this._size = DEFAULT_SIZE;
    this._rounded = DEFAULT_ROUNDED$1;
    this._disabled = false;
    this._align = {
      horizontal: "end",
      vertical: "bottom"
    };
    this._offset = {
      x: DEFAULT_OFFSET2,
      y: DEFAULT_OFFSET2
    };
    this.subscriptions = new import_rxjs5.Subscription();
    this.rtl = false;
    this.animationEnd = new EventEmitter();
    this.initialSetup = true;
    this.focusChangedProgrammatically = false;
    validatePackage(packageMetadata3);
    this.subscribeNavigationEvents();
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    }));
  }
  get fixedClass() {
    return this.positionMode === "fixed";
  }
  get absoluteClass() {
    return this.positionMode === "absolute";
  }
  /**
   * Specifies the theme color of the FloatingActionButton
   * ([see example](slug:appearance_floatingactionbutton#toc-theme-colors)).
   * The theme color will be applied as background color of the component.
   *
   * The possible values are:
   * * `primary` (Default)&mdash;Applies coloring based on the `primary` theme color.
   * * `secondary`&mdash;Applies coloring based on the `secondary` theme color.
   * * `tertiary`&mdash; Applies coloring based on the `tertiary` theme color.
   * * `info`&mdash;Applies coloring based on the `info` theme color.
   * * `success`&mdash; Applies coloring based on the `success` theme color.
   * * `warning`&mdash; Applies coloring based on the `warning` theme color.
   * * `error`&mdash; Applies coloring based on the `error` theme color.
   * * `dark`&mdash; Applies coloring based on the `dark` theme color.
   * * `light`&mdash; Applies coloring based on the `light` theme color.
   * * `inverse`&mdash; Applies coloring based on the `inverse` theme color.
   * * `none`&mdash; Removes the built in theme color.
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR;
    this.handleClasses(newThemeColor, "themeColor");
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the FloatingActionButton
   * ([see example]({% slug appearance_floatingactionbutton %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (Default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the FloatingActionButton.
   *
   * The possible values are:
   * * `small`
   * * `medium`
   * * `large`
   * * `full` (default)
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$1;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies whether the FloatingActionButton is disabled.
   */
  set disabled(disabled) {
    this._disabled = disabled;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Specifies the horizontal and vertical alignment of the FloatingActionButton
   * ([see example](slug:positioning_floatingactionbutton#toc-alignment)).
   *
   * The possible values are:
   * * `{ horizontal: 'start'|'center'|'end', vertical: 'top'|'middle'|'bottom' }`
   *
   * The default value is:
   * * `{ horizontal: 'end', vertical: 'bottom' }`
   *
   */
  set align(align2) {
    this._align = Object.assign(this._align, align2);
  }
  get align() {
    return this._align;
  }
  /**
   * Specifies the horizontal and vertical offset position of the FloatingActionButton
   * ([see example]({% slug positioning_floatingactionbutton %}#toc-offset)).
   *
   * * The default value is:
   * * `{ x: '16px', y: '16px' }`
   */
  set offset(offset2) {
    this._offset = Object.assign(this._offset, offset2);
    this.offsetStyles();
  }
  get offset() {
    return this._offset;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  ngAfterViewInit() {
    ["size", "rounded", "themeColor"].forEach((option) => this.handleClasses(this[option], option));
    this.renderer.addClass(this.element.nativeElement, this.alignClass());
    this.offsetStyles();
    this.initialSetup = false;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.isOpen && this.toggleDial(false);
  }
  /**
   * Indicates whether the FloatingActionButton is currently open.
   */
  get isOpen() {
    return isPresent3(this.popupRef);
  }
  /**
   * Focuses the FloatingActionButton.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.focusChangedProgrammatically = true;
      this.button.nativeElement.focus();
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Blurs the FloatingActionButton.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.focusChangedProgrammatically = true;
      this.button.nativeElement.blur();
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Toggles the visibility of the FloatingActionButton dial items popup.
   *
   * If you use the `toggleDial` method to open or close the dial items,
   * the `open` and `close` events do not fire ([more information and examples](slug:openstate_floatingactionbutton)).
   *
   * @param open - The state of dial items popup.
   */
  toggleDial(open) {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    const shouldOpen = isPresent3(open) ? open : !this.isOpen;
    if (this.disabled || shouldOpen === this.isOpen) {
      return;
    }
    if (shouldOpen) {
      setTimeout(() => this.openDial());
    } else {
      this.closeDial();
    }
  }
  /**
   * @hidden
   */
  get ariaExpanded() {
    return this.hasDialItems ? this.isOpen : void 0;
  }
  /**
   * @hidden
   */
  get ariaHasPopup() {
    return this.hasDialItems ? "menu" : void 0;
  }
  /**
   * @hidden
   */
  get ariaControls() {
    return this.hasDialItems ? this.isOpen ? this.dialListId : void 0 : void 0;
  }
  /**
   * @hidden
   */
  get iconClasses() {
    const classes = [];
    if (this.iconClass) {
      classes.push(`${this.iconClass}`);
    }
    if (this.icon) {
      classes.push(`k-fab-icon k-icon k-i-${this.icon}`);
    }
    return classes;
  }
  /**
   * @hidden
   */
  clickHandler() {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    this.ngZone.run(() => {
      const shouldOpen = !this.isOpen;
      this.toggleDialWithEvents(shouldOpen);
    });
  }
  /**
   * @hidden
   */
  pointerdownHandler(e) {
    if (this.isOpen) {
      e.preventDefault();
      this.focus();
    }
  }
  /**
   * @hidden
   */
  keyDownHandler(event) {
    if (this.disabled) {
      return;
    }
    const focused = this.focusService.focused || 0;
    const keyCode = event.keyCode;
    const action = this.navigationService.process({
      altKey: event.altKey,
      current: focused,
      keyCode,
      max: this.dialItems ? this.dialItems.length - 1 : 0,
      min: 0,
      flipNavigation: this.align.vertical === "bottom"
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab) {
      event.preventDefault();
    }
    if (action === NavigationAction.Tab && event.target.closest(`#${this.dialListId}`)) {
      this.focus();
    }
    if (action === NavigationAction.EnterUp && !this.hasDialItems) {
      this.button.nativeElement.click();
    } else if (action === NavigationAction.Open || action === NavigationAction.Close) {
      const toggleDial = action === NavigationAction.Open;
      this.ngZone.run(() => {
        this.toggleDialWithEvents(toggleDial);
      });
    }
  }
  /**
   * @hidden
   */
  onItemClick(event) {
    const item = closest2(event.target, ".k-fab-item");
    if (!item) {
      return;
    }
    const index = parseInt(item.getAttribute("data-fab-item-index"));
    this.emitItemClick(index);
  }
  /**
   * @hidden
   */
  focusHandler() {
    if (!this.disabled && !this.focusChangedProgrammatically) {
      this.onFocus.emit();
    }
  }
  /**
   * @hidden
   */
  blurHandler(e) {
    const focusInList = e.relatedTarget && e.relatedTarget.closest(`#${this.dialListId}`);
    if (focusInList) {
      return;
    }
    !this.focusChangedProgrammatically && this.onBlur.emit();
    this.toggleDialWithEvents(false);
  }
  /**
   * @hidden
   */
  focusOutHandler(e) {
    const focusInList = e.relatedTarget && e.relatedTarget.closest(`#${this.dialListId}`);
    const focusOnButton = e.relatedTarget === this.button.nativeElement;
    const shouldClose = !focusInList && !focusOnButton;
    if (shouldClose) {
      this.toggleDialWithEvents(false);
      !this.focusChangedProgrammatically && this.onBlur.emit();
    }
  }
  /**
   * @hidden
   */
  onNavigationEnterPress() {
    this.ngZone.run(() => {
      if (this.isOpen) {
        const focusedIndex = this.focusService.focused;
        const focusedItem = this.dialItems[focusedIndex];
        if (focusedItem && focusedItem.disabled) {
          return;
        }
        if (isPresent3(focusedIndex) && focusedIndex !== -1) {
          this.onEnterPressed();
          return;
        }
      }
      if (!this.isOpen && isDocumentAvailable()) {
        this.toggleDialWithEvents(true);
        this.focus();
      }
    });
  }
  /**
   * @hidden
   */
  onNavigationClose() {
    if (this.isOpen) {
      this.ngZone.run(() => {
        this.toggleDialWithEvents(false);
        this.focus();
      });
    }
  }
  handleClasses(inputValue, input) {
    if (isPresent3(this.button) && (this[input] !== inputValue || this.initialSetup)) {
      const button = this.button.nativeElement;
      const classesToRemove = {
        themeColor: `${FILLMODE_CLASS}-${this.themeColor}`,
        size: SIZE_CLASSES[this.size],
        rounded: ROUNDED_CLASSES[this.rounded]
      };
      const classesToAdd = {
        themeColor: inputValue !== "none" ? `${FILLMODE_CLASS}-${inputValue}` : "",
        size: SIZE_CLASSES[inputValue],
        rounded: ROUNDED_CLASSES[inputValue]
      };
      this.renderer.removeClass(button, classesToRemove[input]);
      if (classesToAdd[input]) {
        this.renderer.addClass(button, classesToAdd[input]);
      }
    }
  }
  onEnterPressed() {
    const index = this.focusService.focused;
    this.emitItemClick(index);
  }
  emitItemClick(index) {
    const item = this.dialItems[index];
    if (item && !item.disabled) {
      const clickEventArgs = {
        item,
        index
      };
      this.dialItemClick.emit(clickEventArgs);
      this.toggleDialWithEvents(false);
      this.focusService.focused = index;
    }
    this.focus();
  }
  subscribeNavigationEvents() {
    this.subscriptions.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subscriptions.add(this.navigationService.enter.subscribe(this.onNavigationEnterPress.bind(this)));
    this.subscriptions.add((0, import_rxjs5.merge)(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  alignClass() {
    return `k-pos-${this.align.vertical}-${this.align.horizontal}`;
  }
  toggleDialWithEvents(open) {
    if (open === this.isOpen) {
      return;
    }
    const event = new PreventableEvent2();
    if (open) {
      this.open.emit(event);
    } else {
      this.close.emit(event);
    }
    if (event.isDefaultPrevented()) {
      return;
    }
    if (open) {
      this.openDial();
    } else {
      this.closeDial();
    }
  }
  openPopup() {
    if (this.isOpen) {
      return;
    }
    const isIconFab = this.icon && !this.text;
    const rtl = this.rtl;
    const align2 = this.align;
    this.popupRef = this.popupService.open({
      anchor: this.element.nativeElement,
      animate: false,
      content: this.popupTemplate,
      anchorAlign: getAnchorAlign(align2, rtl),
      popupAlign: getPopupAlign(align2, rtl),
      popupClass: "k-fab-popup k-popup-transparent"
    });
    const popupElement = this.popupRef.popupElement;
    this.renderer.setStyle(popupElement, "box-shadow", "none");
    if (isIconFab) {
      this.subscriptions.add(this.popupRef.popupOpen.subscribe(() => this.positionPopup()));
    }
    this.ngZone.runOutsideAngular(() => {
      this.popupMouseDownListener = this.renderer.listen(popupElement, "mousedown", (event) => {
        event.preventDefault();
      });
    });
    this.popupRef.popupAnchorViewportLeave.subscribe(() => this.toggleDialWithEvents(false));
  }
  closePopup() {
    if (this.isOpen) {
      if (this.popupMouseDownListener) {
        this.popupMouseDownListener();
      }
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  openDial() {
    this.openPopup();
    this.focusService.focus(0);
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(true);
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "true");
  }
  closeDial() {
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(false);
      this.animationEnd.pipe((0, import_operators5.take)(1)).subscribe(() => this.closePopup());
    } else {
      this.closePopup();
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "false");
    this.focusService.resetFocus();
  }
  isValidAnimation() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean") {
      return animation.duration !== 0;
    }
    return true;
  }
  positionPopup() {
    if (this.dialItemTemplate) {
      return;
    }
    if (!this.popupRef) {
      return;
    }
    const fab = this.element.nativeElement;
    const fabWidth = fab.getBoundingClientRect().width;
    const popupEl = this.popupRef.popupElement;
    const icon = popupEl.querySelector(".k-fab-item-icon");
    if (!icon) {
      return;
    }
    const iconWidth = icon.getBoundingClientRect().width;
    const left = fabWidth / 2 - iconWidth / 2;
    const popupLeft = popupEl.getBoundingClientRect().left;
    const isEndAlign = this.align.horizontal === "end";
    const leftValue = isEndAlign ? popupLeft - left : left + popupLeft;
    const rtlLeftValue = isEndAlign ? left + popupLeft : popupLeft - left;
    popupEl.style.left = this.rtl ? `${rtlLeftValue}px` : `${leftValue}px`;
  }
  offsetStyles() {
    const hostElement = this.element.nativeElement;
    this.renderer.setStyle(hostElement, this.horizontalPosition, this.horizontalOffset);
    this.renderer.setStyle(hostElement, this.verticalPosition, this.verticalOffset);
  }
  get hasDialItems() {
    return isPresent3(this.dialItems) && this.dialItems.length !== 0;
  }
  /**
   * Gets the CSS prop name of the selected vertical position (`top`/`bottom`);
   */
  get verticalPosition() {
    return {
      top: "top",
      middle: "top",
      bottom: "bottom"
    }[this.align.vertical];
  }
  /**
   * Gets the offset according to the selected vertical position.
   */
  get verticalOffset() {
    if (this.align.vertical === "middle") {
      return this.offset.y === DEFAULT_OFFSET2 ? "50%" : `calc(50% + ${this.offset.y})`;
    }
    return this.offset.y;
  }
  /**
   * Gets the CSS prop name of the selected horizontal position (`left`/`right`);
   */
  get horizontalPosition() {
    const {
      horizontal
    } = this.align;
    return {
      end: this.rtl ? "left" : "right",
      center: "left",
      start: this.rtl ? "right" : "left"
    }[horizontal];
  }
  /**
   * Gets the offset according to the selected horizontal position.
   */
  get horizontalOffset() {
    if (this.align.horizontal === "center") {
      return this.offset.x === DEFAULT_OFFSET2 ? "50%" : `calc(50% + ${this.offset.x})`;
    }
    return this.offset.x;
  }
  playerFor(element, animation) {
    const factory = this.builder.build(animation);
    return factory.create(element);
  }
  playAnimation(open) {
    const durationSettings = this.durationSettings();
    const animationSettings = {
      duration: durationSettings.duration,
      gap: durationSettings.gap,
      align: this.align
    };
    const animation = open ? openAnimation(animationSettings) : closeAnimation(animationSettings);
    let player = this.playerFor(this.popupRef.popupElement, animation);
    player.play();
    player.onDone(() => {
      if (player) {
        this.animationEnd.emit();
        player.destroy();
        player = null;
      }
    });
  }
  durationSettings() {
    return {
      duration: this.animationDuration(),
      gap: this.animationGap()
    };
  }
  animationGap() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean" && isPresent3(animation.gap)) {
      return animation.gap;
    }
    return DEFAULT_ITEM_GAP;
  }
  animationDuration() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean" && isPresent3(animation.duration)) {
      return animation.duration;
    }
    return DEFAULT_DURATION2;
  }
};
FloatingActionButtonComponent.ɵfac = function FloatingActionButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FloatingActionButtonComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(LocalizationService));
};
FloatingActionButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: FloatingActionButtonComponent,
  selectors: [["kendo-floatingactionbutton"]],
  contentQueries: function FloatingActionButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DialItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FloatingActionButtonTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialItemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fabTemplate = _t.first);
    }
  },
  viewQuery: function FloatingActionButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 7);
      ɵɵviewQuery(_c7, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
    }
  },
  hostVars: 5,
  hostBindings: function FloatingActionButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-pos-fixed", ctx.fixedClass)("k-pos-absolute", ctx.absoluteClass);
    }
  },
  inputs: {
    themeColor: "themeColor",
    size: "size",
    rounded: "rounded",
    disabled: "disabled",
    align: "align",
    offset: "offset",
    positionMode: "positionMode",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    buttonClass: "buttonClass",
    dialClass: "dialClass",
    text: "text",
    dialItemAnimation: "dialItemAnimation",
    tabIndex: "tabIndex",
    dialItems: "dialItems"
  },
  outputs: {
    onBlur: "blur",
    onFocus: "focus",
    dialItemClick: "dialItemClick",
    open: "open",
    close: "close"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.floatingactionbutton"
  }]), ɵɵStandaloneFeature],
  decls: 6,
  vars: 18,
  consts: [["button", ""], ["popupTemplate", ""], ["type", "button", 1, "k-fab", "k-fab-solid", 3, "focus", "blur", "tabIndex", "ngClass", "disabled", "kendoEventsOutsideAngular", "scope"], [4, "ngIf"], [3, "ngTemplateOutlet"], ["innerCssClass", "k-fab-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-fab-text", 4, "ngIf"], ["innerCssClass", "k-fab-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-fab-text"], ["kendoDialList", "", "role", "menu", 3, "click", "id", "ngClass", "dialItems", "dialItemTemplate", "align", "kendoEventsOutsideAngular"]],
  template: function FloatingActionButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "button", 2, 0);
      ɵɵlistener("focus", function FloatingActionButtonComponent_Template_button_focus_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.focusHandler());
      })("blur", function FloatingActionButtonComponent_Template_button_blur_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.blurHandler($event));
      });
      ɵɵtemplate(2, FloatingActionButtonComponent_2_Template, 1, 1, null, 3)(3, FloatingActionButtonComponent_ng_container_3_Template, 3, 2, "ng-container", 3);
      ɵɵelementEnd();
      ɵɵtemplate(4, FloatingActionButtonComponent_ng_template_4_Template, 1, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵclassProp("k-disabled", ctx.disabled);
      ɵɵproperty("tabIndex", ctx.componentTabIndex)("ngClass", ctx.buttonClass)("disabled", ctx.disabled)("kendoEventsOutsideAngular", ɵɵpureFunction3(14, _c122, ctx.keyDownHandler, ctx.clickHandler, ctx.pointerdownHandler))("scope", ctx);
      ɵɵattribute("id", ctx.id)("aria-disabled", ctx.disabled)("aria-expanded", ctx.ariaExpanded)("aria-haspopup", ctx.ariaHasPopup)("aria-controls", ctx.ariaControls);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.fabTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.fabTemplate);
    }
  },
  dependencies: [NgClass, EventsOutsideAngularDirective, NgIf, NgTemplateOutlet, IconWrapperComponent, DialListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-floatingactionbutton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.floatingactionbutton"
      }],
      template: `
        <button
            #button
            [attr.id]="id"
            [tabIndex]="componentTabIndex"
            type="button"
            class="k-fab k-fab-solid"
            [class.k-disabled]="disabled"
            [ngClass]="buttonClass"
            [disabled]="disabled"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="ariaExpanded"
            [attr.aria-haspopup]="ariaHasPopup"
            [attr.aria-controls]="ariaControls"
            (focus)="focusHandler()"
            (blur)="blurHandler($event)"
            [kendoEventsOutsideAngular]="{
                keydown: keyDownHandler,
                click: clickHandler,
                pointerdown: pointerdownHandler
            }"
            [scope]="this"
        >
            <ng-template *ngIf="fabTemplate"
                [ngTemplateOutlet]="fabTemplate?.templateRef"
            >
            </ng-template>

            <ng-container *ngIf="!fabTemplate">
                <kendo-icon-wrapper
                    *ngIf="icon || iconClass || svgIcon"
                    [name]="icon"
                    innerCssClass="k-fab-icon"
                    [customFontClass]="iconClass"
                    [svgIcon]="svgIcon"></kendo-icon-wrapper>
                <span *ngIf="text" class="k-fab-text">{{ text }}</span>
            </ng-container>
        </button>

        <ng-template #popupTemplate>
            <ul
                kendoDialList
                role="menu"
                [id]="dialListId"
                [ngClass]="dialClass"
                [dialItems]="dialItems"
                [dialItemTemplate]='dialItemTemplate?.templateRef'
                [align]="align"
                [attr.aria-labelledby]="id"
                (click)="onItemClick($event)"
                [kendoEventsOutsideAngular]="{
                    keydown: keyDownHandler.bind(this),
                    focusout: focusOutHandler.bind(this)
                }"
            >
            </ul>
        </ng-template>
    `,
      standalone: true,
      imports: [NgClass, EventsOutsideAngularDirective, NgIf, NgTemplateOutlet, IconWrapperComponent, DialListComponent]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: AnimationBuilder
    }, {
      type: LocalizationService
    }];
  }, {
    fixedClass: [{
      type: HostBinding,
      args: ["class.k-pos-fixed"]
    }],
    absoluteClass: [{
      type: HostBinding,
      args: ["class.k-pos-absolute"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    dialItemTemplate: [{
      type: ContentChild,
      args: [DialItemTemplateDirective, {
        static: false
      }]
    }],
    fabTemplate: [{
      type: ContentChild,
      args: [FloatingActionButtonTemplateDirective, {
        static: false
      }]
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    dialClass: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    dialItemAnimation: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    dialItems: [{
      type: Input
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    dialItemClick: [{
      type: Output,
      args: ["dialItemClick"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var Messages = class extends ComponentMessages {
};
Messages.ɵfac = /* @__PURE__ */ (() => {
  let ɵMessages_BaseFactory;
  return function Messages_Factory(__ngFactoryType__) {
    return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(Messages)))(__ngFactoryType__ || Messages);
  };
})();
Messages.ɵdir = ɵɵdefineDirective({
  type: Messages,
  selectors: [["kendo-splitbutton-messages-base"]],
  inputs: {
    splitButtonLabel: "splitButtonLabel"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-splitbutton-messages-base"
    }]
  }], null, {
    splitButtonLabel: [{
      type: Input
    }]
  });
})();
var SplitButtonCustomMessagesComponent = class extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
SplitButtonCustomMessagesComponent.ɵfac = function SplitButtonCustomMessagesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SplitButtonCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
SplitButtonCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitButtonCustomMessagesComponent,
  selectors: [["kendo-splitbutton-messages"]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SplitButtonCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
      }],
      selector: "kendo-splitbutton-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var LocalizedSplitButtonMessagesDirective = class extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedSplitButtonMessagesDirective.ɵfac = function LocalizedSplitButtonMessagesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LocalizedSplitButtonMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedSplitButtonMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedSplitButtonMessagesDirective,
  selectors: [["", "kendoSplitButtonLocalizedMessages", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSplitButtonMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
      }],
      selector: "[kendoSplitButtonLocalizedMessages]",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var NAVIGATION_SETTINGS = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS
};
var DEFAULT_ROUNDED = "medium";
var DEFAULT_FILL_MODE = "solid";
var SplitButtonComponent = class extends ListButton {
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, renderer, containerService) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.localization = localization;
    this.renderer = renderer;
    this.text = "";
    this.icon = "";
    this.type = "button";
    this.imageUrl = "";
    this.size = "medium";
    this.themeColor = "base";
    this.tabIndex = 0;
    this.arrowButtonIcon = "caret-alt-down";
    this.arrowButtonSvgIcon = caretAltDownIcon;
    this.buttonClick = new EventEmitter();
    this.itemClick = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.activeArrow = false;
    this.listId = guid();
    this.buttonText = "";
    this.arrowButtonClicked = false;
    this._rounded = DEFAULT_ROUNDED;
    this._fillMode = DEFAULT_FILL_MODE;
    this._buttonAttributes = null;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
  }
  /**
   * The rounded property specifies the border radius of the SplitButton
   * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-rounded)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the SplitButton
   * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-fillMode)).
   *
   * The available values are:
   * * `solid` (default)
   * * `flat`
   * * `outline`
   * * `link`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
    this._fillMode = fillMode === "clear" ? "flat" : newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * When set to `true`, disables a SplitButton item
   * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
   */
  set disabled(value) {
    if (this.isOpen) {
      this.toggle(false);
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Configures the popup of the SplitButton.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true,
      popupClass: ""
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Sets the data of the SplitButton.
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    if (!this._data) {
      this.data = [];
    }
    return this._data;
  }
  /**
   * Sets attributes to the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes ? buttonAttributes : null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  /**
   * @hidden
   */
  get hasContent() {
    var _a;
    return ((_a = this.button) === null || _a === void 0 ? void 0 : _a.nativeElement.childElementCount) > 0;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  set isFocused(value) {
    this._isFocused = value;
  }
  get isFocused() {
    return this._isFocused && !this._disabled && isDocumentAvailable() && this.wrapperContains(document.activeElement);
  }
  get widgetClasses() {
    return true;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get ariaLabel() {
    const localizationMsg = this.localization.get("splitButtonLabel") || "";
    return replaceMessagePlaceholder(localizationMsg, "buttonText", this.buttonText);
  }
  /**
   * @hidden
   */
  onButtonFocus(event) {
    if (!this._disabled) {
      !this._isFocused && this.onFocus.emit();
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest2(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  onArrowButtonClick() {
    this.togglePopupVisibility();
    this.arrowButtonClicked = false;
    if (!this.isOpen) {
      this.focus();
    }
  }
  /**
   * @hidden
   */
  toggleButtonActiveState(enable) {
    this._active = enable;
  }
  /**
   * @hidden
   */
  toggleArrowButtonActiveState(enable) {
    this.arrowButtonClicked = true;
    this.activeArrow = enable;
  }
  /**
   * @hidden
   */
  onButtonClick() {
    this.buttonClick.emit();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.isOpen && !this.arrowButtonClicked) {
      this.blurWrapper();
    }
  }
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    if (event.keyCode === Keys.Space) {
      this._active = true;
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this._active = false;
    if (event.keyCode !== Keys.Space) {
      this.keyUpHandler(event);
    }
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.containerService.container = this.containerRef;
    this.containerService.template = this.popupTemplate;
    this.updateButtonText();
    this.handleClasses(this.rounded, "rounded");
    this.handleButtonAttributes(this.buttonAttributes);
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("text")) {
      this.updateButtonText();
    }
    if (anyChanged(["text", "icon", "svgIcon", "iconClass", "imageUrl"], changes)) {
      this.toggleButtonIconClass();
    }
    if (isChanged("popupSettings", changes) && isPresent3(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  /**
   * @hidden
   */
  onNavigationEnterUp(args) {
    if (args.target !== this.button.nativeElement) {
      super.onNavigationEnterUp(args);
    }
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (isDocumentAvailable() && this.wrapperContains(document.activeElement) && this.arrowButtonClicked) {
      this.button.nativeElement.focus();
    }
    super.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  /**
   * @hidden
   */
  get anchorAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get isIconButton() {
    var _a;
    const hasIcon = this.icon || this.svgIcon || this.iconClass || this.imageUrl;
    const hasTextContent = isDocumentAvailable() && ((_a = this.button) === null || _a === void 0 ? void 0 : _a.nativeElement.textContent.trim().length) > 0;
    return hasIcon && !hasTextContent;
  }
  /**
   * Focuses the SplitButton component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the SplitButton component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this.openState;
  }
  updateButtonText() {
    if (isDocumentAvailable()) {
      const innerText = this.wrapper.innerText.split("\n").join("").trim();
      setTimeout(() => this.buttonText = innerText, 0);
    }
  }
  handleClasses(value, input) {
    const elem = this.wrapperRef.nativeElement;
    const classes = getStylingClasses("button", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  toggleButtonIconClass() {
    this.button.nativeElement.classList[this.isIconButton ? "add" : "remove"]("k-button-icon");
  }
  handleButtonAttributes(newButtonAttributes) {
    const mainButton = this.button.nativeElement;
    if (isPresent3(this.buttonAttributes) && isPresent3(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent3(newButtonAttributes) && isPresent3(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
};
SplitButtonComponent.ɵfac = function SplitButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SplitButtonComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PopupContainerService));
};
SplitButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitButtonComponent,
  selectors: [["kendo-splitbutton"]],
  contentQueries: function SplitButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ButtonItemTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    }
  },
  viewQuery: function SplitButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5, ElementRef);
      ɵɵviewQuery(_c14, 5, ElementRef);
      ɵɵviewQuery(_c7, 5);
      ɵɵviewQuery(_c8, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrowButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  hostVars: 7,
  hostBindings: function SplitButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function SplitButtonComponent_keydown_HostBindingHandler($event) {
        return ctx.keydown($event);
      })("keyup", function SplitButtonComponent_keyup_HostBindingHandler($event) {
        return ctx.keyup($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-focus", ctx.isFocused)("k-split-button", ctx.widgetClasses)("k-button-group", ctx.widgetClasses);
    }
  },
  inputs: {
    text: "text",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    type: "type",
    imageUrl: "imageUrl",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor",
    disabled: "disabled",
    popupSettings: "popupSettings",
    tabIndex: "tabIndex",
    textField: "textField",
    data: "data",
    buttonClass: "buttonClass",
    arrowButtonClass: "arrowButtonClass",
    arrowButtonIcon: "arrowButtonIcon",
    arrowButtonSvgIcon: "arrowButtonSvgIcon",
    buttonAttributes: "buttonAttributes"
  },
  outputs: {
    buttonClick: "buttonClick",
    itemClick: "itemClick",
    onFocus: "focus",
    onBlur: "blur",
    open: "open",
    close: "close"
  },
  exportAs: ["kendoSplitButton"],
  standalone: true,
  features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.splitbutton"
  }, PopupContainerService, {
    provide: MultiTabStop,
    useExisting: forwardRef(() => SplitButtonComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c13,
  decls: 12,
  vars: 30,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_F__PROJECT_BUILDINGSWEBAPI_ANGULARFRONTEND_ANGULAR_FRONTEND_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2015_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0 = goog.getMsg("{$interpolation}", {
        "interpolation": "�0�"
      }, {
        original_code: {
          "interpolation": "{{ '{buttonText} splitbutton' }}"
        }
      });
      i18n_0 = MSG_F__PROJECT_BUILDINGSWEBAPI_ANGULARFRONTEND_ANGULAR_FRONTEND_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2015_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label:${"�0�"}:INTERPOLATION:`;
    }
    return [["button", ""], ["arrowButton", ""], ["popupTemplate", ""], ["container", ""], ["splitButtonLabel", i18n_0], ["kendoSplitButtonLocalizedMessages", "", 6, "splitButtonLabel"], ["kendoButton", "", 3, "focus", "click", "blur", "mousedown", "mouseup", "type", "tabindex", "disabled", "size", "rounded", "fillMode", "themeColor", "icon", "svgIcon", "iconClass", "imageUrl", "ngClass"], ["class", "k-button-text", 4, "ngIf"], ["kendoButton", "", "type", "button", "aria-hidden", "true", 1, "k-split-button-arrow", 3, "click", "mousedown", "mouseup", "keydown.enter", "ngClass", "disabled", "icon", "svgIcon", "size", "rounded", "fillMode", "themeColor", "tabindex"], [1, "k-button-text"], [3, "onItemClick", "keydown", "keyup", "id", "data", "textField", "itemTemplate", "size"]];
  },
  template: function SplitButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementContainerStart(0, 5);
      ɵɵi18nAttributes(1, 4);
      ɵɵelementContainerEnd();
      ɵɵelementStart(2, "button", 6, 0);
      ɵɵlistener("focus", function SplitButtonComponent_Template_button_focus_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onButtonFocus($event));
      })("click", function SplitButtonComponent_Template_button_click_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onButtonClick());
      })("blur", function SplitButtonComponent_Template_button_blur_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onButtonBlur());
      })("mousedown", function SplitButtonComponent_Template_button_mousedown_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleButtonActiveState(true));
      })("mouseup", function SplitButtonComponent_Template_button_mouseup_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleButtonActiveState(false));
      });
      ɵɵtemplate(4, SplitButtonComponent_span_4_Template, 2, 1, "span", 7);
      ɵɵprojection(5);
      ɵɵelementEnd();
      ɵɵelementStart(6, "button", 8, 1);
      ɵɵlistener("click", function SplitButtonComponent_Template_button_click_6_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onArrowButtonClick());
      })("mousedown", function SplitButtonComponent_Template_button_mousedown_6_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleArrowButtonActiveState(true));
      })("mouseup", function SplitButtonComponent_Template_button_mouseup_6_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleArrowButtonActiveState(false));
      })("keydown.enter", function SplitButtonComponent_Template_button_keydown_enter_6_listener($event) {
        ɵɵrestoreView(_r1);
        $event.stopImmediatePropagation();
        return ɵɵresetView($event.preventDefault());
      });
      ɵɵelementEnd();
      ɵɵtemplate(8, SplitButtonComponent_ng_template_8_Template, 1, 6, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(10, null, 3);
    }
    if (rf & 2) {
      ɵɵi18nExp("{buttonText} splitbutton");
      ɵɵi18nApply(1);
      ɵɵadvance(2);
      ɵɵclassProp("k-active", ctx.active);
      ɵɵproperty("type", ctx.type)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass);
      ɵɵattribute("aria-expanded", ctx.openState)("aria-controls", ctx.listId)("aria-label", ctx.ariaLabel);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.text);
      ɵɵadvance(2);
      ɵɵclassProp("k-active", ctx.activeArrow);
      ɵɵproperty("ngClass", ctx.arrowButtonClass)("disabled", ctx.disabled)("icon", ctx.arrowButtonIcon)("svgIcon", ctx.arrowButtonSvgIcon)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("tabindex", -1);
    }
  },
  dependencies: [LocalizedSplitButtonMessagesDirective, ButtonComponent, NgClass, NgIf, ListComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSplitButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.splitbutton"
      }, PopupContainerService, {
        provide: MultiTabStop,
        useExisting: forwardRef(() => SplitButtonComponent)
      }],
      selector: "kendo-splitbutton",
      template: `
        <ng-container kendoSplitButtonLocalizedMessages
            i18n-splitButtonLabel="kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label"
            splitButtonLabel="{{ '{buttonText} splitbutton' }}">
        </ng-container>
        <button
            kendoButton
            #button
            [type]="type"
            [tabindex]="componentTabIndex"
            [disabled]="disabled"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [class.k-active]="active"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            (focus)="onButtonFocus($event)"
            (click)="onButtonClick()"
            (blur)="onButtonBlur()"
            (mousedown)="toggleButtonActiveState(true)"
            (mouseup)="toggleButtonActiveState(false)"
            [attr.aria-expanded]="openState"
            [attr.aria-controls]="listId"
            [attr.aria-label]="ariaLabel"
        >
            <span *ngIf="text" class="k-button-text">
                {{ text }}
            </span><ng-content></ng-content>
        </button>
        <button kendoButton #arrowButton type="button"
            class="k-split-button-arrow"
            [class.k-active]="activeArrow"
            [ngClass]="arrowButtonClass"
            [disabled]="disabled"
            [icon]="arrowButtonIcon"
            [svgIcon]="arrowButtonSvgIcon"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [tabindex]="-1"
            aria-hidden="true"
            (click)="onArrowButtonClick()"
            (mousedown)="toggleArrowButtonActiveState(true)"
            (mouseup)="toggleArrowButtonActiveState(false)"
            (keydown.enter)="$event.stopImmediatePropagation(); $event.preventDefault();"
        ></button>
        <ng-template #popupTemplate>
            <kendo-button-list
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `,
      standalone: true,
      imports: [LocalizedSplitButtonMessagesDirective, ButtonComponent, NgClass, NgIf, ListComponent]
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: PopupContainerService
    }];
  }, {
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    arrowButtonClass: [{
      type: Input
    }],
    arrowButtonIcon: [{
      type: Input
    }],
    arrowButtonSvgIcon: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    buttonClick: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        read: ElementRef
      }]
    }],
    arrowButton: [{
      type: ViewChild,
      args: ["arrowButton", {
        read: ElementRef
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate"]
    }],
    containerRef: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef
      }]
    }],
    isFocused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-split-button"]
    }, {
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var KENDO_BUTTON = [ButtonComponent];
var KENDO_BUTTONGROUP = [ButtonComponent, ButtonGroupComponent];
var KENDO_DROPDOWNBUTTON = [DropDownButtonComponent, ButtonItemTemplateDirective];
var KENDO_CHIP = [ChipComponent];
var KENDO_CHIPLIST = [ChipComponent, ChipListComponent];
var KENDO_FLOATINGACTIONBUTTON = [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective];
var KENDO_SPLITBUTTON = [SplitButtonComponent, SplitButtonCustomMessagesComponent];
var KENDO_BUTTONS = [...KENDO_BUTTON, ...KENDO_BUTTONGROUP, ...KENDO_DROPDOWNBUTTON, ...KENDO_CHIP, ...KENDO_CHIPLIST, ...KENDO_FLOATINGACTIONBUTTON, ...KENDO_SPLITBUTTON];
var ButtonGroupModule = class {
};
ButtonGroupModule.ɵfac = function ButtonGroupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonGroupModule)();
};
ButtonGroupModule.ɵmod = ɵɵdefineNgModule({
  type: ButtonGroupModule,
  imports: [ButtonComponent, ButtonGroupComponent],
  exports: [ButtonComponent, ButtonGroupComponent]
});
ButtonGroupModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [KENDO_BUTTONGROUP]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BUTTONGROUP],
      imports: [...KENDO_BUTTONGROUP],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ButtonModule = class {
};
ButtonModule.ɵfac = function ButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonModule)();
};
ButtonModule.ɵmod = ɵɵdefineNgModule({
  type: ButtonModule,
  imports: [ButtonComponent],
  exports: [ButtonComponent]
});
ButtonModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [ButtonComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonComponent],
      exports: [ButtonComponent],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ButtonsModule = class {
};
ButtonsModule.ɵfac = function ButtonsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonsModule)();
};
ButtonsModule.ɵmod = ɵɵdefineNgModule({
  type: ButtonsModule,
  imports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ButtonItemTemplateDirective, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective, SplitButtonComponent, SplitButtonCustomMessagesComponent],
  exports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ButtonItemTemplateDirective, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective, SplitButtonComponent, SplitButtonCustomMessagesComponent]
});
ButtonsModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, SplitButtonComponent, SplitButtonCustomMessagesComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_BUTTONS],
      exports: [...KENDO_BUTTONS],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var SplitButtonModule = class {
};
SplitButtonModule.ɵfac = function SplitButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SplitButtonModule)();
};
SplitButtonModule.ɵmod = ɵɵdefineNgModule({
  type: SplitButtonModule,
  imports: [SplitButtonComponent, SplitButtonCustomMessagesComponent],
  exports: [SplitButtonComponent, SplitButtonCustomMessagesComponent]
});
SplitButtonModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [KENDO_SPLITBUTTON]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SPLITBUTTON],
      imports: [...KENDO_SPLITBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var DropDownButtonModule = class {
};
DropDownButtonModule.ɵfac = function DropDownButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DropDownButtonModule)();
};
DropDownButtonModule.ɵmod = ɵɵdefineNgModule({
  type: DropDownButtonModule,
  imports: [DropDownButtonComponent, ButtonItemTemplateDirective],
  exports: [DropDownButtonComponent, ButtonItemTemplateDirective]
});
DropDownButtonModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [DropDownButtonComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DROPDOWNBUTTON],
      imports: [...KENDO_DROPDOWNBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var EXPORTED_DIRECTIVES = [ListComponent, FocusableDirective, ButtonItemTemplateDirective];
var ListModule = class {
};
ListModule.ɵfac = function ListModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ListModule)();
};
ListModule.ɵmod = ɵɵdefineNgModule({
  type: ListModule,
  imports: [ListComponent, FocusableDirective, ButtonItemTemplateDirective],
  exports: [ListComponent, FocusableDirective, ButtonItemTemplateDirective]
});
ListModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [ListComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListModule, [{
    type: NgModule,
    args: [{
      imports: [...EXPORTED_DIRECTIVES],
      exports: [...EXPORTED_DIRECTIVES],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ChipModule = class {
};
ChipModule.ɵfac = function ChipModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ChipModule)();
};
ChipModule.ɵmod = ɵɵdefineNgModule({
  type: ChipModule,
  imports: [ChipComponent, ChipListComponent],
  exports: [ChipComponent, ChipListComponent]
});
ChipModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [KENDO_CHIPLIST]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_CHIPLIST],
      imports: [...KENDO_CHIPLIST],
      providers: [IconsService]
    }]
  }], null, null);
})();
var FloatingActionButtonModule = class {
};
FloatingActionButtonModule.ɵfac = function FloatingActionButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FloatingActionButtonModule)();
};
FloatingActionButtonModule.ɵmod = ɵɵdefineNgModule({
  type: FloatingActionButtonModule,
  imports: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective],
  exports: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective]
});
FloatingActionButtonModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService, PopupService, ResizeBatchService],
  imports: [FloatingActionButtonComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_FLOATINGACTIONBUTTON],
      imports: [...KENDO_FLOATINGACTIONBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

export {
  browser,
  mobileOS,
  pointers,
  touchEnabled,
  getter,
  setter,
  Draggable,
  isDocumentAvailable,
  isChanged,
  anyChanged,
  hasObservers,
  guid,
  isSafari,
  isPresent,
  isObjectPresent,
  isObject,
  parseCSSClassNames,
  setHTMLAttributes,
  removeHTMLAttributes,
  parseAttributes,
  isControlRequired,
  DraggableDirective,
  DraggableModule,
  closestInScope,
  closest,
  contains,
  isFocusable,
  findFocusableChild,
  EventsOutsideAngularDirective,
  EventsModule,
  ResizeBatchService,
  ResizeSensorComponent,
  ResizeSensorModule,
  KendoInput,
  Keys,
  focusableSelector,
  WatermarkOverlayComponent,
  shouldShowValidationUI,
  PrefixTemplateDirective,
  SuffixTemplateDirective,
  SeparatorComponent,
  TemplateContextDirective,
  MultiTabStop,
  ToggleButtonTabStopDirective,
  KENDO_RESIZESENSOR,
  AdornmentsModule,
  PreventableEvent,
  ScrollbarWidthService,
  validatePackage,
  MessageService,
  ComponentMessages,
  RTL,
  L10N_PREFIX,
  LocalizationService,
  caretAltUpIcon,
  caretAltRightIcon,
  caretAltDownIcon,
  caretAltLeftIcon,
  caretAltToRightIcon,
  caretAltToLeftIcon,
  caretAltExpandIcon,
  chevronUpIcon,
  chevronRightIcon,
  chevronDownIcon,
  chevronLeftIcon,
  arrowRightIcon,
  arrowLeftIcon,
  columnsIcon,
  reorderIcon,
  moreVerticalIcon,
  displayInlineFlexIcon,
  dropletSliderIcon,
  maxWidthIcon,
  clockIcon,
  calendarIcon,
  lockIcon,
  unlockIcon,
  cancelIcon,
  checkIcon,
  checkCircleIcon,
  xIcon,
  xCircleIcon,
  plusIcon,
  minusIcon,
  sortAscSmallIcon,
  sortDescSmallIcon,
  filterIcon,
  filterClearIcon,
  hyperlinkOpenIcon,
  windowIcon,
  windowRestoreIcon,
  windowMinimizeIcon,
  searchIcon,
  stickIcon,
  unstickIcon,
  setColumnPositionIcon,
  starOutlineIcon,
  starIcon,
  exclamationCircleIcon,
  paletteIcon,
  slidersIcon,
  dropletSlashIcon,
  insertTopIcon,
  insertMiddleIcon,
  insertBottomIcon,
  IconComponent,
  SVGIconComponent,
  IconsService,
  IconWrapperComponent,
  KENDO_ICONS,
  IconsModule,
  document_default,
  windowViewport,
  offset_default,
  scrollPosition,
  position_with_scroll_default,
  PopupComponent,
  PopupService,
  KENDO_POPUP,
  PopupModule,
  ButtonComponent,
  PreventableEvent2,
  ButtonGroupComponent,
  ChipComponent,
  ChipListComponent,
  ButtonItemTemplateDirective,
  FocusableDirective,
  ListComponent,
  DropDownButtonComponent,
  DialItemTemplateDirective,
  FloatingActionButtonTemplateDirective,
  FloatingActionButtonComponent,
  SplitButtonCustomMessagesComponent,
  LocalizedSplitButtonMessagesDirective,
  SplitButtonComponent,
  KENDO_BUTTON,
  KENDO_BUTTONGROUP,
  KENDO_DROPDOWNBUTTON,
  KENDO_CHIP,
  KENDO_CHIPLIST,
  KENDO_FLOATINGACTIONBUTTON,
  KENDO_SPLITBUTTON,
  KENDO_BUTTONS,
  ButtonGroupModule,
  ButtonModule,
  ButtonsModule,
  SplitButtonModule,
  DropDownButtonModule,
  ListModule,
  ChipModule,
  FloatingActionButtonModule
};
//# sourceMappingURL=chunk-XF7LUF2T.js.map
