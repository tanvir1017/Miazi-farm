const PriceBreakdown = ({
  shippingCost,
  totalCartItemsPrice,
}: {
  shippingCost: number;
  totalCartItemsPrice: number;
}) => {
  return (
    <section className="text-center">
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-green-500 md:rounded-lg">
              <table className="min-w-full divide-y divide-green-500">
                <thead className="bg-green-100">
                  <tr className="divide-x divide-green-400">
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base font-bold text-green-500"
                    >
                      <span>Purpose</span>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base font-bold text-green-500"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-400 ">
                  <tr className="divide-x divide-green-400">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Total
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-xl text-gray-900 font-semibold">
                        {(shippingCost + totalCartItemsPrice).toFixed(2)}{" "}
                        &#2547;
                      </div>
                    </td>
                  </tr>
                  <tr className="divide-x divide-green-400">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Shipping
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-xl text-gray-900 font-semibold">
                        {shippingCost}
                        &#2547;
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceBreakdown;
