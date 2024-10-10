document.querySelectorAll('input[name="demoOption"]').forEach(
  (someDemoOptionElement) => {
    someDemoOptionElement.addEventListener('change', (someChangeEvent) => {
      import(someChangeEvent.target.value).then((demoModule) => {
        const demoContainerElement = document.getElementById(
          'demo-container',
        );
        demoContainerElement.replaceChildren();
        demoModule.loadDemo(demoContainerElement);
      });
    });
  },
);
