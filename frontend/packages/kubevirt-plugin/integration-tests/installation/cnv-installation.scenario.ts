import { click } from '@console/shared/src/test-utils/utils';

import { isLoaded } from '@console/internal-integration-tests/views/crud.view';
import * as sidenavView from '@console/internal-integration-tests/views/sidenav.view';
import * as cnvView from '../views/containerNativeVirtualization.view';
import { waitFor } from '../tests/utils/utils';

describe('Kubevirt Installation', () => {
  beforeAll(async () => {
    await sidenavView.clickNavLink(['Operators', 'OperatorHub']);
    await isLoaded();
    await click(cnvView.namespaceButton);
    await click(cnvView.openshiftNamespaceButton);
  });

  it('Install Kubevirt', async () => {
    await isLoaded();
    cnvView.elmCnvOperator.click();
    cnvView.elmInstall.click();
    await waitFor(cnvView.kubevirtOperatorStatus, 'Succeeded', 5);
  });
});
