const form = document.querySelector('[name="Verify"]')
const inputs = document.querySelectorAll('.inputs input')

function handleInput(e) {
    const input = e.target

    if(input.nextElementSibling && input.value) {
        input.nextElementSibling.focus()
        input.nextElementSibling.select()
    }
}

function handlePaste(e) {
    const paste = e.clipboardData.getData('text')

    inputs.forEach((input, i) => {
        input.value = paste[i] || ''
    })

    if(paste.length == inputs.length) {
        form.submit()
    }
}


form.addEventListener('input', handleInput)
inputs[0].addEventListener('paste', handlePaste)

// 123456