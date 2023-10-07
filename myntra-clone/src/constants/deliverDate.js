import { getAddress, updateAddress } from "../Redux/addressReducer/action";

export function deliverDate () {
    let currentDateArr = new Date().toISOString().split('T')[0];
    let currentDate = new Date(currentDateArr);
    let futureDate = new Date(currentDate);

    futureDate.setDate(currentDate.getDate() + 6);
    let formattedDate = futureDate.toString().split(' ').slice(0, 4);
    let day = formattedDate[0] + ',' + ' ' + formattedDate.slice(1).join(' ');

    return day;
}

export const handleSelectedAddress = async (id, dispatch, addressData) => {
    const selectedAddress = addressData?.find(el => el?.isSelected === true);

    if (selectedAddress) {
        const data = { isSelected: false };
        await dispatch(updateAddress(data, selectedAddress?.id));
        await dispatch(updateAddress({ isSelected: true }, id));
        await dispatch(getAddress());
        return;
    }

    await dispatch(updateAddress({ isSelected: true }, id));
    await dispatch(getAddress());
}