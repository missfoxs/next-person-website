import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    main: {
      backgroundColor: string;
      color: string;
    };
  }
}
