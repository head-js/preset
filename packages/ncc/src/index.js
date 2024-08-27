import Ajv from 'ajv';


const schema = {
  type: 'object',
  properties: {},
};

const ajv = new Ajv({ allErrors: true, useDefaults: 'empty', removeAdditional: true });
const validate = ajv.compile(schema);


export { validate };
