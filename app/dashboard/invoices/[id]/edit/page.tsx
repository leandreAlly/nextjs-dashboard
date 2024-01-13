import Breadcrumbs from '../../../../ui/invoices/breadcrumbs';
import Form from '../../../../ui/invoices/edit-form';
import { fetchCustomers } from '../../../../lib/data';
import { fetchInvoiceById } from '../../../../lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [customers, invoice] = await Promise.all([
    fetchCustomers(),
    fetchInvoiceById(id),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
