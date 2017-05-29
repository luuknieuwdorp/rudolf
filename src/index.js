const electron = require('electron')
const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
  var fs = require('fs');
  let win = new BrowserWindow({width:800, height:600, icon: __dirname + '/icons/icon.png'})
  win.loadURL('https://web.whatsapp.com')
  win.setMenu(null);
  let content = win.webContents
//win.webContents.openDevTools()
  win.webContents.on('did-finish-load', function() {
        win.webContents.insertCSS(css)
  })
  var css = [
  	":root {",
  	"",
  	"  --bgn: #272c35; /* main bg color */",
  	"  --bgd: #1f232a; /* darker highlight color */",
  	"  --bgh: #3c4149; /* lighter highlight color */",
  	"  --bgt: #b6babf; /* faded text color */",
  	"  --bgo: #e9f4fe; /* text color */",
  	"  --bga: #00ff7f; /* accent color */",
  	"",
  	"}",
  	"",
  	"/* preloader */",
  	"#startup, #initial_startup { background-color: var(--bgn) !important; }",
  	"",
  	"/* login page (XD) */",
  	"#wrapper {",
  	"  background-color: transparent !important;",
  	"  background-image: none !important; }",
  	"  /* accent background */",
  	"  #wrapper::before {",
  	"    display: none !important; }",
  	"    /* modal */",
  	"    #window, #platforms {",
  	"      background-color: var(--bgn) !important; }",
  	"  /* qr code fix */",
  	"  .qrcode { border: 1px solid var(--bgt) !important; }",
  	"  /* modal text */",
  	"  #window .entry-main .entry-text div, #platforms ul li {",
  	"    color: var(--bgt) !important; }",
  	"/* inverted icons */",
  	"  .qrcode .icon, .entry-platform .icon { filter: invert(0%) !important; }",
  	"",
  	"/* notification button */",
  	".butterbar, .butterbar > div > div {",
  	"  background-color: var(--bgh) !important;",
  	"  color: var(--bgt) !important; }",
  	"",
  	"/* startup intro thing */",
  	".intro {",
  	"  background-color: var(--bgn) !important;",
  	"  border-left: none !important; }",
  	"",
  	"/* divider. xd */",
  	".intro-divider { background-color: var(--bgd) !important; }",
  	"",
  	"/* intro image */",
  	".intro-image {",
  	"  width: 250px !important;",
  	"  height: 250px !important;",
  	"  border-radius: 50% !important;",
  	"/*   opacity: 0.4 !important; */",
  	"  background-size: cover !important; }",
  	"",
  	"/* small bg-image fix */",
  	"#app {",
  	"  background-image: none !important;",
  	"  background-color: var(--bgn) !important; ",
  	"  z-index: 1 !important; /* quick fix to show the bg image */ }",
  	"",
  	"/* another app element. ¯\\_(ツ)_/¯ */",
  	".app { background: none !important; }",
  	"",
  	"/* background image */",
  	".app-wrapper::after {",
  	"  z-index: -1;",
  	"  width: calc(100% + 20px) !important;",
  	"  height: calc(100% + 20px) !important;",
  	"  top: -10px !important;",
  	"  left: -10px !important;",
  	"  background-color: var(--bgh) !important;",
  	"  ",
  	"  background-image: url(http://i.imgur.com/r1r1S0j.jpg) !important;",
  	"/*   background-image: url(\'https://unsplash.it/1920/1080/?randomz\') !important; */",
  	"/*   background-image: url(\'https://images.unsplash.com/15/leaf.JPG\') !important; */",
  	"  ",
  	"  filter: blur(5px) hue-rotate(0deg) grayscale(0%) opacity(40%) !important;",
  	"  ",
  	"  background-size: cover !important;",
  	"  background-position: center !important;",
  	"  background-repeat: no-repeat !important; }",
  	"",
  	"/* inverted icons */",
  	".icon, .context-icon { filter: invert(100%) grayscale(100%) !important; }",
  	"/* re-inverted icons ._. */",
  	".icon-alert.icon-alert-notification, .icon-search-morph, .btn-close-drawer, .icon-back-light, .icon-x-alt, .icon-chevron-right-alt, .icon-emoji-gifs, .icon-send-light, .icon-forward-chat, .icon-menu-white, .list-action-icon .icon { filter: invert(0%) !important; }",
  	"",
  	"/* grid */",
  	"#side > * { background-color: var(--bgd) !important; }",
  	"",
  	"/* header styles */",
  	"#side > header { ",
  	"  padding: 0 10px !important;",
  	"  height: 60px !important; }",
  	"",
  	"/* chat box shadow */",
  	"#main { box-shadow: 0 0 5px 0 rgba(0,0,0,0.2) !important; }",
  	"",
  	"/* active menu */",
  	".dropdown { background-color: var(--bgh) !important; }",
  	"  /* dropdown item links */",
  	"  .menu-item a { color: var(--bgt) !important; }",
  	"    /* hovering over dropdown item */",
  	"    .menu-item:hover { background-color: var(--bgd) !important; }",
  	"",
  	"/* search or start new chat */",
  	".cont-input-search, .chatlist-panel-search, .drawer .chatlist {",
  	"  border: 0px solid transparent !important;",
  	"  background-color: var(--bgh) !important; }",
  	"  /* input element */",
  	"  .cont-input-search input { ",
  	"    background-color: transparent !important;",
  	"    color: var(--bgt) !important; }",
  	"  /* active */",
  	"  .subheader-search.active {",
  	"    box-shadow: 0px 2px 3px rgba(0,0,0,0.07);",
  	"    box-shadow: none !important; }",
  	"  /* chat items */",
  	"  .infinite-list-item .list-title {",
  	"    background-color: var(--bgh) !important; }",
  	"",
  	"/* drawer menu\'s and stuff */",
  	".drawer { background-color: var(--bgd) !important; }",
  	".drawer header { background-color: var(--bgh) !important; }",
  	".drawer-body { background-color: var(--bgd) !important; margin-bottom: 10px !important; }",
  	"/* gaps on the sides. */",
  	".drawer-info .drawer-section { margin: 10px 10px 0px !important; }",
  	"",
  	"/* alternative colored elements */",
  	".well, .well-simple, .well-chat, .multi-vcard-dialog-contact, .list-action {",
  	"  background-color: var(--bgh) !important;",
  	"  box-shadow: 0 1px 3px rgba(0,0,0,0.08); }",
  	"",
  	"/* placeholder text */",
  	".text-input, .drawer-title-body, .chat-title, .header-title, .well-chat-name, .title, .starred-title-main, .starred-title-meta, .text-input .label-text, .chat-status, .media-content .media-caption, .list-action, body, select, .inputarea, .chat.member .chat-body *, .chat.member .header-body * { color: var(--bgt) !important; }",
  	"",
  	"/* starred messages */",
  	".starred-msg-wrapper.hover { background-color: var(--bgh) !important;}",
  	"",
  	"/* unread message */",
  	".unread-count { background-color: var(--bgh) !important; }",
  	"",
  	"/* chat list styles */",
  	".chat { background-color: var(--bgn) !important; }",
  	".chat:hover { background-color: var(--bgh) !important; }",
  	".chat .chat-body { border: none !important; }",
  	".chat .chat-body * { color: var(--bgt) !important; }",
  	"",
  	"/* weird things. */",
  	".chatlist .chat:hover::after, .chatlist .chat.hover::after, .chatlist .chat.active::after, .row-drawer-item .row-body, .list-action, .list-action-alt .list-action-body {",
  	"  border-bottom: 0px solid transparent !important; }",
  	".pane-chat-header::after, .subheader-search::after, .starred-msg-wrapper::before, .starred-msg-wrapper.hover::before, .starred-msg-wrapper.hover::after, select {",
  	"  background-color: transparent !important;",
  	"  border-bottom: 0px solid transparent !important; }",
  	"/* haHAA very funny. */",
  	".three .pane-chat-body, .three .pane-chat-footer { border: none !important; }",
  	"",
  	"/* chat drawer */",
  	"#main.pane-chat { background-color: var(--bgn) !important; }",
  	"  /* chat title */",
  	"  header.pane-chat-header, .pane-three {",
  	"    border-left: 0px solid transparent !important;",
  	"    background-color: var(--bgn) !important;  }",
  	"  /* chat input */",
  	"  .pane-chat-footer {",
  	"    background-color: var(--bgn) !important;",
  	"    border-left: 0px solid transparent !important; }",
  	"    /* child element */",
  	"    .block-compose { background-color: transparent !important; }",
  	"      /* text input element */",
  	"      .block-compose .input-container {",
  	"        background-color: var(--bgh) !important;",
  	"        border: 0px solid transparent !important;",
  	"        box-shadow: inset 0 0 2px 0 rgba(0,0,0,0.33), 0 0 6px 0 rgba(0,0,0,0.1) !important;",
  	"        color: var(--bgt) !important; /* text color fix */ }",
  	"      /* reply. (: */",
  	"      .compose-popup-panel { background-color: var(--bgn) !important; }",
  	"        /* message content */",
  	"        .compose-popup-panel .quoted-msg-status { background-color: var(--bgh) !important; } ",
  	"        /* close reply button */",
  	"        .btn-background { background-color: var(--bgh) !important; }",
  	"",
  	"/* message info */",
  	".pane-preview, .pane-preview .pane-chat-tile { background: var(--bgh) !important; }",
  	"",
  	"/* bold message */",
  	".message-text strong, .media-caption strong {",
  	"  color: var(--bgo) !important;",
  	"  text-shadow: none !important; }",
  	"",
  	"/* day/time message*/",
  	".message-system-body {",
  	"  color: var(--bgo) !important;",
  	"  text-shadow: none !important;",
  	"  background-color: var(--bgh) !important;",
  	"  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13) !important; }",
  	"",
  	"/* button more */",
  	".btn-more { background-color: var(--bgh) !important; }",
  	"",
  	"/* new message indicator */",
  	".msg-unread {",
  	"  border: none !important;",
  	"  background-color: var(--bgd) !important; }",
  	"  /* body element */",
  	"  .msg-unread-body {",
  	"    background-color: var(--bgh) !important;",
  	"    color: var(--bgt) !important; }",
  	"",
  	"",
  	"/* bubble in */",
  	".message-in, .message-out {",
  	"  background-color: var(--bgh) !important;",
  	"  border-radius: 5px !important; }",
  	"  /* bubble tails */",
  	"  .tail-container { display: none !important; }",
  	"  /* bubbles text */",
  	"  .message-text, .message-meta { color: var(--bgt) !important; }",
  	"  /* message menu */",
  	"  .context { background: var(--bgh) !important; }",
  	"  /* message received fix */",
  	"  .icon.icon-msg-dblcheck-ack { filter: invert(0%) !important; }",
  	"",
  	"/* chat section bg */",
  	".pane-chat-tile { filter: invert(80%) !important; }",
  	"",
  	"",
  	"/* emoji menu lel */",
  	".emoji-panel-body-container, .emoji-search-row, .emoji-search, .dropdown-picker, .dropdown-picker .nib { background: var(--bgn) !important; }",
  	"  /* emoji tabs */",
  	"  .emoji-panel-header { background: var(--bgd) !important; }",
  	"  /* emoji search */",
  	"  .emoji-search-row-input { background-color: var(--bgh) !important; }",
  	"    /* input text color fix*/",
  	"    .emoji-search-row-input input { color: var(--bgt) !important; }",
  	"  /* inverted menu icons */",
  	"  .menu-tab { filter: invert(100%) !important; }",
  	"  /* gif default bg */",
  	"  .gif-search-gif-wrapper { background-color: var(--bgh) !important; }",
  	"  /* add media button*/",
  	"  .btn-fill { background-color: var(--bgn) !important; }",
  	"",
  	"",
  	"/* incoming messages */",
  	".incoming-msgs { background-color: var(--bgh) !important; }",
  	"",
  	"",
  	"/* select messages (WHY WOULD YOU EVER DO THAT?!) */",
  	".pane-chat-body.selectable { background-color: rgba(255, 255, 255, 0.2) !important; }",
  	"  /* selected message */",
  	"  .selected .msg-select {",
  	"    background-color: rgba(39, 44, 53, 0.25) !important; }",
  	"    /* voodoo magic */",
  	"    .msg-select:hover { background-color: rgba(39, 44, 53, 0.25) !important; }",
  	"  /* footer */",
  	"  .multi-controls { background-color: var(--bgd) !important; }",
  	"",
  	"",
  	"/* photo plz */",
  	".media-body-container-background { background-color: var(--bgn) !important; }",
  	"  /* avatar zoom in/out */",
  	"  .avatar-picker-controls { background-color: var(--bgh) !important; }",
  	"  /* footer */",
  	"  .drawer-edit .capture-footer { background-color: var(--bgd) !important; }",
  	"",
  	"",
  	"/* new group wrapper */",
  	".new-group-contacts, .drawer-section-main { background-color: var(--bgd) !important;}",
  	"  /* search */",
  	"  .new-group-search { background-color: var(--bgh) !important; }",
  	"    /* search element ._. */",
  	"    .input-line {",
  	"      color: var(--bgt) !important;",
  	"      border-bottom: 1px solid rgba(0, 0, 0, 0) !important; }",
  	"  /* system message */",
  	"  .message-system-e2e {",
  	"    color: var(--bgt) !important;",
  	"    text-shadow: none !important;",
  	"    background-color: var(--bgh) !important; }",
  	"",
  	"",
  	"/* media viewer */",
  	".media-viewer {",
  	"  background-color: rgba(39,44,53,0.90) !important; }",
  	"  /* media viewer header */",
  	"  .media-panel-header, .chat.media-chat {",
  	"    background-color: var(--bgh) !important; }",
  	"  /* media viewer footer */",
  	"  .media-collection {",
  	"    background-color: var(--bgh) !important;",
  	"    border: none !important; }",
  	"  /* media, links, docs */",
  	"  .media-canvas { outline: none !important; }",
  	"",
  	"",
  	"/* modal */",
  	".backdrop { background-color: rgba(25, 25, 35, 0.85); }",
  	"  /* modal element */",
  	"  .popup { background-color: var(--bgn) !important; }",
  	"    /* modal text */",
  	"    .popup-title, .popup-contents { color: var(--bgt) !important; }",
  	"    /* separator fix */",
  	"    .popup hr { border-top: 1px solid rgba(0, 0, 0, 0) !important; }",
  	"  /* transparent pop-up. ¯\\_(ツ)_/¯ */",
  	"  .backdrop-transparent { background: transparent !important; }",
  	"",
  	"",
  	"/* custom text code thing doodle. */",
  	".input-placeholder {",
  	"  color: transparent !important;",
  	"  width:  100% !important; }",
  	"  /* magic-moomoo! */",
  	"  .input-emoji .input-placeholder::before {",
  	"    content: \'∞\' !important;",
  	"    color: var(--bgt) !important;",
  	"    text-align: center !important;",
  	"    position: absolute !important;",
  	"    width: 100% !important; }",
  	"",
  	"/* J\'s requested feature */",
  	".chatlist > div > .infinite-list-item { filter: blur(10px); transition: 200ms ease-in-out; }",
  	".chatlist > div > .infinite-list-item:hover { filter: blur(0px); }",
  	"",
  	"/* easter egg(?) */",
  	".app-wrapper::before {",
  	"  z-index: 999 !important;",
  	"  position: absolute !important;",
  	"  top: 0 !important;",
  	"  left: 0 !important;",
  	"  width: 100% !important;",
//	"  content: \'•-•\' !important;",
  	"  color: var(--bgt) !important;",
  	"  font-size: 24px !important;",
  	"  line-height: 19px !important;",
  	"  text-align: center !important;",
  	"}",
  	"",
  	"/* THE ONE PROBE */",
  	"/* *:hover { border: 1px dotted crimson !important; } */"
  ].join("\n")
})
