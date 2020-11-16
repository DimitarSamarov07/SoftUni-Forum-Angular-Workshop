import {IUser} from "./user";
import {IBase} from "./base";

export interface ITheme extends IBase {
  subscribers: string[];
  posts: string[];
  themeName: string;
  userId: IUser;
}
