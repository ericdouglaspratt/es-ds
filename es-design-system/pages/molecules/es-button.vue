<template>
    <div>
        <h1>
            EsButton
        </h1>

        <p>
            When using a button, please ensure that the copy style is
            <b-link
                href="https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case"
                target="_blank">
                Sentence case.
            </b-link>
        </p>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">
                        Variant
                    </th>
                    <th scope="col">
                        Small
                    </th>
                    <th scope="col">
                        Default
                    </th>
                    <th scope="col">
                        Large
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">
                        Primary
                    </td>
                    <td>
                        <es-button size="sm">
                            Small button
                        </es-button>
                    </td>
                    <td>
                        <es-button>
                            Medium button
                        </es-button>
                    </td>
                    <td>
                        <es-button size="lg">
                            Large button
                        </es-button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">
                        Primary (Disabled)
                    </td>
                    <td>
                        <es-button
                            disabled
                            size="sm">
                            Small button
                        </es-button>
                    </td>
                    <td>
                        <es-button disabled>
                            Medium button
                        </es-button>
                    </td>
                    <td>
                        <es-button
                            disabled
                            size="lg">
                            Large button
                        </es-button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">
                        Primary Outline
                    </td>
                    <td>
                        <es-button
                            :outline="true"
                            size="sm">
                            Small button
                        </es-button>
                    </td>
                    <td>
                        <es-button :outline="true">
                            Medium button
                        </es-button>
                    </td>
                    <td>
                        <es-button
                            :outline="true"
                            size="lg">
                            Large button
                        </es-button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">
                        Dark (Secondary)
                    </td>
                    <td>
                        <es-button
                            variant="dark"
                            :outline="false"
                            size="sm">
                            Small button
                        </es-button>
                    </td>
                    <td>
                        <es-button
                            variant="dark"
                            :outline="false">
                            Medium button
                        </es-button>
                    </td>
                    <td>
                        <es-button
                            variant="dark"
                            :outline="false"
                            size="lg">
                            Large button
                        </es-button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">
                        Dark (disabled)
                    </td>
                    <td>
                        <es-button
                            disabled
                            variant="dark"
                            :outline="false"
                            size="sm">
                            Small button
                        </es-button>
                    </td>
                    <td>
                        <es-button
                            disabled
                            variant="dark"
                            :outline="false">
                            Medium button
                        </es-button>
                    </td>
                    <td>
                        <es-button
                            disabled
                            variant="dark"
                            :outline="false"
                            size="lg">
                            Large button
                        </es-button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">
                        Dark Outline
                    </td>
                    <td>
                        <es-button
                            variant="dark"
                            :outline="true"
                            size="sm">
                            Small button
                        </es-button>
                    </td>
                    <td>
                        <es-button
                            variant="dark"
                            :outline="true">
                            Medium button
                        </es-button>
                    </td>
                    <td>
                        <es-button
                            variant="dark"
                            :outline="true"
                            size="lg">
                            Large button
                        </es-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { BLink } from 'bootstrap-vue';
import { EsButton } from '@energysage/es-vue-base';

export default {
    name: 'EsButtonDocs',
    components: {
        BLink,
        EsButton,
    },
};
</script>
