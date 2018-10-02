import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX(
  'Inputs',
  () => ({
    template: `
    <div class="section pb-0 section-components">
        <div class="container mb-5">
            <!-- Inputs -->
            <h3 class="h3 font-weight-bold mb-4">Inputs</h3>
            <div class="mb-3">
                <small class="text-uppercase font-weight-bold">Form controls</small>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <a-input placeholder="Regular">

                    </a-input>
                    <a-input placeholder="Search"
                                addon-left-icon="fa fa-search">
                    </a-input>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a-input placeholder="Regular" disabled>
                    </a-input>
                    <a-input placeholder="Birthday"
                                addon-right-icon="fa fa-calendar">
                    </a-input>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a-input placeholder="Success" :valid="true">
                    </a-input>

                    <a-input placeholder="Error" :valid="false" error="Input error">
                    </a-input>
                </div>
                <div class="col-lg-12 mb-5">
                    <a-input placeholder="Small" size="s" />
                    <a-input placeholder="Regular" />
                    <a-input placeholder="Large" size="l" />
                </div>
                <div class="col-12" style="flex-direction: row;
                display: flex;
                align-items: center;">
                    <a-input placeholder="Regular" />
                    <a-button state="neutral" style="margin-left: .3rem">Submit</a-button>
                </div>
            </div>
        </div>
        <div class="py-5 bg-secondary">
            <div class="container">
                <!-- Inputs (alternative) -->
                <div class="mb-3">
                    <small class="text-uppercase font-weight-bold">Form controls (alternative)</small>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <a-input alternative
                                    placeholder="Regular">

                        </a-input>
                        <a-input alternative
                                    placeholder="Search"
                                    addon-left-icon="fa fa-search">
                        </a-input>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a-input alternative
                                    placeholder="Regular" disabled>
                        </a-input>
                        <a-input alternative
                                    placeholder="Birthday"
                                    addon-right-icon="fa fa-calendar">
                        </a-input>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a-input alternative
                                    placeholder="Success" :valid="true">
                        </a-input>

                        <a-input alternative
                                    placeholder="Error" :valid="false">
                        </a-input>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
  })
)
