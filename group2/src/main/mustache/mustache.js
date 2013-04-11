exports.home = '<div class="container-narrow">' + 
'' + 
'          <div class="masthead">' + 
'            <ul class="nav nav-pills pull-right">' + 
'              <li class="active"><a href="#bob">Home</a></li>' + 
'              <li><a href="#list">The List</a></li>' + 
'              <li><a href="#examples">Examples</a></li>' + 
'            </ul>' + 
'            <h3 class="muted">One Page App</h3>' + 
'          </div>' + 
'' + 
'          <hr>' + 
'' + 
'          <div class="jumbotron">' + 
'            <h1>Common Windows &amp; Mac fonts</h1>' + 
'            <p class="lead">A list of common fonts to all versions of Windows and their Mac substitutes, referred sometimes as "browser safe fonts".</p>' + 
'            <a class="btn btn-large btn-success" href="the-list.html">Obligatory Button</a>' + 
'          </div>' + 
'' + 
'          <hr>' + 
'' + 
'            <div class="row-fluid">' + 
'            <div class="span12">' + 
'                <h2>Introduction</h2>' + 
'                <small>Warning: The grammar on this page is atrocious</small>' + 
'                <p>If you are new to web design, maybe you are thinking: "Why I have to limit to that small set of fonts? I have a large collection of nice fonts in my computer". Well, as seasoned web designers already know, browsers can use only the fonts installed in each computer, so it means that every visitor of your web page needs to have all the fonts you want to use installed in his/her computer. Of course, different people will have different fonts installed, and thus come the need of a standard set of fonts. Fortunately, CSS allows set several values for the font-family property, which eases the task a bit.</p>' + 
'' + 
'                <p>If you want to know how the fonts are displayed in other OS\'s or browsers than yours, after the table you can find several screen shots of this page in different systems and browsers. Also, you can take a look to the list of the default fonts included with each version of Windows.</p>                ' + 
'            </div>' + 
'                ' + 
'            </div>' + 
'' + 
'          <hr>' + 
'' + 
'          <div class="footer">' + 
'            <p class="notes"><br>The Mac font list was obtained from the <a class="external" target="_blank" href="http://www.webbedenvironments.com/css_dhtml_ajax/downloads/BrowserSafeFonts.pdf">Browser Safe Fonts' + 
'PDF</a> of <a class="external" target="_blank" href="http://www.webbedenvironments.com/dhtml/">webbedEnvironments</a>' + 
'and from the <a class="external" target="_blank" href="http://en.wikipedia.org/wiki/List_of_fonts_in_Mac_OS_X">List' + 
'of fonts in Mac OS X</a> of the <a class="external" target="_blank" href="http://www.wikipedia.org">Wikipedia</a>.</p>' + 
'' + 
'<p id="footer">';

