(window.webpackJsonp = window.webpackJsonp || []).push([
  [8, 10],
  {
    444: function (e, t, a) {
      "use strict";
      var s = a(11),
        r = a(12),
        n = a(20),
        o = a(21),
        l = a(22),
        p = a(0),
        i = a.n(p),
        c = a(53),
        m =
          (a(4),
            (function (e) {
              function t() {
                var e, a;
                Object(s.a)(this, t);
                for (var r = arguments.length, l = new Array(r), p = 0; p < r; p++) l[p] = arguments[p];
                return (
                  ((a = Object(n.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(l)))).setRoute = function (e) {
                    "book" !== a.props.routes || !a.props.selectedFlight || (a.props.selectedFlight.hasOwnProperty("from_search") && a.props.selectedFlight.from_search) ? a.props.history.push(e) : a.props.history.replace(e),
                      a.props.appActions.setRouteInfo("none"),
                      setTimeout(function () {
                        return c.animateScroll.scrollToTop();
                      }, 300);
                  }),
                    a
                );
              }
              return (
                Object(l.a)(t, e),
                  Object(r.a)(t, [
                    {
                      key: "shouldComponentUpdate",
                      value: function (e) {
                        return e.routes !== this.props.routes && "none" !== e.routes;
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function () {
                        if ("undefined" !== typeof this.props.routes && null !== this.props.routes && this.props.history)
                          switch (this.props.routes) {
                            case "home":
                              this.setRoute("/" + this.props.lang.value + "/");
                              break;
                            case "search":
                              ((window.searchUrl && window.searchUrl !== window.searchUrl.substr(1)) || !window.searchUrl) &&
                              (window.searchUrl || (window.searchUrl = window.location.search.substr(1)), this.setRoute("/" + this.props.lang.value + "/search?" + window.searchUrl));
                              break;
                            case "flightrequest":
                              this.setRoute("/" + this.props.lang.value + "/flightrequest");
                              break;
                            case "searchHotelInfo":
                              ((window.searchUrl && window.searchUrl !== window.searchUrl.substr(1)) || !window.searchUrl) &&
                              (window.searchUrl || (window.searchUrl = window.location.search.substr(1)),
                                this.setRoute("/" + this.props.lang.value + "/search&hid=" + this.props.hotelInfo.hid + "?" + window.searchUrl));
                              break;
                            case "hotel":
                              this.setRoute("/hotel");
                              break;
                            case "login":
                              this.setRoute("/login");
                              break;
                            case "book":
                              this.setRoute("/book?" + this.props.selectedFlight.book_query);
                              break;
                            case "404":
                              this.props.history.replace("/" + ("elumbus" === window.appenv ? "" : this.props.lang.value + "/") + "404");
                              break;
                            default:
                              this.setRoute("/");
                          }
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        return i.a.createElement("div", null);
                      },
                    },
                  ]),
                  t
              );
            })(p.Component));
      t.a = m;
    },
    540: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(0),
        r = a.n(s),
        n = a(402),
        o = a.n(n),
        l = a(399),
        p = a.n(l),
        i = a(52),
        c = a.n(i),
        m = (a(395), a(529), a(2), a(719));
      t.default = function () {
        return r.a.createElement(
          o.a,
          { className: "padding-tb25" },
          r.a.createElement(
            p.a,
            null,
            r.a.createElement(c.a, { className: "float-left" }, r.a.createElement(m.a, { className: "float-left", src: "/images.skytoursusa/ST-usa.png", width: 150, fluid: !0 })),
            r.a.createElement(c.a, { className: " my-auto" }, r.a.createElement("p", { className: " svg font12 float-right my-auto" }, "Copyright ", new Date().getFullYear(), ". All rights reserved"))
          )
        );
      };
    },
    629: function (e, t, a) {},
    722: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(1),
        r = a(11),
        n = a(12),
        o = a(20),
        l = a(21),
        p = a(22),
        i = a(0),
        c = a.n(i),
        m = a(444),
        d = a(53),
        u = a(443),
        h = a.n(u),
        g = a(410),
        f = a.n(g),
        b = a(32),
        E = a.n(b),
        y = a(52),
        D = a.n(y),
        T = a(399),
        v = a.n(T),
        N = a(395),
        x = a(7),
        w = a(16),
        O = a(414),
        S = a.n(O),
        k = a(2),
        C = a(428),
        A = a.n(C),
        I = a(4),
        R = a(419),
        P = a.n(R),
        L = function (e) {
          var t = e.t;
          return c.a.createElement(
            "div",
            { className: "padding-lr20px" },
            c.a.createElement(
              P.a.Group,
              null,
              Object.keys(k.s).map(function (a, s) {
                return c.a.createElement(P.a.Check, {
                  key: s,
                  checked: e.selectedClass === a,
                  onChange: function (t) {
                    return e.appActions.setSelectedClass(a);
                  },
                  custom: !0,
                  name: "selectedClass",
                  type: "radio",
                  label: t(k.s[a]),
                  id: "selectedClass-" + a,
                  "aria-label": a,
                  className: "margin-r20 padding-tb5",
                  value: a,
                });
              })
            )
          );
        },
        j = function (e) {
          var t = Object(i.useState)(!1),
            a = Object(w.a)(t, 2),
            s = a[0],
            r = a[1],
            n = Object(i.useState)(!1),
            o = Object(w.a)(n, 2),
            l = o[0],
            p = o[1],
            m = e.t,
            d = function (t, a) {
              if (9 === Object(I.h)(e.numPeople) && t) r(!0);
              else if (
                ("infant" === a && e.numPeople.adult + e.numPeople.youth + e.numPeople.senior === e.numPeople.infant && t) ||
                !(("adult" !== a && "youth" !== a && "senior" !== a) || e.numPeople.adult + e.numPeople.youth + e.numPeople.senior !== e.numPeople.infant || t)
              )
                p(!0);
              else if (1 !== Object(I.h)(e.numPeople) || t) {
                var s = Object.assign({}, e.numPeople);
                t ? ++s[a] : s[a] > 0 && --s[a], e.appActions.setNumPeople(s);
              }
            };
          return c.a.createElement(
            "div",
            null,
            s &&
            c.a.createElement(A.a, {
              title: m("MAX_PASSENGERS"),
              type: "warning",
              onConfirm: function () {
                return r(!1);
              },
            }),
            l &&
            c.a.createElement(A.a, {
              title: m("ADULT_AND_INFANT"),
              type: "warning",
              onConfirm: function () {
                return p(!1);
              },
            }),
            e.numPeople &&
            c.a.createElement(
              S.a,
              null,
              c.a.createElement(
                S.a.Toggle,
                { id: "dropdownPeople", className: "dropdown-1 text-center overflow-elipsis" },
                c.a.createElement(N.a, { icon: x.K, className: "margin-r10 text-light-gray" }),
                c.a.createElement("span", null, " ", Object(I.h)(e.numPeople), e.config.cabinClass && c.a.createElement("span", null, " / ", m(k.s[e.selectedClass])))
              ),
              c.a.createElement(
                S.a.Menu,
                { className: "min-width-100-pcent" },
                k.F.map(function (t, a) {
                  return c.a.createElement(
                    D.a,
                    { cs: 12, key: a, style: { minWidth: "280px" } },
                    c.a.createElement(
                      v.a,
                      { className: "height-60px" },
                      c.a.createElement(
                        D.a,
                        { xs: 7, className: "padding-tb15 text-center" },
                        c.a.createElement(
                          "span",
                          { className: "text-light-gray" },
                          c.a.createElement(N.a, { icon: t.icon, className: "font22 text-blue" }),
                          " ",
                          c.a.createElement("div", { className: "font12 text-light-gray" }, m(t.age).replace("<br>", " "))
                        )
                      ),
                      c.a.createElement(
                        D.a,
                        { xs: 5, className: "text-center padding-tb15" },
                        c.a.createElement(N.a, {
                          icon: x.p,
                          className: 0 !== e.numPeople[t.which] ? "fa-2x float-left text-blue cursor-pointer" : "fa-2x float-left text-lighter-gray",
                          onClick: function () {
                            d(!1, t.which);
                          },
                        }),
                        c.a.createElement("div", { className: "float-left width-30px padding-tb5" }, e.numPeople[t.which]),
                        c.a.createElement(N.a, {
                          icon: x.x,
                          className: 10 !== e.numPeople[t.which] ? "fa-2x float-left text-blue cursor-pointer" : "fa-2x float-left text-lighter-gray",
                          onClick: function () {
                            d(!0, t.which);
                          },
                        })
                      )
                    )
                  );
                }),
                c.a.createElement("div", { className: "clearfix padding-tb5" }),
                e.config.cabinClass && c.a.createElement("span", null, c.a.createElement("hr", null), c.a.createElement(L, e), c.a.createElement("div", { className: "clearfix padding-tb5" })),
                c.a.createElement(S.a.Item, { className: "back-white" }, c.a.createElement(f.a, { className: "width-100", variant: "primary" }, m("BUTTON_CLOSE"))),
                c.a.createElement("div", { className: "clearfix padding-tb5" })
              )
            )
          );
        },
        U = a(3),
        M = a.n(U),
        _ = (a(455), a(456)),
        F = a(402),
        H = a.n(F),
        Y = a(5),
        z = a.n(Y),
        B = a(432),
        W = a.n(B),
        G = (function (e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
                ((a = Object(o.a)(this, Object(l.a)(t).call(this, e))).handleChange = function (e) {
                  a.props.appActions.setCityValue(e.target.value), e.preventDefault();
                  e.target.value;
                  e.target.value.length > 0 ? a.props.appActions.setAcList(a.props.acListHotels) : 0 === e.target.value.length && a.props.appActions.setAcList([]);
                }),
                (a.cityInput = c.a.createRef()),
                a
            );
          }
          return (
            Object(p.a)(t, e),
              Object(n.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    this.props.t;
                    return c.a.createElement(
                      P.a.Group,
                      null,
                      c.a.createElement(P.a.Control, {
                        type: "text",
                        placeholder: "hotel destination",
                        "aria-label": "hotel destination",
                        value: this.props.cityVal,
                        onChange: function (t) {
                          return e.handleChange(t);
                        },
                      })
                    );
                  },
                },
              ]),
              t
          );
        })(i.Component),
        V =
          (i.Component,
            (function (e) {
              function t(e) {
                var a;
                return (
                  Object(r.a)(this, t),
                    ((a = Object(o.a)(this, Object(l.a)(t).call(this, e))).handleChange = function (e) {
                      e.preventDefault();
                      var t = [],
                        s = [];
                      a.props.carsPicker
                        ? ((t = a.props.valueDestCars.slice()), (s = a.props.selDestCars.slice()), a.props.appActions.setValDest(t, "cars"))
                        : a.props.hotelsPicker || ((t = a.props.valueDest.slice()), (s = a.props.selDest.slice()), a.props.appActions.setValDest(t)),
                        (t[a.props.index][a.props.where] = e.target.value);
                      var r = e.target.value;
                      if (e.target.value.length > 1) {
                        var n = k.r + e.target.value + "&hl=" + a.props.lang.value;
                        z.a
                          .get(n)
                          .catch(function (e) {})
                          .then(function (e) {
                            if (e)
                              if ((a.props.appActions.setAcList(e.data), console.log("AC HELPRER REQ-RES", "\n", n, "\n", e.data), 3 === r.length)) {
                                for (var t = 0; t < e.data.length; t++)
                                  if (e.data[t].value.toUpperCase() === r.toUpperCase()) {
                                    (s[a.props.index][a.props.where] = e.data[t]), a.props.carsPicker ? a.props.appActions.setSelDest(s, "cars") : a.props.appActions.setSelDest(s);
                                    break;
                                  }
                              } else
                                s[a.props.index][a.props.where] &&
                                null !== s[a.props.index][a.props.where] &&
                                s[a.props.index][a.props.where].value &&
                                ((s[a.props.index][a.props.where] = null), a.props.carsPicker ? a.props.appActions.setSelDest(s, "cars") : a.props.appActions.setSelDest(s));
                          });
                      } else 0 === e.target.value.length && a.props.appActions.setAcList([]);
                    }),
                    (a.cityInput = c.a.createRef()),
                    a
                );
              }
              return (
                Object(p.a)(t, e),
                  Object(n.a)(t, [
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          t = this.props.t,
                          a = [];
                        return (
                          this.props.carsPicker ? (a = this.props.valueDestCars.slice()) : this.props.hotelsPicker || (a = this.props.valueDest.slice()),
                            c.a.createElement(
                              P.a.Group,
                              null,
                              c.a.createElement(P.a.Control, {
                                className: !this.props.carsPicker && !this.props.hotelsPicker && this.props.redText && "text-danger",
                                type: "text",
                                placeholder: "from" === this.props.where ? t("FROM") : t("TO"),
                                "aria-label": this.props.where,
                                value: a[this.props.index][this.props.where],
                                onChange: function (t) {
                                  return e.handleChange(t);
                                },
                              })
                            )
                        );
                      },
                    },
                  ]),
                  t
              );
            })(i.Component)),
        K = (function (e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var s = arguments.length, n = new Array(s), p = 0; p < s; p++) n[p] = arguments[p];
            return (
              ((a = Object(o.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(n)))).setValDest = function (e) {
                a.props.carsPicker ? a.props.appActions.setValDest(e, "cars") : a.props.hotelsPicker ? a.props.appActions.setValDest(e, "hotels") : a.props.appActions.setValDest(e);
              }),
                (a.setSelDest = function (e) {
                  a.props.carsPicker ? a.props.appActions.setSelDest(e, "cars") : a.props.hotelsPicker ? a.props.appActions.setSelDest(e, "hotels") : a.props.appActions.setSelDest(e);
                }),
                (a.selectCity = function (e, t, s, r, n) {
                  (t[r][n] = s),
                    (e[r][n] = s.value + (s.name ? " - " + s.name + " (" + s.cc + ")" : "")),
                    a.props.carsPicker && "from" === n
                      ? ((t[r].to = s), (e[r].to = s.value + (s.name ? " - " + s.name + " (" + s.cc + ")" : "")))
                      : a.props.hotelsPicker ||
                      ("to" === n &&
                      t[r + 1] &&
                      ((null !== t[r + 1].from && s.value !== t[r + 1].from.value) || null === t[r + 1].from) &&
                      ((t[r + 1].from = s), (e[r + 1].from = s.value + (s.name ? " - " + s.name + " (" + s.cc + ")" : ""))),
                      "round" === a.props.tripType && "from" === n && t[r + 1] && ((t[r + 1].to = s), (e[r + 1].to = s.value + (s.name ? " - " + s.name + " (" + s.cc + ")" : "")))),
                    a.setSelDest(t),
                    a.setValDest(e),
                    setTimeout(function () {
                      return a.props.appActions.setAcList([]);
                    }, 200);
                }),
                (a.blurThis = function (e, t, s, r) {
                  if (e[r][s] && e[r][s].value && t[r][s].toUpperCase() === e[r][s].value.toUpperCase()) {
                    var n = t.slice();
                    (n[r][s] = e[r][s].value + (e[r][s].name ? " - " + e[r][s].name + " (" + e[r][s].cc + ")" : "")), a.setValDest(n);
                  }
                  a.props.sbFocus === a.props.itemId &&
                  setTimeout(function () {
                    return a.props.appActions.setSbFocus("none");
                  }, 200);
                }),
                (a.focusThis = function (e, t, s, r) {
                  d.scroller.scrollTo(a.props.itemId, { duration: 1e3, delay: 100, smooth: !0 }), a.props.appActions.setSbFocus(a.props.itemId);
                  for (var n = 0; n < t.length; n++) s === n && ((t[s][r] = null), (e[s][r] = ""), a.setSelDest(t), a.setValDest(e));
                }),
                a
            );
          }
          return (
            Object(p.a)(t, e),
              Object(n.a)(t, [
                {
                  key: "componentWillReceiveProps",
                  value: function (e) {
                    e.sbFocus !== this.props.sbFocus && this.props.appActions.setAcList([]);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.where,
                      a = this.props.index,
                      s = [],
                      r = [];
                    return (
                      this.props.carsPicker
                        ? ((s = this.props.valueDestCars.slice()), (r = this.props.selDestCars.slice()))
                        : this.props.hotelsPicker || ((s = this.props.valueDest.slice()), (r = this.props.selDest.slice())),
                        "hotels" === this.props.where
                          ? c.a.createElement("div", null)
                          : c.a.createElement(
                            "div",
                            { dir: this.props.rightToLeft ? "rtl" : "ltr" },
                            c.a.createElement(
                              W.a,
                              {
                                onOutsideClick: function () {
                                  return e.blurThis(r, s, t, a);
                                },
                              },
                              c.a.createElement(D.a, { className: "d-block d-sm-none" }, c.a.createElement(d.Element, { name: this.props.itemId })),
                              c.a.createElement(
                                S.a,
                                {
                                  key: this.props.itemId,
                                  id: this.props.itemId,
                                  show: !0,
                                  onFocus: function () {
                                    return e.focusThis(s, r, a, t);
                                  },
                                },
                                c.a.createElement(S.a.Toggle, Object.assign({ as: V }, this.props, { where: t, index: a })),
                                c.a.createElement(
                                  S.a.Menu,
                                  {
                                    key: this.props.acList.length,
                                    className:
                                      this.props.acList.length > 0 && this.props.sbFocus === this.props.itemId
                                        ? "multi" !== this.props.tripType
                                          ? "d-block menu1"
                                          : "d-block menu1 menu1-multi"
                                        : "d-none menu1",
                                  },
                                  this.props.acList.map(function (n, o) {
                                    return c.a.createElement(
                                      S.a.Item,
                                      {
                                        key: o,
                                        onSelect: function () {
                                          return e.selectCity(s, r, n, a, t);
                                        },
                                        className: "margin-t4 margin-b5 font14",
                                      },
                                      c.a.createElement(
                                        "div",
                                        { className: e.props.rtlTyping ? "menu1-ddown-icon text-blue margin-r-10 ddown-icon-rtl" : "menu1-ddown-icon text-blue margin-r10 margin-l-10 ddown-icon" },
                                        "city" === n.type ? c.a.createElement(N.a, { icon: x.e }) : c.a.createElement(N.a, { icon: x.t })
                                      ),
                                      c.a.createElement(
                                        "div",
                                        { className: e.props.rtlTyping ? "text-right menu1-ddown-text font14 margin-r10" : "menu1-ddown-text font14" },
                                        n.value + " - " + n.name + " (" + n.cc + ")"
                                      )
                                    );
                                  })
                                )
                              )
                            )
                          )
                    );
                  },
                },
              ]),
              t
          );
        })(i.Component),
        q = a(27),
        J = a(55),
        X = a(29),
        Q = a.n(X),
        Z = a(511),
        $ = a.n(Z),
        ee = (function (e) {
          function t(e, a) {
            var s;
            return (
              Object(r.a)(this, t),
                ((s = Object(o.a)(this, Object(l.a)(t).call(this, e, a))).handleSelect = function (e) {
                  e || (e = -1), s.props.appActions.showRooms(s.props.showRooms, e.toString());
                }),
                (s.addRoom = function () {
                  if (s.props.numPeople.adult + s.props.numPeople.infant + s.props.numPeople.child >= ("hf" === s.props.sType ? q.d : q.c)) return s.setState({ messageNumPeople: !0 });
                  var e = s.props.rooms.slice(0);
                  e.push([1, 0, []]), s.props.appActions.setRooms(e), s.handleSelect((e.length - 1).toString()), s.calculateNumPeople(e);
                }),
                (s.delRoom = function (e) {
                  if (s.props.rooms.length > 1) {
                    var t = s.props.rooms.slice(0);
                    t.splice(e, 1), s.props.appActions.setRooms(t), s.handleSelect((t.length - 1).toString()), s.calculateNumPeople(t);
                  }
                  s.setState({ childAgeOpen: -1 });
                }),
                (s.totalGuests = function (e) {
                  var t = 0;
                  if ("all" === e) for (var a = 0; a < s.props.rooms.length; a++) t = t + s.props.rooms[a][0] + s.props.rooms[a][1];
                  else if ("a" === e) for (var r = 0; r < s.props.rooms.length; r++) t += s.props.rooms[r][0];
                  else if ("c" === e) for (var n = 0; n < s.props.rooms.length; n++) t += s.props.rooms[n][1];
                  return t;
                }),
                (s.calculateNumPeople = function (e) {
                  var t = Q()(s.props.numPeople);
                  (t.adult = 0), (t.infant = 0), (t.child = 0);
                  for (var a = 0; a < e.length; a++)
                    if (((t.adult = t.adult + e[a][0]), e[a][2] && e[a][2].length > 0)) for (var r = 0; r < e[a][2].length; r++) e[a][2][r] < 2 ? ++t.infant : e[a][2][r] < 12 ? ++t.child : ++t.adult;
                    else t.adult = t.adult + e[a][1];
                  s.props.appActions.setNumPeople(t);
                }),
                (s.calcPeople = function (e, t, a, r) {
                  var n = s.props.numPeople.adult + s.props.numPeople.infant + s.props.numPeople.child;
                  if ("add" === r && n >= ("hf" === s.props.sType ? q.d : q.c)) return s.setState({ messageNumPeople: !0 });
                  var o = s.props.rooms.slice(0);
                  "add" === r && t < ("hf" === s.props.sType ? q.d : q.c) ? (++t, 2 === e && o[a][2].push(1)) : "sub" === r && ((1 === e && t > 1) || (2 === e && t > 0)) && (--t, 2 === e && o[a][2].pop()),
                    1 === e ? ((o[a] = [t, s.props.rooms[a][1], s.props.rooms[a][2]]), s.props.appActions.setRooms(o)) : 2 === e && ((o[a] = [s.props.rooms[a][0], t, s.props.rooms[a][2]]), s.props.appActions.setRooms(o)),
                    s.calculateNumPeople(o);
                }),
                (s.changeChildAge = function (e, t, a) {
                  s.setState({ childAgeOpen: -1 });
                  var r = s.props.rooms.slice(0);
                  (r[e][2][t] = a), s.props.appActions.setRooms(r), s.calculateNumPeople(r);
                }),
                (s.toggleDropdown = function () {
                  s.props.appActions.showRooms(!s.props.showRooms, s.props.activeRoom);
                }),
                (s.adultsChildren = function () {
                  return c.a.createElement(
                    "span",
                    null,
                    c.a.createElement("span", null, s.props.t("ADULTS").toLowerCase()),
                    ":\xa0",
                    c.a.createElement("span", { className: "font-large font-light" }, s.totalGuests("a")),
                    ",\xa0",
                    c.a.createElement("span", null, s.props.t("SMALL_CHILDRENS").toLowerCase()),
                    ":\xa0",
                    c.a.createElement("span", { className: "font-large font-light" }, s.totalGuests("c")),
                    "\xa0\xa0\xa0"
                  );
                }),
                (s.state = { showRoom: 0, childAgeOpen: -1, open: !1, messageNumPeople: !1 }),
                s
            );
          }
          return (
            Object(p.a)(t, e),
              Object(n.a)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.props.rooms && !this.props.rooms[0][2] && this.props.appActions.setRooms([[1, 0, []]]), this.setState({ showRoom: this.props.rooms.length - 1 });
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    this.calculateNumPeople(this.props.rooms);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.t;
                    return c.a.createElement(
                      "div",
                      { className: "dropdown1" },
                      this.state.messageNumPeople &&
                      c.a.createElement(A.a, {
                        title: "Maximum number of guests is " + ("hf" === this.props.sType ? q.d : q.c),
                        type: "warning",
                        onConfirm: function () {
                          return e.setState({ messageNumPeople: !1 });
                        },
                      }),
                      c.a.createElement(
                        S.a,
                        null,
                        c.a.createElement(S.a.Toggle, { drop: "down", className: "dropdown-1", id: "dropdown-room" }, this.adultsChildren()),
                        c.a.createElement(
                          S.a.Menu,
                          { className: "padding-lr10" },
                          this.props.rooms.map(function (a, s) {
                            return c.a.createElement(
                              $.a,
                              { key: s, className: "card-rooms" },
                              c.a.createElement(
                                "div",
                                { className: "panel-height back-color-gray1", as: $.a.Header },
                                c.a.createElement("div", { className: "d-inline float-left padding-tb5 padding-lr10 font22" }, t("ROOM"), " ", s + 1),
                                e.props.rooms.length > 1 &&
                                c.a.createElement(N.a, {
                                  icon: x.H,
                                  onClick: function () {
                                    return e.delRoom(s);
                                  },
                                  className: "float-right cursor-pointer font28 margin-t7 margin-lr-10",
                                })
                              ),
                              c.a.createElement(
                                "div",
                                null,
                                c.a.createElement(
                                  $.a.Body,
                                  null,
                                  c.a.createElement(
                                    v.a,
                                    { className: "margin-t10" },
                                    c.a.createElement(D.a, { xs: 5, className: "text-center " }, c.a.createElement(N.a, { className: "font22  text-gray", icon: x.n }), " Adult"),
                                    c.a.createElement(
                                      D.a,
                                      { xs: 7, className: "text-center" },
                                      c.a.createElement(N.a, {
                                        icon: x.p,
                                        className: "fa-2x  cursor-pointer svg",
                                        title: "Remove people",
                                        onClick: function () {
                                          return e.calcPeople(1, a[0], s, "sub");
                                        },
                                      }),
                                      c.a.createElement("span", { className: "padding-tb5 text-center  padding-lr15 vertical-align-super font18" }, a[0]),
                                      c.a.createElement(N.a, {
                                        icon: x.x,
                                        className: "fa-2x cursor-pointer svg",
                                        title: "Add people",
                                        onClick: function () {
                                          e.calcPeople(1, a[0], s, "add");
                                        },
                                      })
                                    )
                                  ),
                                  c.a.createElement(
                                    v.a,
                                    { className: "margin-t10" },
                                    c.a.createElement(D.a, { xs: 5, className: "text-center" }, c.a.createElement(N.a, { className: "font22 text-gray", icon: x.g }), " Child"),
                                    c.a.createElement(
                                      D.a,
                                      { xs: 7, className: "text-center" },
                                      c.a.createElement(N.a, {
                                        icon: x.p,
                                        className: "fa-2x cursor-pointer svg",
                                        title: "Remove people",
                                        onClick: function () {
                                          return e.calcPeople(2, a[1], s, "sub");
                                        },
                                      }),
                                      c.a.createElement("span", { className: "padding-tb5 text-center padding-lr15 vertical-align-super font18" }, a[1]),
                                      c.a.createElement(N.a, {
                                        icon: x.x,
                                        className: "fa-2x cursor-pointer svg",
                                        title: "Add people",
                                        onClick: function () {
                                          e.calcPeople(2, a[1], s, "add");
                                        },
                                      })
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "margin-t10" },
                                    a[2] &&
                                    a[2].map(function (t, a) {
                                      return c.a.createElement(
                                        "div",
                                        { key: a },
                                        c.a.createElement(
                                          f.a,
                                          {
                                            variant: "none",
                                            className: "btn-room-people padding0 margin0",
                                            onClick: function () {
                                              return e.setState({ childAgeOpen: e.state.childAgeOpen !== s.toString() + a ? s.toString() + a : -1 });
                                            },
                                          },
                                          c.a.createElement("span", null, "Child's age: ", c.a.createElement("strong", null, e.props.rooms[s][2][a]))
                                        ),
                                        e.state.childAgeOpen === s.toString() + a &&
                                        c.a.createElement(
                                          v.a,
                                          null,
                                          Object(J.a)(18).map(function (t, r) {
                                            return c.a.createElement(
                                              D.a,
                                              { xs: 3, sm: 2, key: r, className: "padding-5 text-center" },
                                              c.a.createElement(
                                                "button",
                                                {
                                                  className: e.props.rooms[s][2][a] === t ? "btn-round-0" : "btn-round-1",
                                                  onClick: function () {
                                                    return e.changeChildAge(s, a, t);
                                                  },
                                                },
                                                t
                                              )
                                            );
                                          })
                                        )
                                      );
                                    })
                                  ),
                                  c.a.createElement("div", { className: "clear-all" })
                                )
                              )
                            );
                          }),
                          this.props.rooms.length < 4 &&
                          c.a.createElement(
                            f.a,
                            {
                              className: "width-100 padding-10",
                              onClick: function () {
                                e.addRoom(),
                                  e.setState(function (e) {
                                    return { showRoom: e.showRoom + 1 };
                                  });
                              },
                            },
                            c.a.createElement(N.a, { icon: x.w }),
                            " Add Room"
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
          );
        })(i.Component),
        te = (a(629), i.Component, a(630)),
        ae = a.n(te),
        se = (function (e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
                ((a = Object(o.a)(this, Object(l.a)(t).call(this, e))).handleChange = function (e) {
                  a.props.appActions.setLatLng(0, 0, e, 15);
                }),
                (a.handleSelect = function (e, t, s) {
                  Object(te.geocodeByPlaceId)(t)
                    .then(function (e) {
                      return Object(te.getLatLng)(e[0]);
                    })
                    .then(function (t) {
                      a.props.appActions.setLatLng(t.lat, t.lng, e, s.types.indexOf("locality") >= 0 ? 15 : s.types.indexOf("sublocality") >= 0 ? 10 : 100);
                      var r = a.props.valueDest.slice(),
                        n = a.props.selDest.slice(),
                        o = "".concat(k.k, "flights.php?method=closest_airport&lat=").concat(t.lat, "&lon=").concat(t.lng, "&limit=20");
                      console.log("CLOSEST AIRPORT", "\n", o),
                        z.a.get(o).then(function (e) {
                          var t = { value: e.data[0].airportcode },
                            s = e.data[0].airportcode + " - " + e.data[0].cityname;
                          (n[0].to = t), (r[0].to = s), (n[1].from = t), (r[1].from = s), a.props.appActions.setSelDest(n), a.props.appActions.setValDest(r);
                        });
                    })
                    .catch(function (e) {
                      return console.error("Error", e);
                    });
                }),
                a
            );
          }
          return (
            Object(p.a)(t, e),
              Object(n.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.userInfo && this.props.userInfo.hasOwnProperty("location") ? this.props.userInfo.location : null,
                      a = this.props.userInfo && this.props.userInfo.hasOwnProperty("location") ? 1e6 : null,
                      s = { location: t ? new google.maps.LatLng(t.latitude, t.longitude) : null, radius: t ? a : null, types: ["geocode"] };
                    return c.a.createElement(ae.a, { value: this.props.city ? this.props.city : "", onChange: this.handleChange, onSelect: this.handleSelect, searchOptions: s }, function (t) {
                      var a = t.getInputProps,
                        s = t.suggestions,
                        r = t.getSuggestionItemProps;
                      return c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(
                          "input",
                          Object.assign({}, a({ placeholder: e.props.t("DESTINATIONS"), className: "location-search--input rad0 txt18" }), {
                            onClick: function () {
                              d.scroller.scrollTo("autocomplete", { duration: 500, smooth: !0 });
                            },
                            onFocus: function () {
                              return e.props.appActions.setLatLng(0, 0, "", 15);
                            },
                          })
                        ),
                        c.a.createElement(
                          "div",
                          { className: "autocomplete-dropdown-container" },
                          s
                            .filter(function (e) {
                              return e.types.indexOf("locality") >= 0 || e.types.indexOf("sublocality") >= 0 || (e.types.indexOf("political") >= 0 && e.types.indexOf("administrative_area_level_1") < 0);
                            })
                            .map(function (e, t) {
                              var a = e.active ? "suggestion-item--active" : "suggestion-item";
                              return c.a.createElement(
                                "div",
                                Object.assign({ key: e.placeId + t }, r(e, { className: a })),
                                c.a.createElement("span", null, c.a.createElement(N.a, { icon: x.o, className: " txt-blue-1" }), " ", e.description)
                              );
                            })
                        )
                      );
                    });
                  },
                },
              ]),
              t
          );
        })(c.a.Component),
        re = (function (e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
                ((a = Object(o.a)(this, Object(l.a)(t).call(this, e))).manageReturnType = function (e) {
                  if ((a.props.appActions.setReturnType(e), "changed" === e && ("" === a.props.valueDest[0].to || "" === a.props.valueDest[0].from))) {
                    var t = a.props.selDest.slice(),
                      s = a.props.valueDest.slice();
                    (t[1].to = a.props.selDest[0].from),
                      (s[1].to = a.props.valueDest[0].from),
                      (t[1].from = a.props.selDest[0].to),
                      (s[1].from = a.props.valueDest[0].to),
                      a.props.appActions.setSelDest(t),
                      a.props.appActions.setValDest(s);
                  }
                }),
                (a.handleDateChange = function (e, t) {
                  if (-1 === t) {
                    var s = e.slice();
                    ((null !== e[1] && M()(e[0]) > M()(e[1])) || null === e[1]) && (s[1] = M()(e[0]).add(1, "days")), a.props.appActions.setDate(s);
                  } else {
                    var r = a.props.selDates.slice();
                    r[t] = e;
                    for (var n = t + 1; n < r.length; n++) n < r.length && M()(r[n]) < M()(r[n - 1]) && (r[n] = r[n - 1]);
                    a.props.appActions.setDate(r);
                  }
                  a.props.appActions.setHotelsStartDate(e[0]), a.props.appActions.setHotelsEndDate(e[1]);
                }),
                (a.handleHotelsDateChange = function (e, t) {
                  var s = t,
                    r = a.props.selDates.slice();
                  if (
                    (((null !== t && M()(e) > M()(t)) || null === t) && (s = M()(e).add(1, "days")),
                      a.props.appActions.setHotelsStartDate(e),
                      a.props.appActions.setHotelsEndDate(s),
                    "hf" === a.state.searchTypeUI.code && a.props.appActions.setDate([e, s]),
                      a.props.editFlightDates)
                  ) {
                    var n = !1;
                    e && r[0] && M()(e) < M()(r[0]) && ((r[0] = e), (n = !0)), s && r[1] && M()(t) > M()(r[1]) && ((r[1] = s), (n = !0)), n && a.props.appActions.setDate(r);
                  }
                }),
                (a.manageFlights = function (e, t) {
                  var s = a.props.selDest.slice(),
                    r = a.props.selDates.slice(),
                    n = a.props.valueDest.slice(),
                    o = a.state.focusDates.slice();
                  "add" === e
                    ? (s.push({ from: a.props.selDest[a.props.selDest.length - 1].to, to: null }),
                      n.push({ from: a.props.valueDest[a.props.valueDest.length - 1].to, to: "" }),
                    s.length > 2 && r.push(M()(a.props.selDates[a.props.selDates.length - 1]).add(1, "days")),
                      o.push(null))
                    : a.props.selDest.length > 1 && (a.props.selDest.length > 2 && (s.splice(t, 1), r.splice(t, 1), n.splice(t, 1), o.splice(t, 1)), 2 === a.props.selDest.length && a.props.appActions.setTripType("round")),
                    a.props.appActions.setSelDest(s),
                    a.props.appActions.setDate(r),
                    a.props.appActions.setValDest(n),
                    a.setState({ focusDates: o });
                }),
                (a.changeTripType = function (e, t) {
                  switch ((a.props.appActions.setTripType(e), e)) {
                    case "round":
                      if ((a.manageReturnType("standard"), M()(a.props.selDates[1]).diff(M()(a.props.selDates[0])) < 0)) {
                        var s = a.props.selDates.slice();
                        (s[1] = M()(s[0]).add(1, "days")), a.props.appActions.setDate(s);
                      }
                      var r = a.props.selDest.slice(),
                        n = a.props.valueDest.slice();
                      (r[1].from = r[0].to), (r[1].to = r[0].from), (n[1].from = n[0].to), (n[1].to = n[0].from);
                      break;
                    case "one":
                      break;
                    case "multi":
                      2 === a.props.selDest.length && a.manageFlights("add", null);
                  }
                }),
                (a.manageFlightDates = function () {
                  if (a.props.editFlightDates) {
                    var e = a.props.selDates.slice();
                    (e[0] = a.props.start), (e[1] = a.props.end), a.props.appActions.setDate(e);
                  }
                  a.props.appActions.setEditFlightDates(!a.props.editFlightDates);
                }),
                (a.managemanageNearby = function (e, t, s) {
                  var r = a.props.nearbyArp.slice();
                  (r[t][e] = s ? 1 : 0), a.props.appActions.setNearbyArp(r);
                }),
                (a.toggleCalendar = function () {
                  a.setState({ showModalDate: !a.state.showModalDate });
                }),
                (a.toggleCityChooser = function (e, t) {
                  a.props.appActions.setSbWhere(e), a.props.appActions.setSbIndex(t), a.setState({ showModalCity: !a.state.showModalCity });
                }),
                (a.manageSearchType = function (e) {
                  a.setState({ searchTypeUI: e }),
                  "hf" !== e.code && a.props.editFlightDates && a.manageFlightDates(),
                  "h" !== e.code && Object(I.h)(a.props.numPeople) > 9 && (a.props.appActions.setRooms([[1, 0, []]]), a.props.appActions.setNumPeople(k.x));
                }),
                (a.submitSearch = function (e) {
                  e.preventDefault();
                  var t,
                    s = "",
                    r = "",
                    n = a.props.selDest.slice(),
                    o = a.props.valueDest.slice(),
                    l = [];
                  if (a.state.searchTypeUI.code.indexOf("f") >= 0) {
                    for (var p = "round" === a.props.tripType ? ("standard" === a.props.returnType ? 1 : 2) : "one" === a.props.tripType ? 1 : a.props.selDest.length, i = 0; i < p; i++)
                      if ((a.state.searchTypeUI.code.indexOf("f") >= 0 && null === a.props.selDest[i].from) || null === a.props.selDest[i].to) return void a.props.appActions.setAlert("sb-alert");
                    switch (a.props.tripType) {
                      case "round":
                        a.props.selDest[0].from.value === a.props.selDest[0].to.value && (l = [0]),
                          (s =
                            "&T1=" +
                            a.props.selDest[0].from.value +
                            "&T2=" +
                            a.props.selDest[0].to.value +
                            "&T3=" +
                            ("standard" === a.props.returnType ? a.props.selDest[0].to.value : a.props.selDest[1].from.value) +
                            "&T4=" +
                            ("standard" === a.props.returnType ? a.props.selDest[0].from.value : a.props.selDest[1].to.value) +
                            "&outdate1=" +
                            M()(a.props.selDates[0]).locale("en").format("YYYY-MM-DD") +
                            "&outdate2=" +
                            M()(a.props.selDates[1]).locale("en").format("YYYY-MM-DD"));
                        break;
                      case "one":
                        a.props.selDest[0].from.value === a.props.selDest[0].to.value && (l = [0]),
                          (n = a.props.selDest.slice(0, 1)),
                          (o = a.props.valueDest.slice(0, 1)),
                          (s = "&T1=" + a.props.selDest[0].from.value + "&T2=" + a.props.selDest[0].to.value + "&outdate1=" + M()(a.props.selDates[0]).locale("en").format("YYYY-MM-DD"));
                        break;
                      case "multi":
                        for (var c = 0; c < a.props.selDest.length; c++)
                          a.props.selDest[c].from.value === a.props.selDest[c].to.value && l.push(c),
                            (s =
                              s +
                              "&T" +
                              (2 * c + 1) +
                              "=" +
                              a.props.selDest[c].from.value +
                              "&T" +
                              (2 * c + 2) +
                              "=" +
                              a.props.selDest[c].to.value +
                              "&outdate" +
                              (c + 1) +
                              "=" +
                              M()(a.props.selDates[c]).locale("en").format("YYYY-MM-DD"));
                    }
                    r =
                      "&D1=" +
                      a.props.numPeople.adult +
                      "&D2=" +
                      a.props.numPeople.child +
                      "&D3=" +
                      a.props.numPeople.infant +
                      "&D4=" +
                      a.props.numPeople.senior +
                      "&D5=" +
                      a.props.numPeople.youth +
                      "&cabin=" +
                      a.props.selectedClass;
                  }
                  var m = {
                    url: (t =
                      ("h" !== a.state.searchTypeUI.code
                        ? s +
                        r +
                        ("one" === a.props.tripType ? "&trip=one" : s.includes("&T5=") ? (s.includes("&T14") ? "&trip=round&world=1" : "&trip=round&multi=1") : "&trip=round") +
                        k.z +
                        "&curr=" +
                        a.props.curr.cc +
                        ("--" !== a.state.selectedService ? "&forceService=" + a.state.selectedService : "")
                        : "") +
                      "&searchType=" +
                      a.state.searchTypeUI.code +
                      ("f" !== a.state.searchTypeUI.code
                        ? ("none" === a.props.config.hotelsFS ? "" : "&forceServiceH=" + a.props.config.hotelsFS) +
                        "&lng=" +
                        a.props.lng +
                        "&lat=" +
                        a.props.lat +
                        "&city=" +
                        encodeURIComponent(a.props.city.split(", ").join(",")) +
                        "&checkin=" +
                        M()(a.props.start).locale("en").format("YYYY-MM-DD") +
                        "&checkout=" +
                        M()(a.props.end).locale("en").format("YYYY-MM-DD") +
                        "&rooms=" +
                        Object(J.c)(a.props.rooms) +
                        "&roomsNum=" +
                        a.props.rooms.length +
                        "&rad=" +
                        (a.props.searchRad ? a.props.searchRad : 25)
                        : "")),
                    curr: a.props.curr,
                    lang: a.props.lang,
                    dest: n,
                    destVal: o,
                    dates: a.props.selDates,
                    people: a.props.numPeople,
                    totalNumPeople: a.props.numPeople.adult + a.props.numPeople.child + a.props.numPeople.infant + a.props.numPeople.senior + a.props.numPeople.youth,
                    type: a.props.tripType,
                    class: a.props.selectedClass,
                    searchType: a.state.searchTypeUI,
                    city: a.props.city,
                    lng: a.props.lng,
                    lat: a.props.lat,
                    rooms: a.props.rooms,
                  };
                  a.props.appActions.setSearchType(a.state.searchTypeUI),
                    (window.searchUrl = t),
                    console.log("URLS - window - flightsSearchInfo.url", "\n", t, "\n", m.url),
                    a.state.searchTypeUI.code.indexOf("f") >= 0 && l && 0 === l.length
                      ? (a.props.sbShow && a.props.appActions.setSbShow(!1),
                      a.state.searchTypeUI.code.indexOf("f") >= 0 && a.props.appActions.fetchFlightsData(t, m, !1, !1, a.props.fromHome, a.props.fromSearch, a.props.fromError))
                      : a.state.searchTypeUI.code.indexOf("f") >= 0 && (a.setState({ errorCities: l }), a.props.appActions.setAlert("sb-alert")),
                    a.state.searchTypeUI.code.indexOf("h") >= 0 && 0 === a.props.lat && 0 === a.props.lng
                      ? a.props.appActions.setAlert("sb-alert")
                      : a.state.searchTypeUI.code.indexOf("h") >= 0 &&
                      a.props.appActions.fetchData(
                        a.props.city,
                        a.props.start,
                        a.props.end,
                        a.props.curr.cc,
                        a.props.lang.value,
                        a.props.lat,
                        a.props.lng,
                        a.props.rooms,
                        a.props.searchRad,
                        a.props.config.hotelsFS,
                        "US",
                        a.state.searchTypeUI.code
                      ),
                    a.state.searchTypeUI.code.indexOf("h") < 0 ? a.props.appActions.setResultsTab("flights") : a.props.appActions.setResultsTab("hotels");
                }),
                (a.rtl = c.a.createRef()),
                (a.ltr2 = c.a.createRef()),
                (a.btn = c.a.createRef()),
                (a.center1 = c.a.createRef()),
                (a.state = { errorCities: [], focusDates: [!1], showModalCity: !1, showModalDate: !1, rtl: !1, servicesList: [], selectedService: "--", showAddInfo: !1, searchTypeUI: a.props.searchType }),
                a
            );
          }
          return (
            Object(p.a)(t, e),
              Object(n.a)(t, [
                {
                  key: "componentWillMount",
                  value: function () {
                    if (this.state.focusDates.length !== this.props.selDest.length) {
                      for (var e = this.state.focusDates.slice(), t = 0; t < this.props.selDates.length - this.state.focusDates.length; t++) e.push(null);
                      this.setState({ focusDates: e });
                    }
                    this.props.multi && this.changeTripType("multi"),
                    "2" === this.props.barType && this.changeTripType("one"),
                    this.props.config.cabinClass || (this.props.selectedClass && "Y" === this.props.selectedClass) || this.props.appActions.setSelectedClass("Y");
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    if (document.querySelector("#userLocation")) {
                      var t = JSON.parse(document.querySelector("#userLocation").getAttribute("data-location"));
                      t.ip &&
                      Object(I.k)({ ip: t.ip, token: this.props.membersPanel.token }).then(function (t) {
                        t &&
                        z.a.get("/data/services.json").then(function (a) {
                          return e.setState({ servicesList: a.data.list, showAddInfo: t });
                        });
                      });
                    }
                  },
                },
                {
                  key: "componentWillReceiveProps",
                  value: function (e) {
                    var t = e.lang.value;
                    k.N.includes(t.toLowerCase().trim()) &&
                    (Object(I.b)(this.rtl.current)("rtl"),
                      [this.ltr2.current, document.querySelector("div.DateRangePickerInput.DateRangePickerInput_1"), this.center1.current, this.btn.current].forEach(function (e) {
                        return Object(I.b)(e)({ textAlign: "center", direction: "ltr" });
                      }));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.t,
                      a = [
                        { label: t("ROUND_TRIP"), value: "round" },
                        { label: t("ONE_WAY"), value: "one" },
                        { label: t("MULTI_TRIP"), value: "multi" },
                      ],
                      s = {},
                      r = {},
                      n = {},
                      o = { xs: 12, sm: 12, md: 6, lg: 3 },
                      l = { xs: 12, sm: 6, md: 3, lg: 3 },
                      p = { xs: 12, sm: 12, md: 1, lg: 1 },
                      i = { lg: 2 },
                      m = { xs: 12, md: { span: 4, offset: 7 }, lg: { span: 3, offset: 8 } };
                    if ("1" === this.props.barType || "2" === this.props.barType)
                      (o = { xs: 12, sm: 12, md: 12, lg: 12 }),
                        (l = { xs: 12, sm: 12, md: 12, lg: 12 }),
                        (p = { xs: 12, sm: 12, md: 12, lg: 12 }),
                        (i = { lg: 12 }),
                        (m = { xs: 12, md: { span: 12, offset: 0 }, lg: { span: 12, offset: 0 } }),
                        (s = "multi" === this.props.tripType ? { xs: 8, sm: 8, md: 8, lg: 8 } : { xs: 12, sm: 12, md: 12, lg: 12 }),
                        (r = { xs: 12, sm: 12, md: 12 }),
                        (n = "multi" === this.props.tripType ? { xs: 4, sm: 4, md: 4, lg: 4 } : "2" === this.props.barType ? { xs: 6, sm: 6, md: 6, lg: 6 } : { xs: 12, sm: 12, md: 12, lg: 12 });
                    else
                      switch (this.props.tripType) {
                        case "round":
                        case "one":
                          (s = { xs: 12, sm: 12, md: 12, lg: 6 }), (r = { xs: 12, sm: 12, md: 6 }), (n = { xs: 12, sm: 12, md: 6, lg: 3 });
                          break;
                        case "multi":
                          (s = { xs: 8, sm: 9, md: 8, lg: 8 }),
                            (r = { xs: 12, sm: "multi" === this.props.tripType ? 12 : 6, md: 6 }),
                            (n = { xs: 4, sm: 3, md: 3, lg: 3 }),
                            (o = { xs: 12, sm: 12, md: { span: 4, offset: this.props.rightToLeft ? 0 : 4 }, lg: { span: 3, offset: this.props.rightToLeft ? 0 : 5 } });
                      }
                    return c.a.createElement(
                      H.a,
                      { className: "mx-auto padding-tb15 text-center" },
                      "sb-alert" === this.props.alert &&
                      c.a.createElement(A.a, {
                        title: t("ERROR_NOT_FOUND"),
                        type: "warning",
                        onConfirm: function () {
                          return e.props.appActions.setAlert("none");
                        },
                      }),
                      c.a.createElement(
                        h.a,
                        {
                          show: this.state.showModalCity,
                          onHide: function () {
                            return e.toggleCityChooser(null, null);
                          },
                          className: "modal-city",
                        },
                        c.a.createElement(h.a.Header, { closeButton: !0 }, c.a.createElement(h.a.Title, null, null !== this.props.sbWhere)),
                        c.a.createElement(h.a.Body, null, null !== this.props.sbWhere && null !== this.props.sbIndex && this.renderModalCity(this.props.sbWhere, this.props.sbIndex))
                      ),
                      /*this.props.selDest &&
                      this.props.selDates &&
                      this.props.numPeople &&
                      this.props.valueDest &&
                      this.props.valueDest &&
                      c.a.createElement(
                        P.a,
                        { ref: this.rtl, className: "flight-search" },
                        c.a.createElement(
                          "div",
                          { className: ("home" === this.props.page && "bg-light-transparent") + " rad6 padding-lr10 margin-b10" },
                          c.a.createElement(
                            v.a,
                            { className: ("home" === this.props.page && "border-rad-t-l border-rad-t-r") + ("home" !== this.props.page && "padding0 margin-lr-0") + " text-primary margin-b20" },
                            k.G.map(function (t, a) {
                              return c.a.createElement(
                                D.a,
                                { key: a, className: t.code !== e.state.searchTypeUI.code ? "text-gray-blue border-bottom-midtone" : "border-rad-t-l border-rad-t-r bg-primary text-white" },
                                c.a.createElement(
                                  "div",
                                  {
                                    className: "width-100 cursor-pointer padding-tb10",
                                    onClick: function () {
                                      return e.manageSearchType(t);
                                    },
                                  },
                                  c.a.createElement(
                                    "span",
                                    { className: "padding-lr5" },
                                    t.code.indexOf("h") >= 0 && c.a.createElement(N.a, { icon: x.m }),
                                    "hf" === t.code && c.a.createElement("span", null, " + "),
                                    t.code.indexOf("f") >= 0 && c.a.createElement(N.a, { icon: x.t })
                                  ),
                                  c.a.createElement("span", { className: "d-none d-md-inline-block padding-lr5" }, t.name)
                                )
                              );
                            })
                          ),
                          this.state.searchTypeUI.code.indexOf("h") >= 0 &&
                          c.a.createElement(
                            v.a,
                            { className: "padding-lr0 margin-lr-0" },
                            c.a.createElement(D.a, { xs: 12, md: 12, lg: 5, className: "margin-b18 padding-lr2 padding-tb5 height-40" }, c.a.createElement(se, this.props)),
                            c.a.createElement(
                              D.a,
                              { xs: 12, md: 6, lg: 4, className: "padding-lr2 padding-tb5" },
                              c.a.createElement(ee, Object.assign({}, this.props, { sType: this.state.searchTypeUI.code }))
                            ),
                            "h" === this.state.searchTypeUI.code &&
                            c.a.createElement(
                              D.a,
                              {
                                ref: this.ltr2,
                                xs: n.xs,
                                sm: n.sm,
                                md: n.md,
                                lg: n.lg,
                                className: this.props.rightToLeft ? "float-right text-center padding-lr2 padding-tb5" : "float-left text-center padding-lr2 padding-tb5",
                              },
                              c.a.createElement(_.DateRangePicker, {
                                startDate: M()(this.props.start),
                                startDateId: "startDhotels",
                                endDate: M()(this.props.end),
                                endDateId: "endDhotels",
                                onDatesChange: function (t) {
                                  var a = t.startDate,
                                    s = t.endDate;
                                  return e.handleHotelsDateChange(a, s);
                                },
                                focusedInput: this.state.focusedInputHotels,
                                onFocusChange: function (t) {
                                  return e.setState({ focusedInputHotels: t });
                                },
                                transitionDuration: 100,
                                hideKeyboardShortcutsPanel: !0,
                                numberOfMonths: window.innerWidth < 960 ? 1 : 2,
                                disabled: "one" === this.props.tripType && "endDate",
                                isOutsideRange: function (e) {
                                  return M()(e).startOf("day") < M()().startOf("day") || M()(e).startOf("day") > M()().add(23, "months").startOf("day");
                                },
                                minimumNights: 0,
                                displayFormat: "MMM D",
                                isRTL: this.props.rightToLeft,
                                readOnly: !0,
                                withPortal: !0,
                                renderCalendarInfo: function () {
                                  return c.a.createElement(
                                    "div",
                                    { className: "text-center margin-b10 text-light-gray " },
                                    c.a.createElement("hr", { className: "margin-t0 hr-1" }),
                                    "startDate" === e.state.focusedInputHotels
                                      ? c.a.createElement("span", { className: "font-weight-bold" }, c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("CHECK_IN")))
                                      : c.a.createElement("span", { className: "font-weight-bold" }, c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("CHECK_OUT")))
                                  );
                                },
                              }),
                              c.a.createElement(N.a, { icon: x.f, className: this.props.rightToLeft ? "calendar-icon-rtl" : "calendar-icon" })
                            )
                          ),
                          c.a.createElement("div", { className: "clear-all padding-tb5" }),
                          this.state.searchTypeUI.code.indexOf("h") < 0 &&
                          "2" !== this.props.barType &&
                          "hf" !== this.state.searchTypeUI &&
                          c.a.createElement(
                            "fieldset",
                            null,
                            c.a.createElement(
                              P.a.Group,
                              { as: v.a, key: this.props.tripType, className: "padding-lr2 margin-lr-0 padding-tb0 trip-type-check bar-font-size" },
                              a.map(function (t, a) {
                                return c.a.createElement(P.a.Check, {
                                  key: a,
                                  checked: e.props.tripType === t.value,
                                  onChange: function (t) {
                                    return e.changeTripType(t.target.value);
                                  },
                                  custom: !0,
                                  name: "flightType",
                                  type: "radio",
                                  label: t.label,
                                  id: "tripType" + a,
                                  "aria-label": t.label,
                                  className: "margin-r20 padding-tb10",
                                  value: t.value,
                                });
                              })
                            )
                          ),
                          this.state.searchTypeUI.code.indexOf("f") >= 0 &&
                          c.a.createElement(
                            v.a,
                            { className: "padding0 margin0" },
                            this.props.selDest.map(function (a, l) {
                              return c.a.createElement(
                                "div",
                                { className: "width-100", key: l },
                                ("multi" === e.props.tripType || ("multi" !== e.props.type && 0 === l)) &&
                                c.a.createElement(
                                  D.a,
                                  { xs: 12, className: "padding0" },
                                  c.a.createElement(
                                    D.a,
                                    {
                                      xs: s.xs,
                                      sm: s.sm,
                                      md: s.md,
                                      lg: s.lg,
                                      className: e.props.rightToLeft ? "city-input float-right city-input-rtl padding0" : "city-input float-left padding0",
                                    },
                                    c.a.createElement(
                                      v.a,
                                      { className: "padding0 margin0" },
                                      c.a.createElement(
                                        D.a,
                                        { xs: r.xs, sm: r.sm, md: r.md, className: "padding-lr2 padding-tb5" },
                                        c.a.createElement(K, Object.assign({}, e.props, { where: "from", index: l, itemId: "from" + l + "flight", rtlTyping: e.props.rightToLeft })),
                                        c.a.createElement(N.a, { icon: x.v, className: e.props.rightToLeft ? "plane-icon-rtl fa-flip-horizontal" : "plane-icon" })
                                      ),
                                      "2" === e.props.barType &&
                                      c.a.createElement(
                                        v.a,
                                        { className: "padding0 margin0 " },
                                        c.a.createElement(
                                          D.a,
                                          { className: "padding-lr2 bar-font-size text-bl" },
                                          c.a.createElement(P.a.Check, {
                                            key: 1,
                                            checked: 1 === e.props.nearbyArp[l].from,
                                            onChange: function (t) {
                                              return e.managemanageNearby("from", l, t.target.checked);
                                            },
                                            custom: !0,
                                            name: "returnType",
                                            label: "allow nearby airports",
                                            id: "nearby_from-" + l,
                                            "aria-label": "nearby_from",
                                            className: e.props.rightToLeft
                                              ? "1" === e.props.barType
                                                ? "padding-tb10 text-blue float-right"
                                                : "padding-tb10 text-light-gray float-right"
                                              : "1" === e.props.barType
                                                ? "padding-tb10 text-blue float-left"
                                                : "padding-tb10 text-light-gray float-left",
                                          })
                                        )
                                      ),
                                      c.a.createElement(
                                        D.a,
                                        { xs: r.xs, sm: r.sm, md: r.md, className: "padding-lr2 padding-tb5 " },
                                        c.a.createElement(K, Object.assign({}, e.props, { where: "to", index: l, itemId: "to" + l + "flight", rtlTyping: e.props.rightToLeft })),
                                        c.a.createElement(N.a, { icon: x.u, className: e.props.rightToLeft ? "plane-icon-rtl fa-flip-horizontal" : "plane-icon" })
                                      ),
                                      "2" === e.props.barType &&
                                      c.a.createElement(
                                        v.a,
                                        { className: "padding0 margin0 " },
                                        c.a.createElement(
                                          D.a,
                                          { className: "padding-lr2 bar-font-size text-bl" },
                                          c.a.createElement(P.a.Check, {
                                            key: 1,
                                            checked: 1 === e.props.nearbyArp[l].to,
                                            onChange: function (t) {
                                              return e.managemanageNearby("to", l, t.target.checked);
                                            },
                                            custom: !0,
                                            name: "returnType",
                                            label: "allow nearby airports",
                                            id: "nearby_to-" + l,
                                            "aria-label": "nearby_to",
                                            className: e.props.rightToLeft
                                              ? "1" === e.props.barType
                                                ? "padding-tb10 text-blue float-right"
                                                : "padding-tb10 text-light-gray float-right"
                                              : "1" === e.props.barType
                                                ? "padding-tb10 text-blue float-left"
                                                : "padding-tb10 text-light-gray float-left",
                                          })
                                        )
                                      )
                                    ),
                                    "2" !== e.props.barType &&
                                    "round" === e.props.tripType &&
                                    c.a.createElement(
                                      v.a,
                                      { className: "padding0 margin0 " },
                                      c.a.createElement(
                                        D.a,
                                        { className: "padding-lr2 bar-font-size text-bl" },
                                        c.a.createElement(P.a.Check, {
                                          key: 1,
                                          checked: "standard" !== e.props.returnType,
                                          onChange: function () {
                                            return e.manageReturnType("standard" === e.props.returnType ? "changed" : "standard");
                                          },
                                          custom: !0,
                                          name: "returnType",
                                          label: t("MODIFY_RETURN"),
                                          id: "returnType",
                                          "aria-label": "returnType",
                                          className: e.props.rightToLeft
                                            ? "1" === e.props.barType
                                              ? "padding-tb10 text-blue float-right"
                                              : "padding-tb10 text-light-gray float-right"
                                            : "1" === e.props.barType
                                              ? "padding-tb10 text-blue float-left"
                                              : "padding-tb10 text-light-gray float-left",
                                        })
                                      )
                                    ),
                                    "changed" === e.props.returnType &&
                                    "round" === e.props.tripType &&
                                    c.a.createElement(
                                      v.a,
                                      { className: "padding0 margin0" },
                                      c.a.createElement(
                                        D.a,
                                        { xs: r.xs, sm: r.sm, md: r.md, className: "padding-lr2 padding-tb5" },
                                        c.a.createElement(
                                          K,
                                          Object.assign({}, e.props, { where: "from", index: l + 1, itemId: "from" + (l + 1) + "flight", rtlTyping: e.props.rightToLeft })
                                        ),
                                        c.a.createElement(N.a, { icon: x.v, className: e.props.rightToLeft ? "plane-icon-rtl fa-flip-horizontal" : "plane-icon" })
                                      ),
                                      c.a.createElement(
                                        D.a,
                                        { xs: r.xs, sm: r.sm, md: r.md, className: "padding-lr2 padding-tb5" },
                                        c.a.createElement(K, Object.assign({}, e.props, { where: "to", index: l + 1, itemId: "to" + (l + 1) + "flight", rtlTyping: e.props.rightToLeft })),
                                        c.a.createElement(N.a, { icon: x.u, className: e.props.rightToLeft ? "plane-icon-rtl fa-flip-horizontal" : "plane-icon" })
                                      ),
                                      c.a.createElement(D.a, { xs: 12, className: "clear-all margin-b20" })
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "1" === e.props.barType ? "datepickerSingle" : "2" === e.props.barType ? "datepickerSingleType2" : "" },
                                    ("multi" === e.props.tripType || "2" === e.props.barType) &&
                                    c.a.createElement(
                                      D.a,
                                      {
                                        xs: n.xs,
                                        sm: n.sm,
                                        md: n.md,
                                        lg: n.lg,
                                        className: e.props.rightToLeft ? "float-right padding-lr2 padding-tb5" : "float-left padding-lr2 padding-tb5",
                                      },
                                      c.a.createElement(_.SingleDatePicker, {
                                        date: M()(e.props.selDates[l]),
                                        onDateChange: function (t) {
                                          return e.handleDateChange(t, l);
                                        },
                                        focused: e.state.focusDates[l],
                                        onFocusChange: function () {
                                          var t = e.state.focusDates.slice();
                                          (t[l] = !t[l]), e.setState({ focusDates: t });
                                        },
                                        hideKeyboardShortcutsPanel: !0,
                                        id: "datepicker-1",
                                        numberOfMonths: window.innerWidth < 960 ? 1 : 2,
                                        isOutsideRange: function (t) {
                                          return (
                                            Object(_.isInclusivelyAfterDay)(0 !== l ? M()(e.props.selDates[l - 1]).subtract(1, "day") : M()().subtract(1, "day"), t) ||
                                            M()(t).startOf("day") < M()().startOf("day") ||
                                            M()(t).startOf("day") > M()().add(11, "months").startOf("day")
                                          );
                                        },
                                        withPortal: !0,
                                        transitionDuration: 100,
                                        displayFormat: "MMM D",
                                        isRTL: e.props.rightToLeft,
                                        readOnly: !0,
                                      }),
                                      "2" === e.props.barType && c.a.createElement(N.a, { icon: x.f, className: e.props.rightToLeft ? "calendar-icon-rtl" : "calendar-icon" })
                                    )
                                  ),
                                  "2" === e.props.barType &&
                                  c.a.createElement(
                                    D.a,
                                    { xs: n.xs, sm: n.sm, md: n.md, lg: n.lg, className: e.props.rightToLeft ? "float-right padding-lr2 padding-tb5" : "float-left padding-lr2 padding-tb5" },
                                    c.a.createElement(
                                      S.a,
                                      null,
                                      c.a.createElement(S.a.Toggle, { id: "dropdownPeople", className: "dropdown-1 text-center" }, " +/- ", e.props.rangeDates, " ", t("DAYS")),
                                      c.a.createElement(
                                        S.a.Menu,
                                        { className: "min-width-100-pcent" },
                                        Object(I.m)(4).map(function (a, s) {
                                          return c.a.createElement(
                                            S.a.Item,
                                            { key: s },
                                            c.a.createElement(
                                              D.a,
                                              {
                                                cs: 12,
                                                style: { minWidth: "100%" },
                                                onClick: function () {
                                                  return e.props.appActions.setRangeDates(a);
                                                },
                                              },
                                              c.a.createElement(v.a, null, c.a.createElement(D.a, { xs: 12, className: "padding-tb10 text-center" }, " +/- ", a, " ", t("DAYS")))
                                            )
                                          );
                                        }),
                                        c.a.createElement("div", { className: "clearfix padding-tb5" })
                                      )
                                    )
                                  ),
                                  "multi" === e.props.tripType &&
                                  c.a.createElement(
                                    D.a,
                                    {
                                      xs: p.xs,
                                      md: p.md,
                                      className: "float-left padding0 margin-t7",
                                      onClick: function () {
                                        e.manageFlights("remove", l);
                                      },
                                    },
                                    "1" === e.props.barType
                                      ? c.a.createElement(
                                        "div",
                                        { className: e.props.rightToLeft ? "button-remove-rtl-1 cursor-pointer text-center" : "button-remove-1 cursor-pointer text-center" },
                                        c.a.createElement(N.a, { icon: x.G })
                                      )
                                      : c.a.createElement(
                                        "div",
                                        { className: e.props.rightToLeft ? "button-remove-rtl cursor-pointer text-center" : "button-remove cursor-pointer text-center" },
                                        c.a.createElement(N.a, { icon: x.G })
                                      )
                                  ),
                                  "multi" !== e.props.tripType &&
                                  c.a.createElement(
                                    D.a,
                                    {
                                      xs: o.xs,
                                      sm: o.sm,
                                      md: o.md,
                                      lg: o.lg,
                                      className: e.props.rightToLeft ? "float-right text-center padding-lr2 padding-tb5" : "float-left text-center padding-lr2 padding-tb5",
                                    },
                                    c.a.createElement(j, e.props)
                                  ),
                                  "2" !== e.props.barType &&
                                  "multi" !== e.props.tripType &&
                                  c.a.createElement(
                                    D.a,
                                    {
                                      ref: e.ltr2,
                                      xs: n.xs,
                                      sm: n.sm,
                                      md: n.md,
                                      lg: n.lg,
                                      className: e.props.rightToLeft ? "float-right text-center padding-lr2 padding-tb5" : "float-left text-center padding-lr2 padding-tb5",
                                    },
                                    c.a.createElement(_.DateRangePicker, {
                                      startDate: M()(e.props.selDates[0]),
                                      startDateId: "startD",
                                      endDate: "round" === e.props.tripType ? M()(e.props.selDates[1]) : null,
                                      endDatePlaceholderText: t("NONE"),
                                      endDateId: "endD",
                                      onDatesChange: function (t) {
                                        var a = t.startDate,
                                          s = t.endDate;
                                        return e.handleDateChange([a, s], -1);
                                      },
                                      focusedInput: e.state.focusedInput,
                                      onFocusChange: function (t) {
                                        return e.setState({ focusedInput: t });
                                      },
                                      transitionDuration: 100,
                                      hideKeyboardShortcutsPanel: !0,
                                      numberOfMonths: window.innerWidth < 960 ? 1 : 2,
                                      disabled: "one" === e.props.tripType && "endDate",
                                      isOutsideRange: function (e) {
                                        return M()(e).startOf("day") < M()().startOf("day") || M()(e).startOf("day") > M()().add(11, "months").startOf("day");
                                      },
                                      minimumNights: 0,
                                      displayFormat: "MMM D",
                                      isRTL: e.props.rightToLeft,
                                      readOnly: !0,
                                      withPortal: !0,
                                      renderCalendarInfo: function () {
                                        return c.a.createElement(
                                          "div",
                                          { className: "text-center margin-b10 text-light-gray " },
                                          c.a.createElement("hr", { className: "margin-t0 hr-1" }),
                                          "startDate" === e.state.focusedInput
                                            ? c.a.createElement(
                                              "span",
                                              { className: "font-weight-bold" },
                                              c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("OUTBOUND"))
                                            )
                                            : c.a.createElement(
                                              "span",
                                              { className: "font-weight-bold" },
                                              c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("INBOUND"))
                                            )
                                        );
                                      },
                                    }),
                                    c.a.createElement(N.a, { icon: x.f, className: e.props.rightToLeft ? "calendar-icon-rtl" : "calendar-icon" })
                                  ),
                                  c.a.createElement(D.a, { className: "clear-all" })
                                ),
                                c.a.createElement("div", { className: "clearfix" })
                              );
                            }),
                            "multi" === this.props.tripType &&
                            c.a.createElement(
                              D.a,
                              { xs: l.xs, md: l.md, className: "padding-lr2 padding-tb5 " },
                              this.props.selDest.length < k.E &&
                              c.a.createElement(
                                f.a,
                                {
                                  variant: "outline-primary",
                                  className: "float-left width-100 text-center",
                                  onClick: function () {
                                    return e.manageFlights("add");
                                  },
                                },
                                c.a.createElement(N.a, { icon: x.x }),
                                c.a.createElement("span", null, " ", t("SEARCH_FLIGHT_ADD"), " ")
                              )
                            ),
                            this.props.rightToLeft && c.a.createElement(D.a, { xs: 12, md: 4, lg: 5 }),
                            "multi" === this.props.tripType && c.a.createElement(D.a, { xs: o.xs, sm: o.sm, md: o.md, lg: o.lg, className: "padding-lr2 padding-tb5" }, c.a.createElement(j, this.props)),
                            c.a.createElement(
                              D.a,
                              { xs: 12, className: "padding-lr2 bar-font-size text-left" },
                              "hf" === this.state.searchTypeUI.code &&
                              c.a.createElement(
                                "div",
                                { className: "padding-tb5" },
                                c.a.createElement(P.a.Check, {
                                  key: 3,
                                  checked: this.props.editFlightDates,
                                  onChange: function () {
                                    return e.manageFlightDates();
                                  },
                                  custom: !0,
                                  name: "flightDates",
                                  label: "I only need accomodation for a part of my trip",
                                  id: "flightDates",
                                  "aria-label": "flightDates",
                                  className: this.props.rightToLeft
                                    ? "1" === this.props.barType
                                      ? "padding-tb10 text-blue float-right"
                                      : "padding-tb10 text-light-gray float-right"
                                    : "1" === this.props.barType
                                      ? "padding-tb10 text-blue float-left"
                                      : "padding-tb10 text-light-gray float-left",
                                })
                              )
                            ),
                            this.props.editFlightDates &&
                            c.a.createElement(
                              D.a,
                              {
                                ref: this.ltr2,
                                xs: n.xs,
                                sm: n.sm,
                                md: n.md,
                                lg: n.lg,
                                className: this.props.rightToLeft ? "float-right text-center padding-lr2 padding-tb5 margin-b10" : "float-left text-center padding-lr2 padding-tb5 margin-b10",
                              },
                              c.a.createElement(_.DateRangePicker, {
                                startDate: M()(this.props.start),
                                startDateId: "startDhotels",
                                endDate: M()(this.props.end),
                                endDateId: "endDhotels",
                                onDatesChange: function (t) {
                                  var a = t.startDate,
                                    s = t.endDate;
                                  return e.handleHotelsDateChange(a, s);
                                },
                                focusedInput: this.state.focusedInputHotels,
                                onFocusChange: function (t) {
                                  return e.setState({ focusedInputHotels: t });
                                },
                                transitionDuration: 100,
                                hideKeyboardShortcutsPanel: !0,
                                numberOfMonths: window.innerWidth < 960 ? 1 : 2,
                                disabled: "one" === this.props.tripType && "endDate",
                                isOutsideRange: function (e) {
                                  return M()(e).startOf("day") < M()().startOf("day") || M()(e).startOf("day") > M()().add(11, "months").startOf("day");
                                },
                                minimumNights: 0,
                                displayFormat: "MMM D",
                                isRTL: this.props.rightToLeft,
                                readOnly: !0,
                                withPortal: !0,
                                renderCalendarInfo: function () {
                                  return c.a.createElement(
                                    "div",
                                    { className: "text-center margin-b10 text-light-gray " },
                                    c.a.createElement("hr", { className: "margin-t0 hr-1" }),
                                    "startDate" === e.state.focusedInputHotels
                                      ? c.a.createElement("span", { className: "font-weight-bold" }, c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("CHECK_IN")))
                                      : c.a.createElement("span", { className: "font-weight-bold" }, c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("CHECK_OUT")))
                                  );
                                },
                              }),
                              c.a.createElement(N.a, { icon: x.f, className: this.props.rightToLeft ? "calendar-icon-rtl" : "calendar-icon" })
                            )
                          )
                        ),
                        c.a.createElement(
                          "div",
                          { className: "padding-lr10" },
                          "multi" === this.props.tripType &&
                          c.a.createElement(
                            D.a,
                            { xs: m.xs, md: m.md, lg: m.lg, className: "float-right padding-tb5 padding-lr2 margin-t20" },
                            c.a.createElement(
                              f.a,
                              {
                                className: "search-btn has-glow fill float-right width-100 text-center",
                                onClick: function (t) {
                                  return e.submitSearch(t);
                                },
                              },
                              c.a.createElement(N.a, { className: "", icon: x.z }),
                              " ",
                              t("BUTTON_SEARCH")
                            )
                          ),
                          "2" !== this.props.barType &&
                          (window.location.hostname.includes(k.I) || this.state.showAddInfo) &&
                          this.state.servicesList &&
                          this.state.servicesList.length > 0 &&
                          c.a.createElement(
                            v.a,
                            { className: "margin0 text-left padding-tb15" },
                            c.a.createElement(
                              D.a,
                              { xs: !0, lg: { span: 3, offset: 9 }, className: "back-color-blue-gray-dark padding-tb15 rad-6" },
                              c.a.createElement(
                                P.a.Group,
                                null,
                                c.a.createElement(P.a.Label, { className: "text-white" }, "Service Select"),
                                c.a.createElement(
                                  P.a.Control,
                                  {
                                    as: "select",
                                    onChange: function (t) {
                                      return e.setState({ selectedService: t.target.value });
                                    },
                                  },
                                  c.a.createElement("option", { value: "--" }, "--"),
                                  this.state.servicesList.map(function (e, t) {
                                    return c.a.createElement("option", { key: t, value: e }, e);
                                  })
                                )
                              )
                            )
                          ),
                          "2" !== this.props.barType &&
                          "multi" !== this.props.tripType &&
                          c.a.createElement(
                            D.a,
                            { ref: this.btn, lg: i.lg, className: "float-right  padding-lr2 padding-tb5  " },
                            c.a.createElement(
                              f.a,
                              {
                                className: "search-btn has-glow width-100",
                                onClick: function (t) {
                                  return e.submitSearch(t);
                                },
                              },
                              c.a.createElement(N.a, { className: "", icon: x.z }),
                              " ",
                              t("BUTTON_SEARCH")
                            )
                          )
                        ),
                        c.a.createElement("div", { className: "clearfix" })
                      )*/
                    );
                  },
                },
              ]),
              t
          );
        })(i.Component),
        ne = a(49),
        oe = a(17),
        le = a.n(oe);
      function pe() {
        var e = {},
          t = M.a.utc().add(30, "days").format("ddd, DD MMM YYYY HH:mm:ss");
        Object(ne.a)("affiliate") && (!sessionStorage.getItem("affiliate") || sessionStorage.getItem("affiliate").toLowerCase().indexOf("sky-tours") >= 0) && sessionStorage.setItem("affiliate", Object(ne.a)("affiliate")),
        window.location.search && (e = le.a.parse(window.location.search)),
          e.gclid
            ? sessionStorage.setItem("affiliate", null)
            : e.a &&
            (e.a.indexOf("belboon") >= 0 && sessionStorage.setItem("affiliate", "belboon.en"),
            e.a.indexOf("tradedoubler") >= 0 && sessionStorage.setItem("affiliate", "tradedoubler.en"),
              z.a
                .get(k.a + e.a)
                .catch(function (e) {})
                .then(function (a) {
                  1 === parseInt(a.data) && sessionStorage.setItem("affiliate", e.a),
                    (function (e, t, a) {
                      e.indexOf("tradedoubler") >= 0 && (t.tduid ? (Object(ne.b)("TRADEDOUBLER", t.tduid, a, "/"), sessionStorage.setItem("TRADEDOUBLER", t.tduid)) : sessionStorage.setItem("affiliate", null)),
                      e.indexOf("reseguiden") >= 0 && (t.tduid ? (Object(ne.b)("TRADEDOUBLER", a, "/"), sessionStorage.setItem("TRADEDOUBLER", t.tduid)) : sessionStorage.setItem("affiliate", null)),
                      e.indexOf("trabber") >= 0 && (Object(ne.b)("trabe", 1, a, "/"), Object(ne.b)("affiliate", e, a, "/")),
                      e.indexOf("liligo") >= 0 && (Object(ne.b)("lili", 1, a, "/"), Object(ne.b)("affiliate", e, a, "/")),
                      e.indexOf("cj_") >= 0 && t.cjevent && sessionStorage.setItem("CJEVENT", t.cjevent);
                    })(e.a, e, t);
                }));
      }
      var ie = a(37),
        ce = a(160),
        me = a(110),
        de = a(723),
        ue = a(716),
        he = a(717),
        ge = a(527),
        fe = a.n(ge),
        be = a(103),
        Ee = function (e) {
          var t,
            a = e.membersPanel,
            s = e.history,
            r = e.appActions,
            n = e.t,
            o = Object(i.useState)(!1),
            l = Object(w.a)(o, 2),
            p = l[0],
            m = l[1],
            d = Object(i.useState)(null),
            u = Object(w.a)(d, 2),
            h = (u[0], u[1], Object(i.useState)("")),
            g = Object(w.a)(h, 2),
            f = (g[0], g[1], p ? "isopen" : ""),
            b = "Hey, " + a.firstname;
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              H.a,
              null,
              c.a.createElement(
                "div",
                { className: "d-none d-md-block" },
                c.a.createElement(
                  fe.a,
                  { expand: "md", bg: "none" },
                  c.a.createElement(
                    be.b,
                    { to: "/" },
                    c.a.createElement(fe.a.Brand, null, c.a.createElement(E.a, { src: "/images.skytoursusa/ST-usa.png", height: "60", className: "d-inline-block align-top", alt: "SkytoursUSA logo" }))
                  ),
                  !a.authorized &&
                  c.a.createElement(
                    "div",
                    {
                      onClick: function () {
                        r.setRouteInfo("login"), s.push("/login");
                      },
                      className: "ml-auto cursor-pointer padding-tb10",
                    },
                    c.a.createElement(N.a, { className: "mr-2", icon: x.J }),
                    n("AGENT_LOGIN")
                  ),
                  a.authorized &&
                  c.a.createElement(
                    de.a,
                    { className: "text-decoration-none ml-auto text-secondary font-weight-bold", title: b.toString(), id: "basic-nav-dropdown" },
                    "manager" === a.type &&
                    c.a.createElement(
                      de.a.Item,
                      {
                        onClick: function () {
                          return s.push("/admin/agents");
                        },
                      },
                      "Manage Agents"
                    ),
                    "manager" === a.type &&
                    c.a.createElement(
                      de.a.Item,
                      {
                        onClick: function () {
                          return s.push("/admin/orders");
                        },
                      },
                      "Manage Orders"
                    ),
                    c.a.createElement(
                      de.a.Item,
                      {
                        onClick: function () {
                          return s.push("/agent/orders");
                        },
                      },
                      "Orders History"
                    ),
                    c.a.createElement(
                      de.a.Item,
                      {
                        onClick: function () {
                          r.membersPanel({ authorized: !1, token: "" }), s.push("/");
                        },
                      },
                      "Logout"
                    )
                  )
                )
              ),
              c.a.createElement(
                ue.a,
                { className: "text-left d-block d-md-none" },
                c.a.createElement(
                  he.a,
                  { xs: !0 },
                  c.a.createElement(be.b, { to: "/" }, c.a.createElement(E.a, { src: "/images.skytoursusa/ST-usa.png", height: "65", className: " d-inline-block align-top padding-tb5", alt: "SkytoursUSA logo" })),
                  c.a.createElement(
                    "div",
                    ((t = { id: "hambmenu", className: f }),
                      Object(me.a)(t, "className", f + " d-block d-md-none float-right"),
                      Object(me.a)(t, "onClick", function () {
                        return m(!p);
                      }),
                      t),
                    c.a.createElement("span", null),
                    c.a.createElement("span", null),
                    c.a.createElement("span", null),
                    c.a.createElement("span", null)
                  )
                )
              ),
              c.a.createElement(
                "div",
                { className: "d-block d-md-none" },
                p &&
                c.a.createElement(
                  "div",
                  { className: f + " px-2 py-3 position-absolute", id: "MenuMobile" },
                  a.authorized &&
                  c.a.createElement(
                    de.a,
                    { className: "text-decoration-none ml-auto text-secondary font-weight-bold", title: b.toString(), id: "basic-nav-dropdown" },
                    c.a.createElement(
                      de.a.Item,
                      {
                        className: "text-decoration-none text-secondary",
                        onClick: function () {
                          s.push("/dashboard");
                        },
                        href: "#",
                      },
                      "My Profile"
                    ),
                    c.a.createElement(
                      de.a.Item,
                      {
                        onClick: function () {
                          r.membersPanel({ authorized: !1, token: "" }), s.push("/");
                        },
                      },
                      "Logout"
                    )
                  ),
                  !a.authorized &&
                  c.a.createElement(
                    "div",
                    {
                      onClick: function () {
                        r.setRouteInfo("login"), s.push("/login");
                      },
                      className: "ml-auto cursor-pointer padding-tb10",
                    },
                    c.a.createElement(N.a, { className: "mr-2", icon: x.J }),
                    n("AGENT_LOGIN")
                  )
                )
              )
            )
          );
        },
        ye = function (e) {
          var t = e.t,
            a = [
              { name: t("AFF_RATES"), text: t("AFF_RATES_DESC"), image: "/images.stbusiness/icons/money.png" },
              { name: t("FAST_RESPONSE"), text: t("FAST_RESPONSE_DESC"), image: "/images.stbusiness/icons/clock.png" },
              { name: t("ON_TIME"), text: t("ON_TIME_DESC"), image: "/images.stbusiness/icons/report.png" },
              { name: t("CS_SATISFACTION"), text: t("CS_SATISFACTION_DESC"), image: "/images.stbusiness/icons/plane.png" },
              { name: t("CUSTOMER_SUPPORT"), text: t("CUSTOMER_SUPPORT _DESC"), image: "/images.stbusiness/icons/24.png" },
            ];
          return c.a.createElement(
            H.a,
            { className: "" },
            c.a.createElement(
              v.a,
              { className: "mt-5 text-center" },
              a.map(function (e, t) {
                return c.a.createElement(
                  D.a,
                  { key: e.text, xs: t === a.length - 1 ? 12 : 6, lg: !0, className: "text-center padding-tb15" },
                  c.a.createElement(
                    "div",
                    { className: "padding-lr10 padding-tb10 shadow margin-lr-auto mW220 rad6", style: { minHeight: "300px" } },
                    c.a.createElement(v.a, null, c.a.createElement(D.a, { className: "padding-tb15" }, c.a.createElement(E.a, { src: e.image, height: 98 }))),
                    c.a.createElement(v.a, null, c.a.createElement(D.a, null, c.a.createElement("p", { className: "svg" }, e.name), c.a.createElement("h5", null, e.text)))
                  )
                );
              })
            ),
            c.a.createElement("div", { className: "mt-5" }),
            c.a.createElement(d.Element, { name: "whyskytours" })
          );
        },
        De = (a(718), a(725), a(719)),
        Te = a(679),
        ve = a(680);
      i.Component, a(540);
      Object(ie.f)(function (e) {
        var t = e.membersPanel,
          a = (e.history, e.t, e.appActions),
          s = e.clientId,
          r = e.userInfo,
          n = e.location;
        !(function (e) {
          var t = e.membersPanel,
            a = e.appActions,
            s = c.a.useState(),
            r = Object(w.a)(s, 2),
            n = (r[0], r[1]);
          c.a.useEffect(function () {
            Object(I.l)(t.token).then(function (e) {
              console.log("%c!", "color:white;padding:.5em;background-color: lightgray;", e),
              e &&
              (n(e),
                e.token
                  ? e.token &&
                  a.membersPanel({
                    authorized: e.authorized,
                    token: e.token,
                    firstname: e.firstname,
                    lastname: e.lastname,
                    approved: e.approved,
                    email: e.email,
                    type: e.type,
                    isSuperAdmin: null !== e.isSuperAdmin || void 0 !== e.isSuperAdmin ? e.isSuperAdmin : t.isSuperAdmin,
                    id: e.id,
                    error: e.error,
                  })
                  : a.membersPanel({ authorized: e.authorized, error: e.error }));
            });
          }, []);
        })(e);
        return (
          c.a.useEffect(
            function () {
              var e = { url: n.pathname + n.search, ip: r.ip };
              "noId" !== s && (e.id = s),
                Object(I.q)(e).then(function (e) {
                  e && s !== e && a.setClientId(e);
                });
            },
            [r, s, n]
          ),
            c.a.useEffect(
              function () {
                var e = n.pathname + n.search;
                if (t.urls[0] !== e) {
                  var s = [e].concat(Object(ce.a)(t.urls));
                  (s = s.length > 10 ? s.slice(0, 9) : s), a.membersPanel({ urls: s });
                }
              },
              [n]
            ),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement("div", { className: "d-none d-md-block" }, c.a.createElement(D.a, { className: "navbar-shadow" }, c.a.createElement(Ee, e))),
              c.a.createElement("div", { className: "d-block d-md-none" }, c.a.createElement(Ee, e))
            )
        );
      });
      var Ne = function () {
          return c.a.createElement(
            H.a,
            null,
            c.a.createElement(
              v.a,
              {
                className: "video-promo-container padding-tb10 cursor-pointer",
                onClick: function () {
                  window.open("https://c19easyentry.com/", "_blank");
                },
              },
              c.a.createElement(D.a, { md: 1 }),
              c.a.createElement(
                D.a,
                { xs: 12, md: 4, className: "font36 font-weight-bolder text-md-right" },
                c.a.createElement("div", { className: "text-red font42 font-weight-bolder" }, "WORRY FREE"),
                c.a.createElement("div", { className: "text-blue" }, "Program C19", c.a.createElement("br", null), "Easy-Entry")
              ),
              c.a.createElement(
                D.a,
                { xs: 12, md: 2, className: "arrows-container font36 font-weight-bolder" },
                c.a.createElement(N.a, { icon: x.b, className: "d-none d-md-inline-block float-right fa-2x svg" }),
                c.a.createElement(N.a, { icon: x.a, className: "d-xs-block d-md-none margin-lr-auto fa-2x svg" })
              ),
              c.a.createElement(D.a, { xs: 12, md: 4 }, c.a.createElement(d.Element, { name: "video-easy-entry" }), c.a.createElement(E.a, { src: "/images.skytoursusa/c19easyentry.png" })),
              c.a.createElement(D.a, { md: 1 })
            )
          );
        },
        xe = a(106),
        we = a(159),
        Oe = a.n(we),
        Se = a(720),
        ke = (function (e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
                ((a = Object(o.a)(this, Object(l.a)(t).call(this, e))).manageReturnType = function (e) {
                  if ((a.props.appActions.setReturnType(e), "changed" === e && ("" === a.props.valueDest[0].to || "" === a.props.valueDest[0].from))) {
                    var t = a.props.selDest.slice(),
                      s = a.props.valueDest.slice();
                    (t[1].to = a.props.selDest[0].from),
                      (s[1].to = a.props.valueDest[0].from),
                      (t[1].from = a.props.selDest[0].to),
                      (s[1].from = a.props.valueDest[0].to),
                      a.props.appActions.setSelDest(t),
                      a.props.appActions.setValDest(s);
                  }
                }),
                (a.handleDateChange = function (e, t) {
                  if (-1 === t) {
                    var s = e.slice();
                    ((null !== e[1] && M()(e[0]) > M()(e[1])) || null === e[1]) && (s[1] = M()(e[0]).add(1, "days")), a.props.appActions.setDate(s);
                  } else {
                    var r = a.props.selDates.slice();
                    r[t] = e;
                    for (var n = t + 1; n < r.length; n++) n < r.length && M()(r[n]) < M()(r[n - 1]) && (r[n] = r[n - 1]);
                    a.props.appActions.setDate(r);
                  }
                  a.props.appActions.setHotelsStartDate(e[0]), a.props.appActions.setHotelsEndDate(e[1]);
                }),
                (a.handleHotelsDateChange = function (e, t) {
                  var s = t,
                    r = a.props.selDates.slice();
                  if (
                    (((null !== t && M()(e) > M()(t)) || null === t) && (s = M()(e).add(1, "days")),
                      a.props.appActions.setHotelsStartDate(e),
                      a.props.appActions.setHotelsEndDate(s),
                    "hf" === a.state.searchTypeUI.code && a.props.appActions.setDate([e, s]),
                      a.props.editFlightDates)
                  ) {
                    var n = !1;
                    e && r[0] && M()(e) < M()(r[0]) && ((r[0] = e), (n = !0)), s && r[1] && M()(t) > M()(r[1]) && ((r[1] = s), (n = !0)), n && a.props.appActions.setDate(r);
                  }
                }),
                (a.manageFlights = function (e, t) {
                  var s = a.props.selDest.slice(),
                    r = a.props.selDates.slice(),
                    n = a.props.valueDest.slice(),
                    o = a.state.focusDates.slice();
                  "add" === e
                    ? (s.push({ from: a.props.selDest[a.props.selDest.length - 1].to, to: null }),
                      n.push({ from: a.props.valueDest[a.props.valueDest.length - 1].to, to: "" }),
                    s.length > 2 && r.push(M()(a.props.selDates[a.props.selDates.length - 1]).add(1, "days")),
                      o.push(null))
                    : a.props.selDest.length > 1 && (a.props.selDest.length > 2 && (s.splice(t, 1), r.splice(t, 1), n.splice(t, 1), o.splice(t, 1)), 2 === a.props.selDest.length && a.props.appActions.setTripType("round")),
                    a.props.appActions.setSelDest(s),
                    a.props.appActions.setDate(r),
                    a.props.appActions.setValDest(n),
                    a.setState({ focusDates: o });
                }),
                (a.changeTripType = function (e, t) {
                  switch ((a.props.appActions.setTripType(e), e)) {
                    case "round":
                      if ((a.manageReturnType("standard"), M()(a.props.selDates[1]).diff(M()(a.props.selDates[0])) < 0)) {
                        var s = a.props.selDates.slice();
                        (s[1] = M()(s[0]).add(1, "days")), a.props.appActions.setDate(s);
                      }
                      var r = a.props.selDest.slice(),
                        n = a.props.valueDest.slice();
                      (r[1].from = r[0].to), (r[1].to = r[0].from), (n[1].from = n[0].to), (n[1].to = n[0].from);
                      break;
                    case "one":
                      break;
                    case "multi":
                      2 === a.props.selDest.length && a.manageFlights("add", null);
                  }
                }),
                (a.manageFlightDates = function () {
                  if (a.props.editFlightDates) {
                    var e = a.props.selDates.slice();
                    (e[0] = a.props.start), (e[1] = a.props.end), a.props.appActions.setDate(e);
                  }
                  a.props.appActions.setEditFlightDates(!a.props.editFlightDates);
                }),
                (a.managemanageNearby = function (e, t, s) {
                  var r = a.props.nearbyArp.slice();
                  (r[t][e] = s ? 1 : 0), a.props.appActions.setNearbyArp(r);
                }),
                (a.toggleCalendar = function () {
                  a.setState({ showModalDate: !a.state.showModalDate });
                }),
                (a.toggleCityChooser = function (e, t) {
                  a.props.appActions.setSbWhere(e), a.props.appActions.setSbIndex(t), a.setState({ showModalCity: !a.state.showModalCity });
                }),
                (a.manageSearchType = function (e) {
                  a.setState({ searchTypeUI: e }),
                  "hf" !== e.code && a.props.editFlightDates && a.manageFlightDates(),
                  "h" !== e.code && Object(I.h)(a.props.numPeople) > 9 && (a.props.appActions.setRooms([[1, 0, []]]), a.props.appActions.setNumPeople(k.x));
                }),
                (a.submitSearch = function (e) {
                  e.preventDefault();
                  var t,
                    s = "",
                    r = "",
                    n = a.props.selDest.slice(),
                    o = a.props.valueDest.slice(),
                    l = [];
                  if (a.state.searchTypeUI.code.indexOf("f") >= 0) {
                    for (var p = "round" === a.props.tripType ? ("standard" === a.props.returnType ? 1 : 2) : "one" === a.props.tripType ? 1 : a.props.selDest.length, i = 0; i < p; i++)
                      if ((a.state.searchTypeUI.code.indexOf("f") >= 0 && null === a.props.selDest[i].from) || null === a.props.selDest[i].to) return void a.props.appActions.setAlert("sb-alert");
                    switch (a.props.tripType) {
                      case "round":
                        a.props.selDest[0].from.value === a.props.selDest[0].to.value && (l = [0]),
                          (s =
                            "&T1=" +
                            a.props.selDest[0].from.value +
                            "&T2=" +
                            a.props.selDest[0].to.value +
                            "&T3=" +
                            ("standard" === a.props.returnType ? a.props.selDest[0].to.value : a.props.selDest[1].from.value) +
                            "&T4=" +
                            ("standard" === a.props.returnType ? a.props.selDest[0].from.value : a.props.selDest[1].to.value) +
                            "&outdate1=" +
                            M()(a.props.selDates[0]).locale("en").format("YYYY-MM-DD") +
                            "&outdate2=" +
                            M()(a.props.selDates[1]).locale("en").format("YYYY-MM-DD"));
                        break;
                      case "one":
                        a.props.selDest[0].from.value === a.props.selDest[0].to.value && (l = [0]),
                          (n = a.props.selDest.slice(0, 1)),
                          (o = a.props.valueDest.slice(0, 1)),
                          (s = "&T1=" + a.props.selDest[0].from.value + "&T2=" + a.props.selDest[0].to.value + "&outdate1=" + M()(a.props.selDates[0]).locale("en").format("YYYY-MM-DD"));
                        break;
                      case "multi":
                        for (var c = 0; c < a.props.selDest.length; c++)
                          a.props.selDest[c].from.value === a.props.selDest[c].to.value && l.push(c),
                            (s =
                              s +
                              "&T" +
                              (2 * c + 1) +
                              "=" +
                              a.props.selDest[c].from.value +
                              "&T" +
                              (2 * c + 2) +
                              "=" +
                              a.props.selDest[c].to.value +
                              "&outdate" +
                              (c + 1) +
                              "=" +
                              M()(a.props.selDates[c]).locale("en").format("YYYY-MM-DD"));
                    }
                    r =
                      "&D1=" +
                      a.props.numPeople.adult +
                      "&D2=" +
                      a.props.numPeople.child +
                      "&D3=" +
                      a.props.numPeople.infant +
                      "&D4=" +
                      a.props.numPeople.senior +
                      "&D5=" +
                      a.props.numPeople.youth +
                      "&cabin=" +
                      a.props.selectedClass;
                  }
                  var m = {
                    url: (t =
                      ("h" !== a.state.searchTypeUI.code
                        ? s +
                        r +
                        ("one" === a.props.tripType ? "&trip=one" : s.includes("&T5=") ? (s.includes("&T14") ? "&trip=round&world=1" : "&trip=round&multi=1") : "&trip=round") +
                        k.z +
                        "&curr=" +
                        a.props.curr.cc +
                        ("--" !== a.state.selectedService ? "&forceService=" + a.state.selectedService : "")
                        : "") +
                      "&searchType=" +
                      a.state.searchTypeUI.code +
                      ("f" !== a.state.searchTypeUI.code
                        ? ("none" === a.props.config.hotelsFS ? "" : "&forceServiceH=" + a.props.config.hotelsFS) +
                        "&lng=" +
                        a.props.lng +
                        "&lat=" +
                        a.props.lat +
                        "&city=" +
                        encodeURIComponent(a.props.city.split(", ").join(",")) +
                        "&checkin=" +
                        M()(a.props.start).locale("en").format("YYYY-MM-DD") +
                        "&checkout=" +
                        M()(a.props.end).locale("en").format("YYYY-MM-DD") +
                        "&rooms=" +
                        Object(J.c)(a.props.rooms) +
                        "&roomsNum=" +
                        a.props.rooms.length +
                        "&rad=" +
                        (a.props.searchRad ? a.props.searchRad : 25)
                        : "")),
                    curr: a.props.curr,
                    lang: a.props.lang,
                    dest: n,
                    destVal: o,
                    dates: a.props.selDates,
                    people: a.props.numPeople,
                    totalNumPeople: a.props.numPeople.adult + a.props.numPeople.child + a.props.numPeople.infant + a.props.numPeople.senior + a.props.numPeople.youth,
                    type: a.props.tripType,
                    class: a.props.selectedClass,
                    searchType: a.state.searchTypeUI,
                    city: a.props.city,
                    lng: a.props.lng,
                    lat: a.props.lat,
                    rooms: a.props.rooms,
                  };
                  a.props.appActions.setSearchType(a.state.searchTypeUI),
                    (window.searchUrl = t),
                    console.log("URLS - window - flightsSearchInfo.url", "\n", t, "\n", m.url),
                    ("hf" === a.props.searchType.code && 0 === l.length && 0 !== a.props.lat && 0 !== a.props.lng) ||
                    ("h" === a.props.searchType.code && 0 !== a.props.lat && 0 !== a.props.lng) ||
                    ("f" === a.props.searchType.code && 0 === l.length)
                      ? (a.props.sbShow && a.props.appActions.setSbShow(!1), window.location.assign("https://www.Sky-tours.com/en/search?" + window.searchUrl))
                      : a.props.searchType.code.indexOf("f") >= 0 && (a.setState({ errorCities: l }), a.props.appActions.setAlert("sb-alert"));
                }),
                (a.rtl = c.a.createRef()),
                (a.ltr2 = c.a.createRef()),
                (a.btn = c.a.createRef()),
                (a.center1 = c.a.createRef()),
                (a.state = { errorCities: [], focusDates: [!1], showModalCity: !1, showModalDate: !1, rtl: !1, servicesList: [], selectedService: "--", showAddInfo: !1, searchTypeUI: a.props.searchType }),
                a
            );
          }
          return (
            Object(p.a)(t, e),
              Object(n.a)(t, [
                {
                  key: "componentWillMount",
                  value: function () {
                    if (this.state.focusDates.length !== this.props.selDest.length) {
                      for (var e = this.state.focusDates.slice(), t = 0; t < this.props.selDates.length - this.state.focusDates.length; t++) e.push(null);
                      this.setState({ focusDates: e });
                    }
                    this.props.multi && this.changeTripType("multi"),
                    "2" === this.props.barType && this.changeTripType("one"),
                    this.props.config.cabinClass || (this.props.selectedClass && "Y" === this.props.selectedClass) || this.props.appActions.setSelectedClass("Y");
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    if (document.querySelector("#userLocation")) {
                      var t = JSON.parse(document.querySelector("#userLocation").getAttribute("data-location"));
                      t.ip &&
                      Object(I.k)({ ip: t.ip, token: this.props.membersPanel.token }).then(function (t) {
                        t &&
                        z.a.get("/data/services.json").then(function (a) {
                          return e.setState({ servicesList: a.data.list, showAddInfo: t });
                        });
                      });
                    }
                  },
                },
                {
                  key: "componentWillReceiveProps",
                  value: function (e) {
                    var t = e.lang.value;
                    k.N.includes(t.toLowerCase().trim()) &&
                    (Object(I.b)(this.rtl.current)("rtl"),
                      [this.ltr2.current, document.querySelector("div.DateRangePickerInput.DateRangePickerInput_1"), this.center1.current, this.btn.current].forEach(function (e) {
                        return Object(I.b)(e)({ textAlign: "center", direction: "ltr" });
                      }));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.t,
                      a = [
                        { label: t("ROUND_TRIP"), value: "round" },
                        { label: t("ONE_WAY"), value: "one" },
                        { label: t("MULTI_TRIP"), value: "multi" },
                      ],
                      s = {},
                      r = {},
                      n = {},
                      o = { xs: 12, sm: 12, md: 6, lg: 3 },
                      l = { xs: 12, sm: 6, md: 3, lg: 3 },
                      p = { xs: 12, sm: 12, md: 1, lg: 1 },
                      i = { lg: { offset: 10, span: 2 } },
                      m = { xs: 12, md: { span: 4, offset: 7 }, lg: { span: 3, offset: 8 } };
                    if ("1" === this.props.barType || "2" === this.props.barType)
                      (o = { xs: 12, sm: 12, md: 12, lg: 12 }),
                        (l = { xs: 12, sm: 12, md: 12, lg: 12 }),
                        (p = { xs: 12, sm: 12, md: 12, lg: 12 }),
                        (i = { lg: 12 }),
                        (m = { xs: 12, md: { span: 12, offset: 0 }, lg: { span: 12, offset: 0 } }),
                        (s = "multi" === this.props.tripType ? { xs: 8, sm: 8, md: 8, lg: 8 } : { xs: 12, sm: 12, md: 12, lg: 12 }),
                        (r = { xs: 12, sm: 12, md: 12 }),
                        (n = "multi" === this.props.tripType ? { xs: 4, sm: 4, md: 4, lg: 4 } : "2" === this.props.barType ? { xs: 6, sm: 6, md: 6, lg: 6 } : { xs: 12, sm: 12, md: 12, lg: 12 });
                    else
                      switch (this.props.tripType) {
                        case "round":
                        case "one":
                          (s = { xs: 12, sm: 12, md: 12, lg: 6 }), (r = { xs: 12, sm: 12, md: 6 }), (n = { xs: 12, sm: 12, md: 6, lg: 3 });
                          break;
                        case "multi":
                          (s = { xs: 8, sm: 9, md: 8, lg: 8 }),
                            (r = { xs: 12, sm: "multi" === this.props.tripType ? 12 : 6, md: 6 }),
                            (n = { xs: 4, sm: 3, md: 3, lg: 3 }),
                            (o = { xs: 12, sm: 12, md: { span: 4, offset: this.props.rightToLeft ? 0 : 4 }, lg: { span: 3, offset: this.props.rightToLeft ? 0 : 5 } });
                      }
                    return c.a.createElement(
                      H.a,
                      { className: "mx-auto padding-tb15 text-center" },
                      "sb-alert" === this.props.alert &&
                      c.a.createElement(A.a, {
                        title: t("ERROR_NOT_FOUND"),
                        type: "warning",
                        onConfirm: function () {
                          return e.props.appActions.setAlert("none");
                        },
                      }),
                      c.a.createElement(
                        h.a,
                        {
                          show: this.state.showModalCity,
                          onHide: function () {
                            return e.toggleCityChooser(null, null);
                          },
                          className: "modal-city",
                        },
                        c.a.createElement(h.a.Header, { closeButton: !0 }, c.a.createElement(h.a.Title, null, null !== this.props.sbWhere)),
                        c.a.createElement(h.a.Body, null, null !== this.props.sbWhere && null !== this.props.sbIndex && this.renderModalCity(this.props.sbWhere, this.props.sbIndex))
                      ),
                      /*this.props.selDest &&
                      this.props.selDates &&
                      this.props.numPeople &&
                      this.props.valueDest &&
                      this.props.valueDest &&
                      c.a.createElement(
                        P.a,
                        { ref: this.rtl, className: "flight-search" },
                        c.a.createElement(
                          v.a,
                          { className: "text-primary margin0 border-bottom-midtone border-primary" },
                          k.G.map(function (t, a) {
                            return c.a.createElement(
                              D.a,
                              {
                                key: a,
                                xs: !0,
                                md: "auto",
                                className:
                                  t.code !== e.state.searchTypeUI.code
                                    ? "text-light-gray bg-white " + (a !== k.G.length - 1 && "margin-r5")
                                    : "text-white bg-primary " + (a !== k.G.length - 1 && "margin-r5"),
                              },
                              c.a.createElement(
                                "div",
                                {
                                  className: "width-100 cursor-pointer padding-tb10",
                                  onClick: function () {
                                    return e.manageSearchType(t);
                                  },
                                },
                                c.a.createElement(
                                  "span",
                                  { className: "padding-lr5" },
                                  t.code.indexOf("h") >= 0 && c.a.createElement(N.a, { icon: x.m }),
                                  "hf" === t.code && c.a.createElement("span", null, " + "),
                                  t.code.indexOf("f") >= 0 && c.a.createElement(N.a, { icon: x.t })
                                ),
                                c.a.createElement("span", { className: "d-none d-md-inline-block padding-lr5" }, t.name)
                              )
                            );
                          })
                        ),
                        c.a.createElement(
                          "div",
                          { className: "padding-lr10 padding-tb10 margin-b10 padding shadow bg-white" },
                          this.state.searchTypeUI.code.indexOf("h") >= 0 &&
                          c.a.createElement(
                            v.a,
                            { className: "padding-lr0 margin-lr-0" },
                            c.a.createElement(D.a, { xs: 12, md: 12, lg: 5, className: "margin-b18 padding-lr2 padding-tb5 height-40" }, c.a.createElement(se, this.props)),
                            c.a.createElement(
                              D.a,
                              { xs: 12, md: 6, lg: 4, className: "padding-lr2 padding-tb5" },
                              c.a.createElement(ee, Object.assign({}, this.props, { sType: this.state.searchTypeUI.code }))
                            ),
                            "h" === this.state.searchTypeUI.code &&
                            c.a.createElement(
                              D.a,
                              {
                                ref: this.ltr2,
                                xs: n.xs,
                                sm: n.sm,
                                md: n.md,
                                lg: n.lg,
                                className: this.props.rightToLeft ? "float-right text-center padding-lr2 padding-tb5" : "float-left text-center padding-lr2 padding-tb5",
                              },
                              c.a.createElement(_.DateRangePicker, {
                                startDate: M()(this.props.start),
                                startDateId: "startDhotels",
                                endDate: M()(this.props.end),
                                endDateId: "endDhotels",
                                onDatesChange: function (t) {
                                  var a = t.startDate,
                                    s = t.endDate;
                                  return e.handleHotelsDateChange(a, s);
                                },
                                focusedInput: this.state.focusedInputHotels,
                                onFocusChange: function (t) {
                                  return e.setState({ focusedInputHotels: t });
                                },
                                transitionDuration: 100,
                                hideKeyboardShortcutsPanel: !0,
                                numberOfMonths: window.innerWidth < 960 ? 1 : 2,
                                disabled: "one" === this.props.tripType && "endDate",
                                isOutsideRange: function (e) {
                                  return M()(e).startOf("day") < M()().startOf("day") || M()(e).startOf("day") > M()().add(23, "months").startOf("day");
                                },
                                minimumNights: 0,
                                displayFormat: "MMM D",
                                isRTL: this.props.rightToLeft,
                                readOnly: !0,
                                withPortal: !0,
                                renderCalendarInfo: function () {
                                  return c.a.createElement(
                                    "div",
                                    { className: "text-center margin-b10 text-light-gray " },
                                    c.a.createElement("hr", { className: "margin-t0 hr-1" }),
                                    "startDate" === e.state.focusedInputHotels
                                      ? c.a.createElement("span", { className: "font-weight-bold" }, c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("CHECK_IN")))
                                      : c.a.createElement("span", { className: "font-weight-bold" }, c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("CHECK_OUT")))
                                  );
                                },
                              }),
                              c.a.createElement(N.a, { icon: x.f, className: this.props.rightToLeft ? "calendar-icon-rtl" : "calendar-icon" })
                            )
                          ),
                          c.a.createElement("div", { className: "clear-all padding-tb5" }),
                          this.state.searchTypeUI.code.indexOf("h") < 0 &&
                          "2" !== this.props.barType &&
                          "hf" !== this.state.searchTypeUI &&
                          c.a.createElement(
                            "fieldset",
                            null,
                            c.a.createElement(
                              P.a.Group,
                              { as: v.a, key: this.props.tripType, className: "padding-lr2 margin-lr-0 padding-tb0 trip-type-check bar-font-size" },
                              a.map(function (t, a) {
                                return c.a.createElement(P.a.Check, {
                                  key: a,
                                  checked: e.props.tripType === t.value,
                                  onChange: function (t) {
                                    return e.changeTripType(t.target.value);
                                  },
                                  custom: !0,
                                  name: "flightType",
                                  type: "radio",
                                  label: t.label,
                                  id: "tripType" + a,
                                  "aria-label": t.label,
                                  className: "margin-r20 padding-tb10",
                                  value: t.value,
                                });
                              })
                            )
                          ),
                          this.state.searchTypeUI.code.indexOf("f") >= 0 &&
                          c.a.createElement(
                            v.a,
                            { className: "padding0 margin0" },
                            this.props.selDest.map(function (a, l) {
                              return c.a.createElement(
                                "div",
                                { className: "width-100", key: l },
                                ("multi" === e.props.tripType || ("multi" !== e.props.type && 0 === l)) &&
                                c.a.createElement(
                                  D.a,
                                  { xs: 12, className: "padding0" },
                                  c.a.createElement(
                                    D.a,
                                    {
                                      xs: s.xs,
                                      sm: s.sm,
                                      md: s.md,
                                      lg: s.lg,
                                      className: e.props.rightToLeft ? "city-input float-right city-input-rtl padding0" : "city-input float-left padding0",
                                    },
                                    c.a.createElement(
                                      v.a,
                                      { className: "padding0 margin0" },
                                      c.a.createElement(
                                        D.a,
                                        { xs: r.xs, sm: r.sm, md: r.md, className: "padding-lr2 padding-tb5" },
                                        c.a.createElement(K, Object.assign({}, e.props, { where: "from", index: l, itemId: "from" + l + "flight", rtlTyping: e.props.rightToLeft })),
                                        c.a.createElement(N.a, { icon: x.v, className: e.props.rightToLeft ? "plane-icon-rtl fa-flip-horizontal" : "plane-icon" })
                                      ),
                                      "2" === e.props.barType &&
                                      c.a.createElement(
                                        v.a,
                                        { className: "padding0 margin0 " },
                                        c.a.createElement(
                                          D.a,
                                          { className: "padding-lr2 bar-font-size text-bl" },
                                          c.a.createElement(P.a.Check, {
                                            key: 1,
                                            checked: 1 === e.props.nearbyArp[l].from,
                                            onChange: function (t) {
                                              return e.managemanageNearby("from", l, t.target.checked);
                                            },
                                            custom: !0,
                                            name: "returnType",
                                            label: "allow nearby airports",
                                            id: "nearby_from-" + l,
                                            "aria-label": "nearby_from",
                                            className: e.props.rightToLeft
                                              ? "1" === e.props.barType
                                                ? "padding-tb10 text-blue float-right"
                                                : "padding-tb10 text-light-gray float-right"
                                              : "1" === e.props.barType
                                                ? "padding-tb10 text-blue float-left"
                                                : "padding-tb10 text-light-gray float-left",
                                          })
                                        )
                                      ),
                                      c.a.createElement(
                                        D.a,
                                        { xs: r.xs, sm: r.sm, md: r.md, className: "padding-lr2 padding-tb5 " },
                                        c.a.createElement(K, Object.assign({}, e.props, { where: "to", index: l, itemId: "to" + l + "flight", rtlTyping: e.props.rightToLeft })),
                                        c.a.createElement(N.a, { icon: x.u, className: e.props.rightToLeft ? "plane-icon-rtl fa-flip-horizontal" : "plane-icon" })
                                      ),
                                      "2" === e.props.barType &&
                                      c.a.createElement(
                                        v.a,
                                        { className: "padding0 margin0 " },
                                        c.a.createElement(
                                          D.a,
                                          { className: "padding-lr2 bar-font-size text-bl" },
                                          c.a.createElement(P.a.Check, {
                                            key: 1,
                                            checked: 1 === e.props.nearbyArp[l].to,
                                            onChange: function (t) {
                                              return e.managemanageNearby("to", l, t.target.checked);
                                            },
                                            custom: !0,
                                            name: "returnType",
                                            label: "allow nearby airports",
                                            id: "nearby_to-" + l,
                                            "aria-label": "nearby_to",
                                            className: e.props.rightToLeft
                                              ? "1" === e.props.barType
                                                ? "padding-tb10 text-blue float-right"
                                                : "padding-tb10 text-light-gray float-right"
                                              : "1" === e.props.barType
                                                ? "padding-tb10 text-blue float-left"
                                                : "padding-tb10 text-light-gray float-left",
                                          })
                                        )
                                      )
                                    ),
                                    "2" !== e.props.barType &&
                                    "round" === e.props.tripType &&
                                    c.a.createElement(
                                      v.a,
                                      { className: "padding0 margin0 " },
                                      c.a.createElement(
                                        D.a,
                                        { className: "padding-lr2 bar-font-size text-bl" },
                                        c.a.createElement(P.a.Check, {
                                          key: 1,
                                          checked: "standard" !== e.props.returnType,
                                          onChange: function () {
                                            return e.manageReturnType("standard" === e.props.returnType ? "changed" : "standard");
                                          },
                                          custom: !0,
                                          name: "returnType",
                                          label: t("MODIFY_RETURN"),
                                          id: "returnType",
                                          "aria-label": "returnType",
                                          className: e.props.rightToLeft
                                            ? "1" === e.props.barType
                                              ? "padding-tb10 text-blue float-right"
                                              : "padding-tb10 text-light-gray float-right"
                                            : "1" === e.props.barType
                                              ? "padding-tb10 text-blue float-left"
                                              : "padding-tb10 text-light-gray float-left",
                                        })
                                      )
                                    ),
                                    "changed" === e.props.returnType &&
                                    "round" === e.props.tripType &&
                                    c.a.createElement(
                                      v.a,
                                      { className: "padding0 margin0" },
                                      c.a.createElement(
                                        D.a,
                                        { xs: r.xs, sm: r.sm, md: r.md, className: "padding-lr2 padding-tb5" },
                                        c.a.createElement(
                                          K,
                                          Object.assign({}, e.props, { where: "from", index: l + 1, itemId: "from" + (l + 1) + "flight", rtlTyping: e.props.rightToLeft })
                                        ),
                                        c.a.createElement(N.a, { icon: x.v, className: e.props.rightToLeft ? "plane-icon-rtl fa-flip-horizontal" : "plane-icon" })
                                      ),
                                      c.a.createElement(
                                        D.a,
                                        { xs: r.xs, sm: r.sm, md: r.md, className: "padding-lr2 padding-tb5" },
                                        c.a.createElement(K, Object.assign({}, e.props, { where: "to", index: l + 1, itemId: "to" + (l + 1) + "flight", rtlTyping: e.props.rightToLeft })),
                                        c.a.createElement(N.a, { icon: x.u, className: e.props.rightToLeft ? "plane-icon-rtl fa-flip-horizontal" : "plane-icon" })
                                      ),
                                      c.a.createElement(D.a, { xs: 12, className: "clear-all margin-b20" })
                                    )
                                  ),
                                  c.a.createElement(
                                    "div",
                                    { className: "1" === e.props.barType ? "datepickerSingle" : "2" === e.props.barType ? "datepickerSingleType2" : "" },
                                    ("multi" === e.props.tripType || "2" === e.props.barType) &&
                                    c.a.createElement(
                                      D.a,
                                      {
                                        xs: n.xs,
                                        sm: n.sm,
                                        md: n.md,
                                        lg: n.lg,
                                        className: e.props.rightToLeft ? "float-right padding-lr2 padding-tb5" : "float-left padding-lr2 padding-tb5",
                                      },
                                      c.a.createElement(_.SingleDatePicker, {
                                        date: M()(e.props.selDates[l]),
                                        onDateChange: function (t) {
                                          return e.handleDateChange(t, l);
                                        },
                                        focused: e.state.focusDates[l],
                                        onFocusChange: function () {
                                          var t = e.state.focusDates.slice();
                                          (t[l] = !t[l]), e.setState({ focusDates: t });
                                        },
                                        hideKeyboardShortcutsPanel: !0,
                                        id: "datepicker-1",
                                        numberOfMonths: window.innerWidth < 960 ? 1 : 2,
                                        isOutsideRange: function (t) {
                                          return (
                                            Object(_.isInclusivelyAfterDay)(0 !== l ? M()(e.props.selDates[l - 1]).subtract(1, "day") : M()().subtract(1, "day"), t) ||
                                            M()(t).startOf("day") < M()().startOf("day") ||
                                            M()(t).startOf("day") > M()().add(11, "months").startOf("day")
                                          );
                                        },
                                        withPortal: !0,
                                        transitionDuration: 100,
                                        displayFormat: "MMM D",
                                        isRTL: e.props.rightToLeft,
                                        readOnly: !0,
                                      }),
                                      "2" === e.props.barType && c.a.createElement(N.a, { icon: x.f, className: e.props.rightToLeft ? "calendar-icon-rtl" : "calendar-icon" })
                                    )
                                  ),
                                  "2" === e.props.barType &&
                                  c.a.createElement(
                                    D.a,
                                    { xs: n.xs, sm: n.sm, md: n.md, lg: n.lg, className: e.props.rightToLeft ? "float-right padding-lr2 padding-tb5" : "float-left padding-lr2 padding-tb5" },
                                    c.a.createElement(
                                      S.a,
                                      null,
                                      c.a.createElement(S.a.Toggle, { id: "dropdownPeople", className: "dropdown-1 text-center" }, " +/- ", e.props.rangeDates, " ", t("DAYS")),
                                      c.a.createElement(
                                        S.a.Menu,
                                        { className: "min-width-100-pcent" },
                                        Object(I.m)(4).map(function (a, s) {
                                          return c.a.createElement(
                                            S.a.Item,
                                            { key: s },
                                            c.a.createElement(
                                              D.a,
                                              {
                                                cs: 12,
                                                style: { minWidth: "100%" },
                                                onClick: function () {
                                                  return e.props.appActions.setRangeDates(a);
                                                },
                                              },
                                              c.a.createElement(v.a, null, c.a.createElement(D.a, { xs: 12, className: "padding-tb10 text-center" }, " +/- ", a, " ", t("DAYS")))
                                            )
                                          );
                                        }),
                                        c.a.createElement("div", { className: "clearfix padding-tb5" })
                                      )
                                    )
                                  ),
                                  "multi" === e.props.tripType &&
                                  c.a.createElement(
                                    D.a,
                                    {
                                      xs: p.xs,
                                      md: p.md,
                                      className: "float-left padding0 margin-t7",
                                      onClick: function () {
                                        e.manageFlights("remove", l);
                                      },
                                    },
                                    "1" === e.props.barType
                                      ? c.a.createElement(
                                        "div",
                                        { className: e.props.rightToLeft ? "button-remove-rtl-1 cursor-pointer text-center" : "button-remove-1 cursor-pointer text-center" },
                                        c.a.createElement(N.a, { icon: x.G })
                                      )
                                      : c.a.createElement(
                                        "div",
                                        { className: e.props.rightToLeft ? "button-remove-rtl cursor-pointer text-center" : "button-remove cursor-pointer text-center" },
                                        c.a.createElement(N.a, { icon: x.G })
                                      )
                                  ),
                                  "multi" !== e.props.tripType &&
                                  c.a.createElement(
                                    D.a,
                                    {
                                      xs: o.xs,
                                      sm: o.sm,
                                      md: o.md,
                                      lg: o.lg,
                                      className: e.props.rightToLeft ? "float-right text-center padding-lr2 padding-tb5" : "float-left text-center padding-lr2 padding-tb5",
                                    },
                                    c.a.createElement(j, e.props)
                                  ),
                                  "2" !== e.props.barType &&
                                  "multi" !== e.props.tripType &&
                                  c.a.createElement(
                                    D.a,
                                    {
                                      ref: e.ltr2,
                                      xs: n.xs,
                                      sm: n.sm,
                                      md: n.md,
                                      lg: n.lg,
                                      className: e.props.rightToLeft ? "float-right text-center padding-lr2 padding-tb5" : "float-left text-center padding-lr2 padding-tb5",
                                    },
                                    c.a.createElement(_.DateRangePicker, {
                                      startDate: M()(e.props.selDates[0]),
                                      startDateId: "startD",
                                      endDate: "round" === e.props.tripType ? M()(e.props.selDates[1]) : null,
                                      endDatePlaceholderText: t("NONE"),
                                      endDateId: "endD",
                                      onDatesChange: function (t) {
                                        var a = t.startDate,
                                          s = t.endDate;
                                        return e.handleDateChange([a, s], -1);
                                      },
                                      focusedInput: e.state.focusedInput,
                                      onFocusChange: function (t) {
                                        return e.setState({ focusedInput: t });
                                      },
                                      transitionDuration: 100,
                                      hideKeyboardShortcutsPanel: !0,
                                      numberOfMonths: window.innerWidth < 960 ? 1 : 2,
                                      disabled: "one" === e.props.tripType && "endDate",
                                      isOutsideRange: function (e) {
                                        return M()(e).startOf("day") < M()().startOf("day") || M()(e).startOf("day") > M()().add(11, "months").startOf("day");
                                      },
                                      minimumNights: 0,
                                      displayFormat: "MMM D",
                                      isRTL: e.props.rightToLeft,
                                      readOnly: !0,
                                      withPortal: !0,
                                      renderCalendarInfo: function () {
                                        return c.a.createElement(
                                          "div",
                                          { className: "text-center margin-b10 text-light-gray " },
                                          c.a.createElement("hr", { className: "margin-t0 hr-1" }),
                                          "startDate" === e.state.focusedInput
                                            ? c.a.createElement(
                                              "span",
                                              { className: "font-weight-bold" },
                                              c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("OUTBOUND"))
                                            )
                                            : c.a.createElement(
                                              "span",
                                              { className: "font-weight-bold" },
                                              c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("INBOUND"))
                                            )
                                        );
                                      },
                                    }),
                                    c.a.createElement(N.a, { icon: x.f, className: e.props.rightToLeft ? "calendar-icon-rtl" : "calendar-icon" })
                                  ),
                                  c.a.createElement(D.a, { className: "clear-all" })
                                ),
                                c.a.createElement("div", { className: "clearfix" })
                              );
                            }),
                            "multi" === this.props.tripType &&
                            c.a.createElement(
                              D.a,
                              { xs: l.xs, md: l.md, className: "padding-lr2 padding-tb5 " },
                              this.props.selDest.length < k.E &&
                              c.a.createElement(
                                f.a,
                                {
                                  variant: "outline-primary",
                                  className: "float-left width-100 text-center",
                                  onClick: function () {
                                    return e.manageFlights("add");
                                  },
                                },
                                c.a.createElement(N.a, { icon: x.x }),
                                c.a.createElement("span", null, " ", t("SEARCH_FLIGHT_ADD"), " ")
                              )
                            ),
                            this.props.rightToLeft && c.a.createElement(D.a, { xs: 12, md: 4, lg: 5 }),
                            "multi" === this.props.tripType && c.a.createElement(D.a, { xs: o.xs, sm: o.sm, md: o.md, lg: o.lg, className: "padding-lr2 padding-tb5" }, c.a.createElement(j, this.props)),
                            c.a.createElement(
                              D.a,
                              { xs: 12, className: "padding-lr2 bar-font-size text-left" },
                              "hf" === this.state.searchTypeUI.code &&
                              c.a.createElement(
                                "div",
                                { className: "padding-tb5" },
                                c.a.createElement(P.a.Check, {
                                  key: 3,
                                  checked: this.props.editFlightDates,
                                  onChange: function () {
                                    return e.manageFlightDates();
                                  },
                                  custom: !0,
                                  name: "flightDates",
                                  label: "I only need accomodation for a part of my trip",
                                  id: "flightDates",
                                  "aria-label": "flightDates",
                                  className: this.props.rightToLeft
                                    ? "1" === this.props.barType
                                      ? "padding-tb10 text-blue float-right"
                                      : "padding-tb10 text-light-gray float-right"
                                    : "1" === this.props.barType
                                      ? "padding-tb10 text-blue float-left"
                                      : "padding-tb10 text-light-gray float-left",
                                })
                              )
                            ),
                            this.props.editFlightDates &&
                            c.a.createElement(
                              D.a,
                              {
                                ref: this.ltr2,
                                xs: n.xs,
                                sm: n.sm,
                                md: n.md,
                                lg: n.lg,
                                className: this.props.rightToLeft ? "float-right text-center padding-lr2 padding-tb5 margin-b10" : "float-left text-center padding-lr2 padding-tb5 margin-b10",
                              },
                              c.a.createElement(_.DateRangePicker, {
                                startDate: M()(this.props.start),
                                startDateId: "startDhotels",
                                endDate: M()(this.props.end),
                                endDateId: "endDhotels",
                                onDatesChange: function (t) {
                                  var a = t.startDate,
                                    s = t.endDate;
                                  return e.handleHotelsDateChange(a, s);
                                },
                                focusedInput: this.state.focusedInputHotels,
                                onFocusChange: function (t) {
                                  return e.setState({ focusedInputHotels: t });
                                },
                                transitionDuration: 100,
                                hideKeyboardShortcutsPanel: !0,
                                numberOfMonths: window.innerWidth < 960 ? 1 : 2,
                                disabled: "one" === this.props.tripType && "endDate",
                                isOutsideRange: function (e) {
                                  return M()(e).startOf("day") < M()().startOf("day") || M()(e).startOf("day") > M()().add(11, "months").startOf("day");
                                },
                                minimumNights: 0,
                                displayFormat: "MMM D",
                                isRTL: this.props.rightToLeft,
                                readOnly: !0,
                                withPortal: !0,
                                renderCalendarInfo: function () {
                                  return c.a.createElement(
                                    "div",
                                    { className: "text-center margin-b10 text-light-gray " },
                                    c.a.createElement("hr", { className: "margin-t0 hr-1" }),
                                    "startDate" === e.state.focusedInputHotels
                                      ? c.a.createElement("span", { className: "font-weight-bold" }, c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("CHECK_IN")))
                                      : c.a.createElement("span", { className: "font-weight-bold" }, c.a.createElement("span", { className: "margin-r10 text-lowercase" }, t("CHECK_OUT")))
                                  );
                                },
                              }),
                              c.a.createElement(N.a, { icon: x.f, className: this.props.rightToLeft ? "calendar-icon-rtl" : "calendar-icon" })
                            ),
                            "2" !== this.props.barType &&
                            "multi" !== this.props.tripType &&
                            c.a.createElement(
                              D.a,
                              { ref: this.btn, lg: i.lg, className: "float-right padding-lr2 padding-tb5  " },
                              c.a.createElement(
                                f.a,
                                {
                                  className: "search-btn has-glow width-100",
                                  onClick: function (t) {
                                    return e.submitSearch(t);
                                  },
                                },
                                c.a.createElement(N.a, { className: "", icon: x.z }),
                                " ",
                                t("BUTTON_SEARCH")
                              )
                            )
                          ),
                          "2" !== this.props.barType &&
                          "multi" !== this.props.tripType &&
                          "h" === this.state.searchTypeUI.code &&
                          c.a.createElement(
                            D.a,
                            { ref: this.btn, lg: i.lg, className: "float-right padding-lr2 padding-tb5  " },
                            c.a.createElement(
                              f.a,
                              {
                                className: "search-btn has-glow width-100",
                                onClick: function (t) {
                                  return e.submitSearch(t);
                                },
                              },
                              c.a.createElement(N.a, { className: "", icon: x.z }),
                              " ",
                              t("BUTTON_SEARCH")
                            )
                          ),
                          c.a.createElement("div", { className: "clearfix" })
                        ),
                        c.a.createElement(
                          "div",
                          { className: "padding-lr10" },
                          "multi" === this.props.tripType &&
                          c.a.createElement(
                            D.a,
                            { xs: m.xs, md: m.md, lg: m.lg, className: "float-right padding-tb5 padding-lr2 margin-t20" },
                            c.a.createElement(
                              f.a,
                              {
                                className: "search-btn has-glow fill float-right width-100 text-center",
                                onClick: function (t) {
                                  return e.submitSearch(t);
                                },
                              },
                              c.a.createElement(N.a, { className: "", icon: x.z }),
                              " ",
                              t("BUTTON_SEARCH")
                            )
                          ),
                          "2" !== this.props.barType &&
                          (window.location.hostname.includes(k.I) || this.state.showAddInfo) &&
                          this.state.servicesList &&
                          this.state.servicesList.length > 0 &&
                          c.a.createElement(
                            v.a,
                            { className: "margin0 text-left padding-tb15" },
                            c.a.createElement(
                              D.a,
                              { xs: !0, lg: { span: 3, offset: 9 }, className: "back-color-blue-gray-dark padding-tb15 rad-6" },
                              c.a.createElement(
                                P.a.Group,
                                null,
                                c.a.createElement(P.a.Label, { className: "text-white" }, "Service Select"),
                                c.a.createElement(
                                  P.a.Control,
                                  {
                                    as: "select",
                                    onChange: function (t) {
                                      return e.setState({ selectedService: t.target.value });
                                    },
                                  },
                                  c.a.createElement("option", { value: "--" }, "--"),
                                  this.state.servicesList.map(function (e, t) {
                                    return c.a.createElement("option", { key: t, value: e }, e);
                                  })
                                )
                              )
                            )
                          )
                        ),
                        c.a.createElement("div", { className: "clearfix" })
                      )*/
                    );
                  },
                },
              ]),
              t
          );
        })(i.Component),
        Ce = a(530),
        Ae = a.n(Ce),
        Ie = (a(536), { 0: { items: 1 }, 800: { items: 2 }, 1100: { items: 3 }, 1500: { items: 4 }, 1800: { items: 4 }, 2200: { items: 4 } }),
        Re = [
          { image: "/images.skytoursusa/hotels-carousel/ccampo.jpg", link: "https://www.casadecampo.com.do/" },
          { image: "/images.skytoursusa/hotels-carousel/barcelo.jpg", link: "https://www.barcelo.com/es-es/" },
          { image: "/images.skytoursusa/hotels-carousel/deja.jpg", link: "https://www.dejaresort.com/" },
          { image: "/images.skytoursusa/hotels-carousel/palladium.jpg", link: "https://www.palladiumhotelgroup.com/es" },
          { image: "/images.skytoursusa/hotels-carousel/mgrandhotels1.jpg", link: "https://www.mexicograndhotels.com/" },
          { image: "/images.skytoursusa/hotels-carousel/karisma.jpg", link: "https://www.karismahotels.com/" },
          { image: "/images.skytoursusa/hotels-carousel/solmar.jpg", link: "https://www.solmar.com/" },
          { image: "/images.skytoursusa/hotels-carousel/thefives.jpg", link: "https://www.thefiveshotels.com/" },
        ].map(function (e, t) {
          return c.a.createElement(
            "div",
            { className: "transition-all", "data-value": "1" },
            c.a.createElement(De.a, { style: { borderTopRightRadius: 50, borderBottomLeftRadius: 50 }, height: "330px", width: "360", src: e.image })
          );
        }),
        Pe = function () {
          return c.a.createElement(
            Se.a,
            { style: { maxWidth: "1600px" } },
            c.a.createElement(
              ue.a,
              null,
              c.a.createElement(
                he.a,
                null,
                c.a.createElement(
                  "div",
                  { className: "w-100 pt-5 opacity-3" },
                  c.a.createElement(Ae.a, { infinite: !0, autoPlayStrategy: "action", buttonsDisabled: !0, disableButtonsControls: !0, items: Re, autoPlay: !0, autoPlayInterval: "2000", responsive: Ie })
                )
              )
            )
          );
        };
      !window.location.hostname.indexOf("localhost") >= 0 && !window.location.hostname.indexOf("devel") >= 0 && xe.a.pageview(window.location.pathname + window.location.search);
      var Le = (function (e) {
        function t() {
          var e, a;
          Object(r.a)(this, t);
          for (var s = arguments.length, n = new Array(s), p = 0; p < s; p++) n[p] = arguments[p];
          return (
            ((a = Object(o.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(n)))).scroll = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "whyskytours";
              setTimeout(function () {
                return d.scroller.scrollTo(e, { duration: 1e3, delay: 100, smooth: !0 });
              }, 300);
            }),
              (a.callPhone = function () {
                var e = a.props.t;
                window.open("tel:" + e("MENU_CRUISES_DN"), "_self");
              }),
              a
          );
        }
        return (
          Object(p.a)(t, e),
            Object(n.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  d.animateScroll.scrollToTop(), (document.querySelector("#content-ssr").style.display = "block"), "none" !== this.props.loading && this.props.appActions.loading("none");
                },
              },
              {
                key: "compoenentWillUnmount",
                value: function () {
                  document.querySelector("#content-ssr").style.display = "none";
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  pe();
                  var e = { curr: this.props.curr.cc, lang: this.props.lang.lang ? this.props.lang.lang : "en", affiliate: sessionStorage.getItem("affiliate") ? sessionStorage.getItem("affiliate") : "sky-tours" };
                  Object(ne.a)("TRADEDOUBLER") && (e = Object(s.a)({}, e, { TRADEDOUBLER: Object(ne.a)("TRADEDOUBLER") }));
                  var t = { dataLayer: e, dataLayerName: "dLayer_1" };
                  this.props.config.tagManager && Oe.a.dataLayer(t);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.t;
                  return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(m.a, this.props),
                    c.a.createElement(
                      "div",
                      { className: "" },
                      "sky-toursusa" === window.appenv
                        ? c.a.createElement(
                          "div",
                          null,
                          c.a.createElement(
                            ue.a,
                            { className: "home-image-searchbar padding-tb50" },
                            c.a.createElement(Se.a, { className: "text-left padding-tb5 txt-blue" }, c.a.createElement("h3", { className: "font-weight-bold" }, t("SLOGAN"))),
                            c.a.createElement(re, Object.assign({ className: "mt-5" }, this.props, { homeP: !0 }))
                          ),
                          c.a.createElement(Ne, null),
                          c.a.createElement(Pe, null),
                          c.a.createElement(
                            Se.a,
                            null,
                            c.a.createElement(
                              ue.a,
                              { className: "padding-tb100" },
                              c.a.createElement(
                                he.a,
                                { xs: 12, className: "" },
                                c.a.createElement("div", { dangerouslySetInnerHTML: { __html: t("SLOGAN_DESC") }, className: "font28 txt-gray-blue maxw600 margin-lr-auto" })
                              )
                            ),
                            c.a.createElement(
                              ue.a,
                              { className: "padding-tb50 margin-b50" },
                              c.a.createElement(
                                he.a,
                                { xs: 12, className: "" },
                                c.a.createElement(De.a, { src: "images.skytoursusa/about.jpg", className: "margin-lr-auto margin-b50", fluid: !0 }),
                                c.a.createElement("div", { dangerouslySetInnerHTML: { __html: t("ABOUT_US_DESC") }, className: "font18 txt-gray-blue" })
                              )
                            )
                          )
                        )
                        : c.a.createElement(
                          "div",
                          null,
                          c.a.createElement(
                            ue.a,
                            { className: "home-image-searchbar" },
                            c.a.createElement(he.a, { className: "text-center margin-t50" }, c.a.createElement("h1", null, t("HOME_TITLE")), c.a.createElement("h4", null, t("HOME_SUBTITLE")))
                          ),
                          c.a.createElement(ke, Object.assign({ className: "mt-5" }, this.props, { openLocation: !0 })),
                          c.a.createElement(
                            Te.a,
                            {
                              variant: "primary",
                              className: "min-width-300px",
                              onClick: function () {
                                location.href = "https://sky-corporate.booking.xeni.com/booknow/flights";
                              },
                            },
                            "Search"
                          ),
                          c.a.createElement(
                            "section",
                            { className: "margin-t50" },
                            c.a.createElement("h2", null, t("MANAGEMENT_SERVICES_TITLE")),
                            c.a.createElement("p", { className: "padding-tb15 maxw600 svg margin-lr-auto" }, t("MANAGEMENT_SERVICES_DESCRIPTION"))
                          ),
                          c.a.createElement(ye, this.props),
                          c.a.createElement(
                            "section",
                            { className: "about-section" },
                            c.a.createElement(
                              Se.a,
                              null,
                              c.a.createElement("h2", { className: "padding-tb15" }, t("ABOUT_US")),
                              c.a.createElement("p", { dangerouslySetInnerHTML: { __html: t("ABOUT_US_DESC") } }),
                              c.a.createElement("br", null),
                              c.a.createElement(
                                Te.a,
                                {
                                  variant: "danger",
                                  className: "margin-t30 margin-b100",
                                  onClick: function () {
                                    return e.callPhone();
                                  },
                                },
                                "Contact Us"
                              )
                            )
                          ),
                          c.a.createElement(
                            "section",
                            { className: "why-choose-section padding-tb100" },
                            c.a.createElement(
                              Se.a,
                              null,
                              c.a.createElement(
                                ue.a,
                                null,
                                c.a.createElement(he.a, { xs: 12 }, c.a.createElement("h2", { className: "margin-lr-auto" }, t("BOOKING_WITH_US")), c.a.createElement("br", null)),
                                c.a.createElement(
                                  he.a,
                                  { xs: 12, lg: 5 },
                                  c.a.createElement(De.a, { src: "/images.stbusiness/why_sky_tours.jpg", fluid: !0, className: "margin-t4" }),
                                  c.a.createElement(
                                    ue.a,
                                    { className: "padding-tb25" },
                                    c.a.createElement(
                                      he.a,
                                      { xs: !0 },
                                      c.a.createElement(De.a, { src: "/images.stbusiness/icons/customersupport.svg", height: "60", className: "padding-tb10" }),
                                      c.a.createElement("br", null),
                                      t("ONE_ON"),
                                      c.a.createElement("br", null),
                                      t("CUSTOMER_SERVICE")
                                    ),
                                    c.a.createElement(
                                      he.a,
                                      { xs: !0 },
                                      c.a.createElement(De.a, { src: "/images.stbusiness/icons/expert.svg", height: "60", className: "padding-tb10" }),
                                      c.a.createElement("br", null),
                                      t("EXPERT"),
                                      c.a.createElement("br", null),
                                      t("KNOWLEDGE")
                                    ),
                                    c.a.createElement(
                                      he.a,
                                      { xs: !0 },
                                      c.a.createElement(De.a, { src: "/images.stbusiness/icons/247.svg", height: "60", className: "padding-tb10" }),
                                      c.a.createElement("br", null),
                                      t("24_HOURS"),
                                      c.a.createElement("br", null),
                                      t("TRAVEL_ASSISTANCE")
                                    )
                                  )
                                ),
                                c.a.createElement(he.a, { xs: 12, lg: 7, className: "text-left" }, c.a.createElement("p", { dangerouslySetInnerHTML: { __html: t("BOOKING_WITH_US_DESC") } }))
                              )
                            )
                          ),
                          c.a.createElement(
                            "section",
                            { className: "get-the-best-section" },
                            c.a.createElement(
                              "div",
                              null,
                              c.a.createElement(
                                Se.a,
                                null,
                                c.a.createElement("h1", { className: "maxw600 margin-lr-auto txt-white", dangerouslySetInnerHTML: { __html: t("BEST_AIRFARE") } }),
                                c.a.createElement("h1", { className: "maxw600 margin-lr-auto txt-white", dangerouslySetInnerHTML: { __html: t("BEST_OFFERS") } }),
                                c.a.createElement("p", { className: "text-white font-weight-bold padding-tb25" }, t("BEST_OFFERS_DESC")),
                                c.a.createElement(
                                  Te.a,
                                  {
                                    variant: "danger",
                                    onClick: function () {
                                      return e.callPhone();
                                    },
                                  },
                                  "Contact Us"
                                )
                              )
                            )
                          ),
                          !this.props.cookies &&
                          c.a.createElement(
                            "section",
                            { className: "call-us-button" },
                            c.a.createElement(
                              "div",
                              {
                                onClick: function () {
                                  return e.callPhone();
                                },
                              },
                              c.a.createElement("div", { className: "call-us-button-txt" }, t("REACH_OUT"), c.a.createElement("br", null), t("TRAVEL_AGENT_NOW")),
                              c.a.createElement("div", { className: "call-us-button-btn" }, c.a.createElement(N.a, { icon: x.l }))
                            )
                          )
                        )
                    )
                  );
                },
              },
            ]),
            t
        );
      })(i.Component);
      t.default = Object(ie.f)(Le);
    },
  },
]);
