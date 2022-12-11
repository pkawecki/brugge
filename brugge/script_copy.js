"use strict";

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) &&
          (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        ) {}
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r))
          return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var wsd = document.querySelector("#WP-Stad-Default");
console.log("wsd", wsd);
var _React = React,
  useState = _React.useState;
var lang = document.documentElement.lang;
var tiles = {
  nl: {
    Meldingen: {
      acties: "#",
      "goed te keuren": "#"
    },
    Opleiding: {
      Startpagina: "#"
    }
  },
  en: {
    Meldingen: {
      actions: "#",
      "goed te keuren": "#"
    },
    Opleiding: {
      Startpagina: "#"
    }
  }
};
var getSubtitles = function getSubtitles(title) {
  // console.log("Title", title);
  switch (lang) {
    case "nl":
      // console.log("nl");
      var subtitles = Object.keys(tiles[lang][title]);
      console.log(subtitles);
      return subtitles;
      break;
    case "en":
      subtitles = Object.keys(tiles.en[title]);
      console.log(subtitles);
      return subtitles;
      break;
  }
};

// const keys = Object.keys(Meldingen_links);
// console.log(keys);
// console.log(Meldingen_links[keys[0]]);

function Block(_ref) {
  var title = _ref.title,
    icon_name = _ref.icon_name,
    subtitles = _ref.subtitles;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  console.log("active", active);
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "container"
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "innerContainer"
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          onTouchStart: function onTouchStart() {
            setActive(!active);
          }
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "itemMob dropdown ".concat(active ? "active" : "")
          },
          /*#__PURE__*/ React.createElement("span", {
            className: "notificationDot"
          }),
          /*#__PURE__*/ React.createElement("i", {
            className: icon_name
          }),
          /*#__PURE__*/ React.createElement("h3", null, title),
          /*#__PURE__*/ React.createElement(
            "ul",
            {
              className: "dropdown-menu notifications"
            },
            subtitles.map(function (subtitle) {
              return /*#__PURE__*/ React.createElement(
                "li",
                {
                  key: subtitle,
                  id: subtitle
                },
                /*#__PURE__*/ React.createElement(
                  "a",
                  {
                    href: "#"
                  },
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      className: "subNotificationDot"
                    },
                    "0"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      className: "subNotificationText"
                    },
                    subtitle
                  )
                )
              );
            })
          )
        )
      )
    )
  );
}
function MyApp() {
  return /*#__PURE__*/ React.createElement(Block, {
    title: "Meldingen",
    icon_name: "far fa-bell",
    subtitles: getSubtitles("Meldingen")
  });
}
var container = document.getElementById("root");
var root = ReactDOM.createRoot(container);
root.render(/*#__PURE__*/ React.createElement(MyApp, null));
