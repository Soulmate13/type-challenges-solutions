//https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md
import { Equal } from '@type-challenges/utils';

type Includes<Array extends readonly any[], SearchedElement> =
    Array extends [infer FirstElement, ...infer Rest]
        ? Equal<FirstElement, SearchedElement> extends true
            ? true
            : Includes<Rest, SearchedElement>
        : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
