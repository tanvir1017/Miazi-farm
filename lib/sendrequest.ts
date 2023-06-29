export type PushNewUserType = {
  name: string;
  email: string;
  password: string;
};

export async function sendRequest(
  url: RequestInfo | URL,
  { arg }: { arg: PushNewUserType }
) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}
