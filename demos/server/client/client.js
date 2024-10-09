console.log('client')

document.querySelectorAll('input[name="demoOption"]').forEach((someDemoOptionElement) => {
    someDemoOptionElement.addEventListener('change', (someChangeEvent) => {
        import(someChangeEvent.target.value).then((demoModule) => {
            demoModule.loadDemo()
        })
    })
})