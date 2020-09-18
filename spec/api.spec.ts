import * as api from '../src/api';
import {deprecated} from '../src/deprecated';

describe('Public API', () => {
    it('deprecated', () => {
        expect(api.deprecated).toBe(deprecated);
    });
});
