fetch('/widgets').then((getWidgetsResponse) => getWidgetsResponse.json()).then(
  (widgetFilenames) => {
    const bodyChildFragment = document.createDocumentFragment();
    const widgetSelectElement = document.createElement('div');
    widgetSelectElement.style.display = 'flex';
    widgetSelectElement.style.flexDirection = 'row';
    bodyChildFragment.appendChild(widgetSelectElement);
    const widgetContainerElement = document.createElement('div');
    widgetContainerElement.id = `widget-container`;
    bodyChildFragment.appendChild(widgetContainerElement);
    widgetFilenames.forEach((someWidgetFilename) => {
      const widgetOptionElement = document.createElement('input');
      widgetOptionElement.id = `${someWidgetFilename}-option`;
      widgetOptionElement.type = 'radio';
      widgetOptionElement.name = 'widgetOption';
      widgetOptionElement.value = `/widgets/${someWidgetFilename}`;
      widgetOptionElement.addEventListener('change', (someChangeEvent) => {
        import(someChangeEvent.target.value).then((widgetModule) => {
          const SelectedWidgetElement = widgetModule.default;
          const selectedWidgetTagName = SelectedWidgetElement.name.replace(
            /([a-z])([A-Z])/g,
            '$1-$2',
          )
            .toLowerCase()
            .replace(/^-/, '');
          if (customElements.get(selectedWidgetTagName) === undefined) {
            customElements.define(
              selectedWidgetTagName,
              SelectedWidgetElement,
            );
          }
          const selectedWidgetElement = new SelectedWidgetElement();
          widgetContainerElement.replaceChildren(selectedWidgetElement);
        });
      });
      const optionLabelElement = document.createElement('label');
      optionLabelElement.for = widgetOptionElement.id;
      optionLabelElement.innerText = someWidgetFilename;
      widgetSelectElement.appendChild(widgetOptionElement);
      widgetSelectElement.appendChild(optionLabelElement);
    });
    document.body.appendChild(bodyChildFragment);
  },
);