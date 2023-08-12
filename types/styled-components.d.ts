import 'styled-components';
import type {Theme} from "@theme/index"

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {};
}