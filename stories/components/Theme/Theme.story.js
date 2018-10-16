import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Theme', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Planets</h3>

      <div class="w-50">
        <a-planet />
        <a-planet size="sm" />
        <a-planet size="lg" />
        <a-planet size="xl" />
        <a-planet variant="blue-purple" />
        <a-planet variant="green" />
        <a-planet variant="orange" />
      </div>

      <h3 class="h3 font-weight-bold mb-4">Comets</h3>

      <div class="w-50">
        <a-comet />
        <a-comet variant="asteroid" />
        <a-comet variant="blue" />
      </div>
    </div>
    `
}))