exports.list = '   <div class="container-narrow">'+ 
''+ 
'          <div class="masthead">'+ 
'          <ul class="nav nav-pills pull-right">'+ 
'             <li><a href="#bob">Home</a></li>'+ 
'              <li class="active"><a href="#list">The List</a></li>'+ 
'              <li><a href="#examples">Examples</a></li>'+ 
'            </ul>'+ 
'            <h3 class="muted">One Page App</h3>'+ 
'          </div>'+ 
''+ 
'          <hr>'+ 
''+ 
''+ 
'          <div class="row-fluid marketing">'+ 
'            <div class="span12">'+ 
'                <p>First, a few introductory notes:</p>'+ 
'                <ul>'+ 
'                  <li>The names in grey are the generic family of each font.</li>'+ 
'                  <li>In some cases the Mac equivalent is the same font, since Mac OS X also includes some of the'+ 
'                  fonts shipped with Windows.</li>'+ 
'                  <li>The notes at the bottom contains specific information about some of the fonts.</li>'+ 
'                </ul>                '+ 
'            </div>'+ 
'<!-- The List -->'+ 
'<table class="table table-striped">'+ 
'<caption>Windows fonts / <span class="mac">Mac fonts</span> / <em>Font family</em></caption>'+ 
'<colgroup><col>'+ 
'<col class="bold">'+ 
'</colgroup><tbody><tr>'+ 
'  <th style="width: 50%; text-align: center">Normal style</th>'+ 
'  <th style="text-align: center">Bold style</th>'+ 
'</tr>'+ 
'<tr style="font-family: Arial, Helvetica, sans-serif">'+ 
'  <td>Arial, <span class="mac">Arial, Helvetica</span>, <em>sans-serif</em></td>'+ 
'  <td>Arial, <span class="mac">Arial, Helvetica</span>, <em>sans-serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'Arial Black\', Gadget, sans-serif">'+ 
'  <td>Arial Black, <span class="mac">Arial Black, Gadget</span>, <em>sans-serif</em></td>'+ 
'  <td>Arial Black, <span class="mac">Arial Black, Gadget</span>, <em>sans-serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'Comic Sans MS\', Textile, cursive">'+ 
'  <td>Comic Sans MS, <span class="mac">Comic Sans MS<sup>5</sup></span>, <em>cursive</em></td>'+ 
'  <td>Comic Sans MS, <span class="mac">Comic Sans MS<sup>5</sup></span>, <em>cursive</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'Courier New\', Courier, monospace">'+ 
'  <td>Courier New, <span class="mac">Courier New</span>, <em>monospace</em></td>'+ 
'  <td>Courier New, <span class="mac">Courier New</span>, <em>monospace</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: Georgia, \'Times New Roman\', Times, serif">'+ 
'  <td>Georgia<sup>1</sup>, <span class="mac">Georgia</span>, <em>serif</em></td>'+ 
'  <td>Georgia<sup>1</sup>, <span class="mac">Georgia</span>, <em>serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: Impact, Charcoal, sans-serif">'+ 
'  <td>Impact, <span class="mac">Impact<sup>5</sup>, Charcoal<sup>6</sup></span>, <em>sans-serif</em></td>'+ 
'  <td>Impact, <span class="mac">Impact<sup>5</sup>, Charcoal<sup>6</sup></span>, <em>sans-serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'Lucida Console\', Monaco, monospace">'+ 
'  <td>Lucida Console, <span class="mac">Monaco<sup>5</sup></span>, <em>monospace</em></td>'+ 
'  <td>Lucida Console, <span class="mac">Monaco<sup>5</sup></span>, <em>monospace</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif">'+ 
'  <td>Lucida Sans Unicode, <span class="mac">Lucida Grande</span>, <em>sans-serif</em></td>'+ 
'  <td>Lucida Sans Unicode, <span class="mac">Lucida Grande</span>, <em>sans-serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'Palatino Linotype\', \'Book Antiqua\', Palatino, serif">'+ 
'  <td>Palatino Linotype, Book Antiqua<sup>3</sup>, <span class="mac">Palatino</span>, <em>serif</em></td>'+ 
'  <td>Palatino Linotype, Book Antiqua<sup>3</sup>, <span class="mac">Palatino</span>, <em>serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: Tahoma, Geneva, sans-serif">'+ 
'  <td>Tahoma, <span class="mac">Geneva</span>, <em>sans-serif</em></td>'+ 
'  <td>Tahoma, <span class="mac">Geneva</span>, <em>sans-serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'Times New Roman\', Times, serif">'+ 
'  <td>Times New Roman, <span class="mac">Times New Roman, Times</span>, <em>serif</em></td>'+ 
'  <td>Times New Roman, <span class="mac">Times New Roman, Times</span>, <em>serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'Trebuchet MS\', Helvetica, sans-serif">'+ 
'  <td>Trebuchet MS<sup>1</sup>, <span class="mac">Trebuchet MS</span>, <em>sans-serif</em></td>'+ 
'  <td>Trebuchet MS<sup>1</sup>, <span class="mac">Trebuchet MS</span>, <em>sans-serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: Verdana, Geneva, sans-serif">'+ 
'  <td>Verdana, <span class="mac">Verdana, Geneva</span>, <em>sans-serif</em></td>'+ 
'  <td>Verdana, <span class="mac">Verdana, Geneva</span>, <em>sans-serif</em></td>'+ 
'</tr>'+ 
'<tr class="symbol" style="font-family: Symbol">'+ 
'  <td>Symbol, <span class="mac">Symbol</span> <span style="font-family: Verdana; white-space: nowrap">(Symbol<sup>2</sup>, <span class="mac">Symbol<sup>2</sup></span>)</span></td>'+ 
'  <td>Symbol, <span class="mac">Symbol</span> <span style="font-family: Verdana; white-space: nowrap">(Symbol<sup>2</sup>, <span class="mac">Symbol<sup>2</sup></span>)</span></td>'+ 
'</tr>'+ 
'<tr class="symbol" style="font-family: Webdings">'+ 
'  <td>Webdings, <span class="mac">Webdings</span> <span style="font-family: Verdana; white-space: nowrap">(Webdings<sup>2</sup>, <span class="mac">Webdings<sup>2</sup></span>)</span></td>'+ 
'  <td>Webdings, <span class="mac">Webdings</span> <span style="font-family: Verdana; white-space: nowrap">(Webdings<sup>2</sup>, <span class="mac">Webdings<sup>2</sup></span>)</span></td>'+ 
'</tr>'+ 
'<tr class="symbol" style="font-family: Wingdings, \'Zapf Dingbats\'">'+ 
'  <td>Wingdings,&nbsp;<span class="mac">Zapf&nbsp;Dingbats</span> <span style="font-family: Verdana; white-space: nowrap">(Wingdings<sup>2</sup>,&nbsp;<span class="mac">Zapf&nbsp;Dingbats<sup>2</sup></span>)</span></td>'+ 
'  <td>Wingdings,&nbsp;<span class="mac">Zapf&nbsp;Dingbats</span> <span style="font-family: Verdana; white-space: nowrap">(Wingdings<sup>2</sup>,&nbsp;<span class="mac">Zapf&nbsp;Dingbats<sup>2</sup></span>)</span></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'MS Sans Serif\', Geneva, sans-serif">'+ 
'  <td>MS Sans Serif<sup>4</sup>, <span class="mac">Geneva</span>, <em>sans-serif</em></td>'+ 
'  <td>MS Sans Serif<sup>4</sup>, <span class="mac">Geneva</span>, <em>sans-serif</em></td>'+ 
'</tr>'+ 
'<tr style="font-family: \'MS Serif\', \'New York\', serif">'+ 
'  <td>MS Serif<sup>4</sup>, <span class="mac">New York<sup>6</sup></span>, <em>serif</em></td>'+ 
'  <td>MS Serif<sup>4</sup>, <span class="mac">New York<sup>6</sup></span>, <em>serif</em></td>'+ 
'</tr>'+ 
'</tbody></table>'+ 
'<!-- End The List -->'+ 
'<div class="span12">'+ 
'<div class="notes">'+ 
'  <p><sup>1</sup> Georgia and Trebuchet MS are bundled with Windows 2000/XP and they are'+ 
'  also included in the IE font pack (and bundled with other MS applications), so they'+ 
'  are quite common in Windows 98 systems.</p>'+ 
'  <p><sup>2</sup> Symbolic fonts are only displayed in Internet Explorer, in other browsers a'+ 
'  font substitute is used instead (although the Symbol font does work in Opera and the Webdings'+ 
'  works in Safari).</p>'+ 
'  <p><sup>3</sup> Book Antiqua is almost exactly the same font that Palatino Linotype, Palatino Linotype'+ 
'  is included in Windows 2000/XP while Book Antiqua was bundled with Windows 98.</p>'+ 
'  <p><sup>4</sup> These fonts are not TrueType fonts but bitmap fonts, so they won\'t'+ 
'  look well when using some font sizes (they are designed for 8, 10, 12, 14, 18 and 24 point'+ 
'  sizes at 96 DPI).</p>'+ 
'  <p class="mac"><sup>5</sup> These fonts work in Safari but only when using the normal font style,'+ 
'  and not with bold or italic styles. Comic Sans MS works in bold but not in italic. Other Mac'+ 
'  browsers seems to emulate properly the styles not provided by the font (thanks to <a class="external" target="_blank" href="http://christianfecteau.com/">Christian Fecteau</a> for the tip).</p>'+ 
'  <p class="mac"><sup>6</sup> These fonts are present in Mac OS X only if <strong>Classic</strong> is'+ 
'  installed (thanks to Julian Gonggrijp for the corrections).</p>'+ 
'</div>    '+ 
'</div>'+ 
''+ 
'          </div>'+ 
'';

