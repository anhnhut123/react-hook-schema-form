import React from 'react';
import { JSONSchema7 } from 'jsonschema7';
import { Methods, Platform } from './types';
export { Form };
type FormProps = {
    schema: JSONSchema7;
    uiSchema?: any;
    fields?: any;
    widgets?: any;
    methods: Methods;
    platform: Platform;
    onSubmit?: (data: any) => void;
    buttons?: React.ReactElement;
    ArrayFieldTemplate?: any;
    ObjectFieldTemplate?: any;
    FieldTemplate?: any;
    enableReinitialize?: boolean;
    registry?: {
        fields: any;
        widgets: any;
        ArrayFieldTemplate: any;
        ObjectFieldTemplate: any;
        FieldTemplate: any;
        rootSchema: any;
        formContext: any;
    };
};
declare function Form(props: React.PropsWithChildren<FormProps>): JSX.Element;
