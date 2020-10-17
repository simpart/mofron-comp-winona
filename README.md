# mofron-comp-winona
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

winona button component for mofron

this source based on the codrops: https://github.com/codrops/ButtonStylesInspiration


# Install
```
npm install mofron mofron-comp-winona
```

# Sample
```html
<setting>
    <tag load="mofron-comp-winona">Button</tag>
</setting>

<Button size=(2rem,0.5rem) color=("#787878","#f0e6fa","#af6cf2")>
    <text>Test</text>
</Button>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | string: button text contents |
| | | | mofron-comp-text: button text component |
| | | mixed | text component config |
| | baseColor | mixed (color) | string: button background color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | accentColor | mixed (color) | string: button background color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | | undefined: call as getter |

