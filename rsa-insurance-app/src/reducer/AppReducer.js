const AppReducer = (state, action) => {    
    switch (action.type) {
        case "ADD_EXTRA":            
          return { addOns: [...state.addOns, action.payload], togglePayment: state.togglePayment }
        case "REMOVE_EXTRA":
          const filteredAddons = state.addOns.filter(addOn => addOn.id !== action.payload.id)
          return { addOns: [...filteredAddons], togglePayment: state.togglePayment }
        case "TOGGLE_PAYMENT":
          return { addOns: state.addOns, togglePayment: !state.togglePayment }
        default:
          return state;
      }
}

export default AppReducer;
