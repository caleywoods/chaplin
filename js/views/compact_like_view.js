var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['views/view', 'text!templates/compact_like.hbs'], function(View, template) {
  'use strict';
  var CompactLikeView;
  return CompactLikeView = (function(_super) {

    __extends(CompactLikeView, _super);

    function CompactLikeView() {
      CompactLikeView.__super__.constructor.apply(this, arguments);
    }

    CompactLikeView.template = template;

    CompactLikeView.prototype.tagName = 'li';

    CompactLikeView.prototype.className = 'like';

    return CompactLikeView;

  })(View);
});
