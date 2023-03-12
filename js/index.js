function cssShadow({
    font_size,
    offset_x,
    offset_y,
    blur,
    color,
    opacity,
    rgba
}) {
    const cssStyles = `${offset_x}px ${offset_y}px ${blur}px ${rgba}`
    $('h1').css('text-shadow', cssStyles)
    $('#resultHex').val(`background-color: ${color}\nopacity: ${opacity}\nfont-size: ${font_size}px`)
    $('#resultRgba').val(`text-shadow: ${offset_x}px ${offset_y}px ${blur}px ${rgba}\nfont-size: ${font_size}px`)
}

cssShadow({
    font_size: 40,
    offset_x: 4,
    offset_y: 1,
    blur: 0,
    color: '#ff0000',
    opacity: 1,
    rgba: 'rgba(255, 0, 0, 1)',
})

$(document).on('input change', 'input', function() {
    const font_size = $('#font_size').val()
    const offset_x = $('#offset_x').val()
    const offset_y = $('#offset_y').val()
    const blur = $('#blur').val()
    const color = $('#color').val()
    const opacity = $('#opacity').val()

    let red16 = `${color[1]}${color[2]}`
    let green16 = `${color[3]}${color[4]}`
    let blue16 = `${color[5]}${color[6]}`

    let red10 = parseInt(red16, 16)
    let green10 = parseInt(green16, 16)
    let blue10 = parseInt(blue16, 16)
    const rgba = `rgba(${red10}, ${green10}, ${blue10}, ${opacity})`

    $('h1').css('font-size', `${font_size}px`)

    cssShadow({
        font_size: font_size,
        offset_x: offset_x,
        offset_y: offset_y,
        blur: blur,
        color: color,
        opacity: opacity,
        rgba: rgba,
    })
})