import { getKcContext } from "keycloakify";

export const { kcContext } = getKcContext<{ pageId: "login.ftl" }>({
  mockData: [
    {
      pageId: "login.ftl",
    },
  ],
});

const keyCloakManager = {
  kcContext,
};

console.log(kcContext);

export type KcContextType = NonNullable<typeof kcContext>;
export default keyCloakManager;
