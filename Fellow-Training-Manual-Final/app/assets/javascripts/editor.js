function Editor($emptyContainer) {

    var that = this;

    this.inputValues = {};

    this.widgetControls = [
        {
            name:  'textbox',
            label: "<span>T</span>",
            tmpl:  function() {
                return '<div class="textbox" contentEditable="true"></div>'
            }

        },
        /*{
            name:  'talkingHeads',
            label: "<span class='icon-user'></span>",
            tmpl:  function() {
                return "<div class='talking-head'><img src='" + that.inputValues['face'] + "'/><div contentEditable='true'>" + that.inputValues['quote'] + "</div></div>";
            },
            inputFields: [
                {
                    'id'         : 'face',
                    'inputType'  : 'url',
                    'placeholder': 'Link to image'
                },
                {
                    'id'         : 'quote',
                    'inputType'  : 'text',
                    'placeholder': 'Quote'
                }
            ]
        },*/
        {
            name:  'speechBubble',
            label: "<span class='icon-comment'></span>",
            tmpl:  function() {
                return "<p contentEditable='true' class='triangle-border left bubble'></p>";
            }
        },
        {
            name:  'Image',
            label: "<span class='icon-picture'></span>",
            tmpl:  function() {
                return "<img src='" + that.inputValues['image'] + "'></img>";
            },
            inputFields: [
                {
                    'id'         : 'image',
                    'inputType'  : 'url',
                    'placeholder': 'Link to image'
                }
            ]
        },
        {
            name:  'Video',
            label: "<span class='icon-facetime-video'></span>",
            tmpl:  function() {
                //return "<div class='video center'><video src='" + that.inputValues['video'] + "'></video><div class='caption' contentEditable='true' /></div>";
                return "<video src='" + that.inputValues['video'] + "' controls></video>";
            },
            inputFields: [
                {
                    'id'         : 'video',
                    'inputType'  : 'url',
                    'placeholder': 'Link to video'
                }
            ]
        },
        {
            name:  'embed',
            label: "<span class='icon-inbox'></span>",
            tmpl:  function() {
                return that.inputValues['embed']
            },
            inputFields: [
                {
                    'id'         : 'embed',
                    'inputType'  : 'text',
                    'placeholder': 'HTML'
                }
            ]

        },

    ];

    this.textControls = [
        [
            {
                label: "<span style='font-weight:bold;'>B</span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('bold', false, null);
                    });
                }
            },
            {
                label: "<span style='font-style:italic;'>I</span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('italic', false, null);
                    });
                }
            },
            {
                label: "<span style='text-decoration:underline!important;'>U</span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('underline', false, null);
                    });
                }
            }
        ],
        [
            {
                label: "<div>F <span class='caret'></span></div>",
                action: function($control) {

                    $control.addClass('dropdown');
                    $control.addClass('fonts-dropdown');
                    $control.attr('data-target', '.fonts-dropdown');
                    $control.attr('data-toggle', 'dropdown');

                    $control.children('div:first').attr('id', 'fonts-menu');
                    $control.children('div:first').addClass('dropdown-toggle');
                    $control.children('div:first').attr('data-toggle', 'dropdown');

                    var fontNames = [
                        "Arial",
                        "Arial Black",
                        "Comic Sans MS",
                        "Courier New",
                        "Georgia",
                        "Helvetica",
                        "Sans Serif",
                        "Tahoma",
                        "Times New Roman",
                        "Trebuchet MS",
                        "Verdana"];

                    var font;

                    var $ul = $('<ul />', {'class': 'dropdown-menu'});
                    var $li;
                    var $a;

                    for (var i = 0; i < fontNames.length; i++) {

                        $li = $('<li />');

                        font = fontNames[i];

                        $a = $('<a />', {
                            'class': 'fontname-option',
                            'href': '#',
                            'style': 'font-family:' + font
                        }).text(font);

                        $a.click(function() {
                            document.execCommand("fontname", false, $(this).text());
                            $(this).closest('.btn-group').removeClass('open');
                        });

                        $li.append($a);
                        $ul.append($li);
                    }

                    $control.append($ul);
                }
            },
            {
                label: "<div><span style='font-size:16px'>A</span><span style='font-size:10px;line-height:0'>A</span><span class='caret'></span></div>",
                action: function($control) {

                    $control.addClass('dropdown');
                    $control.addClass('fontsize-dropdown');
                    $control.attr('data-target', '.fontsize-dropdown');
                    $control.attr('data-toggle', 'dropdown');

                    $control.children('div:first').attr('id', 'fontsize-menu');
                    $control.children('div:first').addClass('dropdown-toggle');
                    $control.children('div:first').attr('data-toggle', 'dropdown');

                    var fontSizes = [
                        {
                            size: 1,
                            point: 8
                        }, {
                            size: 2,
                            point: 10
                        }, {
                            size: 3,
                            point: 12
                        }, {
                            size: 4,
                            point: 14
                        }, {
                            size: 5,
                            point: 18
                        }, {
                            size: 6,
                            point: 24
                        }, {
                            size: 7,
                            point: 36
                        }
                    ];

                    var fontSize;

                    var $ul = $('<ul />', {'class': 'dropdown-menu'});
                    var $li;
                    var $a;

                    for (var i = 0; i < fontSizes.length; i++) {

                        $li = $('<li />');

                        fontSize = fontSizes[i];

                        $a = $('<a />', {
                            'class': 'fontsize-option',
                            'href': '#'
                        }).text(fontSize.size + ' (' + fontSize.point + 'pt)');

                        $a.click(function() {
                            document.execCommand("FontSize", false, $(this).text().slice(0,  $(this).text().indexOf("(")));
                            $(this).closest('.btn-group').removeClass('open');
                        });

                        $li.append($a);
                        $ul.append($li);
                    }

                    $control.append($ul);
                }
            },
            {
                label: "<div style='color:#ff0000;'>A <span class='caret'></span></div>",
                action: function($control) {

                    $control.addClass('dropdown');
                    $control.addClass('toolbar-forecolor');
                    $control.attr('data-target', '.toolbar-forecolor');
                    $control.attr('data-toggle', 'dropdown');

                    $control.children('div:first').attr('id', 'fontcolor-dropdown');
                    $control.children('div:first').addClass('dropdown-toggle');
                    $control.children('div:first').attr('data-toggle', 'dropdown');

                    var $input = $('<input />', {
                        'type': 'text',
                        'id': 'forecolor-input',
                        'value':'#000000'
                    });

                    var $picker = $('<div />', {
                        'id': 'forecolor-picker'
                    });

                    var $ul = $('<ul />', {'class': 'dropdown-menu colorpanel'}).append($input, $picker);

                    $picker.farbtastic(function(color) {
                        $input.val(color);
                        document.execCommand("forecolor", false, color);
                        $(this).closest('.editor-toolbar-control').removeClass('open');

                        $('.toolbar-forecolor div').css({
                            "color": color
                        });

                        return false;
                    });


                    $control.append($ul);
                }
            }
        ],
        [
            {
                label: "<span class='icon-align-left'></span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('justifyLeft', false, null);
                    });
                }
            },
            {
                label: "<span class='icon-align-center'></span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('justifyCenter', false, null);
                    });
                }
            },
            {
                label: "<span class='icon-align-right'></span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('justifyRight', false, null);
                    });
                }
            },
            {
                label: "<span class='icon-align-justify'></span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('justifyfull', false, null);
                    });
                }
            }
        ],
        [
            {
                label: "<span class='icon-list'></span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('insertunorderedlist', false, null);
                    });
                }
            },
            {
                label: "<span class='icon-list-alt'></span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('insertorderedlist', false, null);
                    });
                }
            }
        ],
        [
            {
                label: "<span>H1</span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('formatblock', false, 'H1');
                    });
                }
            },
            {
                label: "<span>H2</span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('formatblock', false, 'H2');
                    });
                }
            },
            {
                label: "<span>H3</span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('formatblock', false, 'H3');
                    });
                }
            },
            {
                label: "<span>P</span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('formatblock', false, 'P');
                    });
                }
            },
            {
                label: "<span class='icon-comment'></span>",
                action: function($control) {
                    $control.click(function() {
                        document.execCommand('blockquote', false, null);
                    });
                }
            },
            {
                label: "<span>@</span>",
                action: function($control) {
                    $control.click(function() {
                        var urlPrompt = prompt("URL:", "http://");
                        document.execCommand('createlink', false, urlPrompt);
                    });
                }
            }
        ]
    ];

    this.init($emptyContainer);
}

