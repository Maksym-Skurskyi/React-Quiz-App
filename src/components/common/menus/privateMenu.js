import { commonMenu } from "./commonMenu"

export const privateMenu = [
	...commonMenu,
	{
		to: "/quiz-creator",
		label: `Create test`,
		exact: false,
	}
]
