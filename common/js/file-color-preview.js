window.onload = function() {
    let txtInput = document.getElementById('txt-input')
    let code = document.getElementById('code')

    const color_hex = /#([a-f0-9]{6}|[a-f0-9]{3})/ig
    const color_rgb = /([rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1})/g

    function parsingCode(code) {
        code = code.replace(color_hex, `<i class="i-block" style="background: #$1"></i>#$1`)
        code = code.replace(color_rgb, `<i class="i-block" style="background: $1"></i>$1`)

        return code
    }

    txtInput.addEventListener('input', function(e) {
        let value = e.target.value
        value = parsingCode(value)
        code.innerHTML = value
    }, false)
}