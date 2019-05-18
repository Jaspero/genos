import {ComponentType} from '../../../shared/interfaces/component-type.enum';
import {SchemaType} from '../enums/schema-type.enum';

export function schemaToComponent(schemaType: SchemaType) {
  switch (schemaType) {
    case SchemaType.String:
      return {
        type: ComponentType.Input,
        configuration: {
          type: 'text'
        }
      };

    case SchemaType.Number:
    case SchemaType.Integer:
      return {
        type: ComponentType.Input,
        configuration: {
          type: 'number'
        }
      };
  }
}
