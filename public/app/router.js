/* global apress */
define(['knockout'], function(ko) {
  'use strict';

  var pages = [
    'game'
  ];

  var routerData = ko.observable({});
  var activePage = ko.observable('main-page');

  var parseRoute = function(page, itemId, slug) {
    // TU CZA ZMIENIAC
    var pageIndex;
    if (!page) {
      page = 'lobby';
    } else if (pageIndex = pages.indexOf(page)) {
      page = pages[pageIndex];
    } else if (itemId && slug) {
      routerData({
        page: page,
        itemId: itemId,
        slug: slug
      });
    }

    activePage(page + '-page');
  };

  // I TU JAK BEDZIEMY MIEC STRONU JUZ
  apress.addRoute('/%', parseRoute);
  apress.addRoute('/%/%/%', parseRoute);
  apress.addRoute('/', parseRoute);
  apress.hashTest();

  return {
    activePage: activePage,
    routerData: routerData
  };
});
