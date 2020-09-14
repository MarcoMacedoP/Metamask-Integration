const BASE_URL = "https://metamask.app.link";
import { build } from "eth-url-parser";

export function generatePaymentUrl(
  address: string,
  quantity: string
) {
  const url: string = build({
    scheme: "ethereum",
    prefix: "pay",
    target_address: address,
    parameters: {
      value: `${quantity}e18`,
    },
  });

  return url.replace("ethereum:", `${BASE_URL}/send/`);
}