Editor.prototype.init = function($emptyContainer) {

    this.$editor = $emptyContainer;

    this.$toolbar = $('<div />').attr('id', 'editor-toolbar');
    this.$widgetGroup = $('<div />').attr('id', 'editor-widget-group').attr('class', 'btn-group').css('float', 'left');
    this.$textGroup = $('<div />').attr('id', 'editor-text-group');
    this.$editArea = $('<div />').attr('id', 'editor-edit-area');
    //
    // find elements that have previously been edited and add them to the editArea
    $('#editor-wrapper').find('.editor-widget').each(function(i, item) {
    });
    //

    this.setupToolbar();

    this.$toolbar.append(this.$widgetGroup, this.$textGroup);
    this.$editor.append(this.$toolbar, this.$editArea);

    this.$editArea.resizable({ handles: "s" });
    var edit = this.$editArea;
    var that2 = this;
    $('#editor-wrapper').find('.editor-widget').each(function(i, item) {
      $(item).addClass('blue-border');
      that2.addWidgetHandles($(item));
      $(item).draggable({
            containment: that2.$editArea,
            snap: true,
            handle: '.move-button'
        });
      edit.append(item);
    });
}

Editor.prototype.getFormatedHTMLContent = function() {

    $('*').remove('.orange-border');
    $('*').remove('.yellow-border');
    $('*').remove('.blue-border');

    return this.$editArea.html();
}

