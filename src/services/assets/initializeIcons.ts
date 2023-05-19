import { IconLocalRegisterService } from "./icon-local-register.service";

export function initializeApp(iconService: IconLocalRegisterService): () => Promise<any> {
    return () => iconService.run().then(result => {});
  }