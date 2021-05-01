document.getElementById('text').addEventListener('keyup', function () {
    var _0x7633x1 = tbtitle.text.value;
    _0x7633x1 = _0x7633x1.toLowerCase();
    _0x7633x1 = _0x7633x1.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    _0x7633x1 = _0x7633x1.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    _0x7633x1 = _0x7633x1.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    _0x7633x1 = _0x7633x1.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    _0x7633x1 = _0x7633x1.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    _0x7633x1 = _0x7633x1.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    _0x7633x1 = _0x7633x1.replace(/đ/g, 'd');
    _0x7633x1 = _0x7633x1.replace(/\[|\]|\(|\)|'|"|`|\\|%|!|#|\$|&|=|~|\^|<|>|\?|\/|\{|\}|\*|\||@|-|:|;/g, '');
    _0x7633x1 = _0x7633x1.replace(/,|\.| |_|\+/g, '-');
    tbtitle.result.value = _0x7633x1
});
document.getElementById('copyBtn').addEventListener('click', function () {
    document.getElementById('result').select();
    document.execCommand('copy')
});

function CountLeft(_0x7633x3, _0x7633x4, _0x7633x5) {
    if (_0x7633x3.value.length > _0x7633x5) {
        _0x7633x3.value = _0x7633x3.value.substring(0, _0x7633x5)
    } else {
        _0x7633x4.value = _0x7633x5 - _0x7633x3.value.length
    }
}