Editor.prototype.setupToolbar = function() {

    var that = this;

    var $group = $('<div />').attr('class', 'btn-group').css('float', 'left');
    var $control = null;

    // For each of the controls stored in widgetControls object,
    // add it to the toolbar and attach to it a click event
    $.each(this.widgetControls, function(key, val) {

        $control = $('<div />', {'class': 'btn editor-toolbar-control'});
        $control.html(val.label);

        $control.click(function() {

            if (val.inputFields) {
                that.renderWithUserInput(val);
            } else {
                that.render(val);
            }
        });

        $group.append($control);
    });

    that.$textGroup.append($group);

    $.each(this.textControls, function(key, group) {
        $group = $('<div />').attr('class', 'btn-group').css('float', 'left');

        $.each(group, function(key, val) {
            $control = $('<div />', {'class': 'btn editor-toolbar-control'}).html(val.label);

            $control.mousedown(function() {
                that.savedSel = saveSelection();
            });

            $control.click(function() {
                if (that.savedSel) restoreSelection(that.savedSel);
            });

            val.action($control);

            $group.append($control);
        });

        that.$textGroup.append($group);

    });

    that.$textGroup.append('<div style="clear: both" />');
}

Editor.prototype.addWidgetHandles = function($widget) {

    var $moveButton = $('<div />', {
        'class': 'move-button'
    }).html('<div class="icon-move" />');

    var $deleteButton = $('<button />', {
        'class': 'delete-button'
    }).html('<div class="icon-remove" />');

    $moveButton.hide();
    $deleteButton.hide();

    $deleteButton.click(function() {
        $widget.remove();
    });

    $widget.hover(function() {
        $moveButton.show();
        $deleteButton.show();
    }, function() {
        $moveButton.hide();
        $deleteButton.hide();
    });

    var $widgetHandlers = $('<div />', {
        'class': 'widget-handlers'
    }).append($moveButton, $deleteButton);

    $widget.append($widgetHandlers);
}

