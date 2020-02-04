import { click } from '@console/shared/src/test-utils/utils';
import { browser } from 'protractor';
import { isLoaded } from '@console/internal-integration-tests/views/crud.view';
import * as sidenavView from '@console/internal-integration-tests/views/sidenav.view';
import * as cnvView from '../views/containerNativeVirtualization.view';
import { confirmAction } from '../views/vm.actions.view';
import { waitFor } from '../tests/utils/utils';

describe('Uninstall Kubevirt', () => {
  beforeAll(async () => {
    await sidenavView.clickNavLink(['Operators', 'Installed Operators']);
    await isLoaded();
    await click(cnvView.namespaceButton);
    await click(cnvView.openshiftNamespaceButton);
  });

  it('Uninstall Kubevirt', async () => {
    await isLoaded();
    cnvView.elmKebab.click();
    await browser.sleep(1000);
    cnvView.elmUninstall.click();
    await waitFor(cnvView.kubevirtOperatorStatus, 'Succeeded', 5);
    await confirmAction();
  });
});
