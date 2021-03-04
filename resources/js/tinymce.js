window.TinymceApi = process.env.MIX_TINYMCE_API;

window.TinymceInit = {
    menubar: 'file edit view insert format tools table help',
    plugins: [
        'print preview paste importcss searchreplace autolink autosave',
        'save directionality code visualblocks visualchars fullscreen image',
        'link media template codesample table charmap hr pagebreak nonbreaking',
        'anchor toc insertdatetime advlist lists wordcount imagetools',
        'textpattern noneditable help charmap quickbars emoticons autoresize'
    ],
    toolbar:
        'undo redo | bold italic underline strikethrough | ' +
        ' fontselect fontsizeselect formatselect | alignleft aligncenter ' +
        'alignright alignjustify | outdent indent |  numlist bullist | forecolor' +
        ' backcolor removeformat | pagebreak | charmap emoticons | fullscreen  ' +
        'preview save print | insertfile image media template link anchor codesample | ltr rtl restoredraft',
    autoresize_bottom_margin: 50,
    autosave_interval: '10s',
    min_height: 800,
    skin: 'oxide',
    toolbar_mode: 'sliding',
    toolbar_sticky: true,
    importcss_append: true,
    textpattern_patterns: [
        {start: '#', format: 'h1'},
        {start: '##', format: 'h2'},
        {start: '###', format: 'h3'},
        {start: '####', format: 'h4'},
        {start: '#####', format: 'h5'},
        {start: '######', format: 'h6'},
        {start: '*', end: '*', format: 'italic'},
        {start: '**', end: '**', format: 'bold'},
        {start: '`', end: '`', cmd: 'CodeSample'},
    ]
};