exports.examples = '<div class="container-narrow">'+
''+
'          <div class="masthead">'+
'            <ul class="nav nav-pills pull-right">'+
'              <li><a href="#bob">Home</a></li>'+
'              <li><a href="#list">The List</a></li>'+
'              <li class="active"><a href="#examples">Examples</a></li>'+
'            </ul>'+
'            <h3 class="muted">One Page App</h3>'+
'          </div>'+
''+
'          <hr>'+
''+
''+
'<div class="row-fluid marketing">'+
'<div class="span12">'+
'<ul>'+
'  <li><a href="img/Font-list-MacOSX-Firefox-ClearType-2.png">Mac OS X 10.4.8, Firefox 2.0, font smoothing enabled</a> (thanks to Juris Vecvanags for the screen shot)</li>'+
'  <li><a href="img/Font-list-MacOSX-Firefox-ClearType.png">Mac OS X 10.4.4, Firefox 1.5, font smoothing enabled</a> (thanks to Eric Zavesky for the screen shot)</li>'+
'  <li><a href="img/Font-list-MacOSX-Safari3-ClearType.png">Mac OS X 10.4.11, Safari 3.0.4, font smoothing enabled</a> (thanks to Nolan Gladius for the screen shot)</li>'+
'  <li><a href="img/Font-list-MacOSX-Safari-ClearType.png">Mac OS X 10.4.4, Safari 2.0.3, font smoothing enabled</a> (thanks to Eric Zavesky for the screen shot)</li>'+
'  <li><a href="img/Font-list-Vista-IE7-ClearType.png">Windows Vista, Internet Explorer 7, ClearType enabled</a> (thanks to Michiel Bijl for the screen shot)</li>'+
'  <li><a href="img/Font-list-Vista-Firefox2-ClearType.png">Windows Vista, Firefox 2.0, ClearType enabled</a> (thanks to Michiel Bijl for the screen shot)</li>'+
'  <li><a href="img/Font-list-WinXP-IE6-ClearType.png">Windows XP, Internet Explorer 6, ClearType enabled</a></li>'+
'  <li><a href="img/Font-list-WinXP-Firefox-ClearType.png">Windows XP, Firefox 1.0.7, ClearType enabled</a></li>'+
'  <li><a href="img/Font-list-WinXP-IE6.png">Windows XP, Internet Explorer 6, Basic font smoothing enabled</a></li>'+
'  <li><a href="img/Font-list-WinXP-Firefox.png">Windows XP, Firefox 1.0.7, Basic font smoothing enabled</a></li>'+
'  <li><a href="img/Font-list-Win2000-IE6.png">Windows 2000, Internet Explorer 6, Basic font smoothing enabled</a></li>'+
'  <li><a href="img/Font-list-Win2000-Firefox.png">Windows 2000, Firefox 1.0.7, Basic font smoothing enabled</a></li>'+
'  <li><a href="img/Font-list-Ubuntu7-Gnome.png">Linux (Ubuntu 7.04 + Gnome), Firefox 2.0</a> (thanks to Juris Vecvanags for the screen shot)</li>'+
'</ul>'+
'<p>Note that while the ClearType smoothing is applied always, the basic font smoothing of'+
'Windows 98/2000/XP is applied only to certain font sizes. That sizes can be specified by the'+
'font designer, but usually they are in the ranges of 0-6 and 14+ points (pt).</p>    '+
'</div>    '+
'</div>';