Editor.prototype.render = function(widgetControl) {

    var that = this;

    var $widget = $('<div />', {'class': 'editor-widget'}).html(widgetControl.tmpl());

    this.addWidgetHandles($widget);

    $widget.addClass('blue-border');

    $widget.focusin(function() {

        if ($(this).hasClass('blue-border')) {
            $(this).removeClass('blue-border');
        }

        $(this).addClass('yellow-border');
    });

    $widget.focusout(function() {

        if ($(this).hasClass('yellow-border')) {
            $(this).removeClass('yellow-border');
        }

        $(this).addClass('blue-border');
    });

    if (widgetControl.name === 'speechBubble') {
        $widget.css({
            'padding-right': '70px',
            'padding-bottom': '55px'
        });
    }

    this.$editArea.append($widget);

    $widget.resizable({
        containment: that.$editArea,
        minHeight: 50,
        minWidth: 50,
        autoHide: true,
        handles: 'n, e, s, w'
        //grid: [92, 94] total is 924
    }).draggable({
        containment: that.$editArea,
        snap: true,
        handle: '.move-button'
        //grid: [92, 92] do this with the other widgets
    });
}

Editor.prototype.renderWithUserInput = function(widgetControl) {

    var that = this;
    var $widget = null;

    var $form = $('<form action="#" />');
    var $input = null;

    $.each(widgetControl.inputFields, function(key, val) {

        $input = $('<input />', {
            'class': 'input-xlarge',
            'id': val.id,
            'name': val.id,
            'type': val.inputType,
            'placeholder': val.placeholder
        });

        $form.append($input);
    });

    $('#input-modal .modal-body form').remove();
    $('#input-modal .modal-body').append($form);
    $('#input-modal').modal('show');

    $('#input-ok').unbind();
    $('#input-cancel').unbind();

    $('#input-ok').click(function() {
        $.each(widgetControl.inputFields, function(key, val) {
            var fullID = '#' + val.id;
            that.inputValues[val.id] = $(fullID).val();
        });

        $widget = $('<div />', {'class': 'editor-widget'}).html(widgetControl.tmpl());

        that.addWidgetHandles($widget);

        that.inputValues = {};

        $widget.addClass('blue-border');

        $widget.focusin(function() {

            if ($(this).hasClass('blue-border')) {
                $(this).removeClass('blue-border');
            }

            $(this).addClass('yellow-border');
        });

        $widget.focusout(function() {

            if ($(this).hasClass('yellow-border')) {
                $(this).removeClass('yellow-border');
            }

            $(this).addClass('blue-border');
        });

        $form.remove();
        $('#input-modal').modal('hide');
        that.$editArea.append($widget);



        //var $speechBubble = $widget.find('.triangle-border');
        //var minHeight = ($speechBubble) ? $speechBubble.height() : 50;
        //var minWidth = ($speechBubble) ? $speechBubble.width() : 50;

        if (widgetControl.name === 'speechBubble') {
            $widget.css({
                'padding-right': '70px',
                'padding-bottom': '40px'
            });
        }

        var $media = $widget.find('img, video');
        var ratio = $media.width()/$media.height();

        $widget.resizable({
            containment: that.$editArea,
            minHeight: 50,
            minWidth: 50,
            autoHide: true,
            handles: 'n, e, s, w',
            aspectRatio: ratio
        }).draggable({
            containment: that.$editArea,
            snap: true,
            handle: '.move-button'
        });
    });

    $('#input-cancel').click(function() {
        $form.remove();
        $('#input-modal').modal('hide');
    });
}

function saveSelection() {
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            var ranges = [];
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
            return ranges;
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }
    return null;
}

function restoreSelection(savedSel) {
    if (savedSel) {
        if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
            for (var i = 0, len = savedSel.length; i < len; ++i) {
                sel.addRange(savedSel[i]);
            }
        } else if (document.selection && savedSel.select) {
            savedSel.select();
        }
    }
}

$(function() {
    $('#input-modal').hide();
    new Editor($('#editor-wrapper'));

    $('form').submit(function() {
      $('*').removeClass('orange-border');
      $('*').removeClass('yellow-border');
      $('*').removeClass('blue-border');

      $('.html_field input').val($("#editor-edit-area").html());
    });
});
