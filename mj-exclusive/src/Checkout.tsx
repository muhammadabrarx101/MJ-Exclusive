import React, { useState } from 'react';
import { useCart } from './CartContext';
import { ShoppingBag, ChevronRight, Info, CreditCard, Truck, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

type CheckoutStep = 'shipping' | 'payment' | 'card-details' | 'thankyou';

export const Checkout = () => {
  const { cart, removeFromCart, totalPricePKR, totalItems, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    province: '',
    city: '',
    zip: '',
    phone: '',
    paymentMethod: 'cod',
    comment: '',
    discountCode: '',
    cardNumber: '',
    expiryMonth: 'January',
    expiryYear: '2026',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'shipping') {
      setStep('payment');
    } else if (step === 'payment') {
      if (formData.paymentMethod === 'cod') {
        handlePlaceOrder();
      } else {
        setStep('card-details');
      }
    } else if (step === 'card-details') {
      handlePlaceOrder();
    }
  };

  const handlePlaceOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('thankyou');
      clearCart();
    }, 2000);
  };

  const resetCardFields = () => {
    setFormData(prev => ({
      ...prev,
      cardNumber: '',
      expiryMonth: 'January',
      expiryYear: '2026',
      cvv: ''
    }));
  };

  if (cart.length === 0 && step !== 'thankyou') {
    return (
      <div className="pt-40 pb-24 bg-obsidian min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={48} className="mx-auto mb-6 text-brand-gold/30" />
          <h2 className="text-white text-3xl font-display mb-4 uppercase tracking-widest">Your Cart is Empty</h2>
          <Link to="/shop" className="text-brand-gold font-heading text-xs tracking-widest uppercase border-b border-brand-gold/30 pb-1">Start Exploring</Link>
        </div>
      </div>
    );
  }

  if (step === 'thankyou') {
    return (
      <div className="pt-40 pb-24 bg-obsidian min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-xl px-6"
        >
          <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <Check size={40} className="text-obsidian" />
          </div>
          <h2 className="text-white text-4xl font-display mb-4 uppercase tracking-widest leading-tight">Thank You For <span className="serif-italic text-brand-gold">Shopping</span></h2>
          <p className="text-white/60 font-light mb-12 text-lg">Your heritage journey has begun. We've sent a confirmation email to {formData.email}. Our artisans are now preparing your order.</p>
          <Link to="/shop" className="px-12 py-5 gold-gradient text-obsidian font-heading font-bold text-xs tracking-widest uppercase hover:scale-105 transition-transform inline-block">
            Shop More Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-24 bg-obsidian min-h-screen text-white">
      <div className="container mx-auto px-6">
        {step === 'card-details' ? (
          <div className="max-w-xl mx-auto bg-white text-black p-8 md:p-12 shadow-2xl relative">
             <div className="flex justify-between items-start mb-12 border-b border-gray-100 pb-6 gap-4">
                <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">NAME</p>
                   <h2 className="text-xl font-display tracking-widest uppercase text-obsidian">MJ EXCLUSIVE</h2>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">AMOUNT TO PAY</p>
                   <p className="text-lg md:text-xl font-heading font-bold text-obsidian">PKR {(totalPricePKR + 149).toLocaleString()}.00</p>
                </div>
             </div>

             <div className="space-y-8 mb-12">
                <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-widest font-bold">
                   <div className="space-y-1">
                      <span className="text-gray-400">ORDER</span>
                      <p className="text-black">MJ</p>
                   </div>
                   <div className="space-y-1">
                      <span className="text-gray-400">ORDER DESCRIPTION</span>
                      <p className="text-black">13625443</p>
                   </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                   <div className="flex items-center gap-4 mb-6">
                      <CreditCard size={20} className="text-gray-400" />
                      <span className="text-xs font-bold tracking-widest uppercase">Payment Using Card</span>
                   </div>
                   
                   <div className="space-y-6">
                      <div>
                         <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-3">Card Number *</label>
                         <input 
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="XXXX XXXX XXXX XXXX"
                            className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-obsidian transition-colors text-lg tracking-[0.2em]"
                         />
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                         <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-3">Expiry Month</label>
                            <select 
                                name="expiryMonth"
                                value={formData.expiryMonth}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-obsidian bg-transparent"
                            >
                               {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                                 <option key={m} value={m}>{m}</option>
                               ))}
                            </select>
                         </div>
                         <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-3">Expiry Year</label>
                            <select 
                                name="expiryYear"
                                value={formData.expiryYear}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-obsidian bg-transparent"
                            >
                               {["2025", "2026", "2027", "2028", "2029", "2030"].map(y => (
                                 <option key={y} value={y}>{y}</option>
                               ))}
                            </select>
                         </div>
                      </div>

                      <div>
                         <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-3">Validation Code ( CVV/CVC/CID )</label>
                         <input 
                            name="cvv"
                            type="password"
                            maxLength={4}
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="***"
                            className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-obsidian"
                         />
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex flex-col gap-4">
                <button 
                   onClick={handlePlaceOrder}
                   className="w-full py-5 bg-obsidian text-white font-heading font-bold text-xs tracking-widest uppercase hover:bg-black transition-colors"
                >
                   {loading ? 'Processing...' : 'Pay'}
                </button>
                <div className="flex gap-4">
                   <button onClick={resetCardFields} className="flex-1 py-4 border border-gray-100 text-gray-400 font-heading font-bold text-[10px] tracking-widest uppercase hover:bg-gray-50 transition-colors">Reset</button>
                   <button onClick={() => setStep('payment')} className="flex-1 py-4 border border-gray-100 text-red-500 font-heading font-bold text-[10px] tracking-widest uppercase hover:bg-red-50 transition-colors">Cancel</button>
                </div>
             </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Checkout Flow */}
            <div className="w-full lg:w-2/3">
              <div className="flex items-center gap-4 mb-12 text-[10px] uppercase tracking-[0.3em] font-heading font-bold text-white/30 text-left">
                {step === 'shipping' ? (
                  <span className="text-brand-gold">Shipping Address</span>
                ) : (
                  <>
                    <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setStep('shipping')}>Shipping Address</span>
                    <ChevronRight size={12} className="opacity-30" />
                    <span className="text-brand-gold">Review & Payment</span>
                  </>
                )}
              </div>

              <h1 className="font-display text-3xl md:text-4xl mb-12 uppercase tracking-widest text-left">
                {step === 'shipping' ? 'Shipping Address' : 'Review & Payment'}
              </h1>

              <form onSubmit={handleNextStep} className="space-y-12">
                <AnimatePresence mode="wait">
                  {step === 'shipping' ? (
                    <motion.div 
                      key="shipping"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 gap-8">
                        <div className="relative">
                          <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">Email Address *</label>
                          <div className="relative">
                            <input 
                              required
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full bg-charcoal-dark border-b border-white/10 py-4 px-0 focus:outline-none focus:border-brand-gold transition-colors text-white"
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 group cursor-help">
                              <Info size={14} className="text-white/20" />
                              <div className="absolute right-0 bottom-full mb-2 w-48 p-3 bg-white text-black text-[10px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded shadow-xl">
                                You can create an account after checkout.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">First Name *</label>
                            <input required name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-charcoal-dark border-b border-white/10 py-4 focus:outline-none focus:border-brand-gold transition-colors" />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">Last Name *</label>
                            <input required name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-charcoal-dark border-b border-white/10 py-4 focus:outline-none focus:border-brand-gold transition-colors" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">Street Address: Line 1 *</label>
                          <input required name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-charcoal-dark border-b border-white/10 py-4 focus:outline-none focus:border-brand-gold transition-colors" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">Country *</label>
                            <input readOnly value="Pakistan" className="w-full bg-charcoal-dark border-b border-white/10 py-4 focus:outline-none text-white/50" />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">State/Province *</label>
                            <input required name="province" value={formData.province} onChange={handleInputChange} className="w-full bg-charcoal-dark border-b border-white/10 py-4 focus:outline-none focus:border-brand-gold transition-colors" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">City *</label>
                            <select required name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-charcoal-dark border-b border-white/10 py-4 focus:outline-none focus:border-brand-gold transition-colors text-white appearance-none">
                              <option value="">--Select City--</option>
                              <option value="Karachi">Karachi</option>
                              <option value="Lahore">Lahore</option>
                              <option value="Islamabad">Islamabad</option>
                              <option value="Rawalpindi">Rawalpindi</option>
                              <option value="Faisalabad">Faisalabad</option>
                              <option value="Multan">Multan</option>
                              <option value="Peshawar">Peshawar</option>
                              <option value="Quetta">Quetta</option>
                              <option value="Sialkot">Sialkot</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">Zip/Postal Code *</label>
                            <input required name="zip" value={formData.zip} onChange={handleInputChange} className="w-full bg-charcoal-dark border-b border-white/10 py-4 focus:outline-none focus:border-brand-gold transition-colors" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">Phone Number *</label>
                          <div className="relative">
                            <input required name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-charcoal-dark border-b border-white/10 py-4 focus:outline-none focus:border-brand-gold transition-colors" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 group cursor-help">
                              <Info size={14} className="text-white/20" />
                              <div className="absolute right-0 bottom-full mb-2 w-48 p-3 bg-white text-black text-[10px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded shadow-xl">
                                For order updates via WhatsApp.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-12 border-t border-white/10">
                        <h3 className="text-xs font-heading font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-3"><Truck size={16} className="text-brand-gold" /> Shipping Methods</h3>
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">See our Shipping Policy</p>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs uppercase tracking-widest">
                            <thead className="text-white/40 border-b border-white/5 font-medium">
                              <tr>
                                <th className="py-4 font-normal">Select Method</th>
                                <th className="py-4 font-normal">Price</th>
                                <th className="py-4 font-normal">Method Title</th>
                                <th className="py-4 font-normal">Carrier Title</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-white/5">
                                <td className="py-6">
                                  <label className="flex items-center gap-4 cursor-pointer">
                                    <input type="radio" defaultChecked name="shippingMethod" className="accent-brand-gold" />
                                  </label>
                                </td>
                                <td className="py-6 font-bold">PKR 149.00</td>
                                <td className="py-6 text-white/50">Fixed</td>
                                <td className="py-6 text-white/50">Local Shipment</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="payment"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-12"
                    >
                      <div className="space-y-6">
                        <h3 className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase text-white/40 flex items-center gap-3"><CreditCard size={16} className="text-brand-gold" /> Payment Method</h3>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            { id: 'cod', label: 'Cash On Delivery', desc: 'Pay when your package arrives.' },
                            { id: 'payfast', label: 'PayFast Payment via Credit/Debit Cards, Bank Accounts and Wallets', desc: 'Secure payment gateway.' },
                            { id: 'easypaisa', label: 'Easypaisa', desc: 'Pay via Easypaisa Mobile Account.' },
                            { id: 'jazzcash', label: 'JazzCash', desc: 'Pay via JazzCash Mobile Account.' },
                            { id: 'card', label: 'Debit/Credit Card', desc: 'Direct secure card payment.' }
                          ].map(method => (
                            <label key={method.id} className={`p-6 border flex items-start gap-4 cursor-pointer transition-all ${formData.paymentMethod === method.id ? 'border-brand-gold bg-brand-gold/5' : 'border-white/10 hover:border-white/20'}`}>
                              <input 
                                type="radio" 
                                name="paymentMethod" 
                                value={method.id} 
                                checked={formData.paymentMethod === method.id}
                                onChange={handleInputChange}
                                className="mt-1 accent-brand-gold"
                              />
                              <div>
                                  <span className="block text-xs font-bold tracking-widest uppercase mb-1">{method.label}</span>
                                  <span className="text-[10px] text-white/40 italic">{method.desc}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-8">
                         <div className="relative">
                          <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">Apply Discount Code</label>
                          <div className="flex gap-4">
                            <input 
                              name="discountCode"
                              placeholder="ENTER CODE"
                              value={formData.discountCode}
                              onChange={handleInputChange}
                              className="bg-charcoal-dark border-b border-white/10 py-4 flex-1 focus:outline-none focus:border-brand-gold transition-colors uppercase text-xs tracking-widest"
                            />
                            <button type="button" className="text-brand-gold text-[10px] font-bold tracking-widest border-b border-brand-gold/30">APPLY</button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">Leave Comment</label>
                          <textarea 
                            name="comment"
                            rows={3}
                            value={formData.comment}
                            onChange={handleInputChange}
                            className="w-full bg-charcoal-dark border border-white/10 p-4 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 gold-gradient text-obsidian font-heading font-bold text-xs tracking-widest uppercase hover:scale-[1.02] transition-transform flex items-center justify-center gap-4"
                >
                  {loading ? 'Processing...' : step === 'shipping' ? 'Proceed to Payment' : formData.paymentMethod === 'cod' ? 'Complete Order' : 'Proceed to Payment Details'}
                </button>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-charcoal-dark p-8 border border-white/5 sticky top-40">
                <h2 className="font-display text-2xl mb-8 uppercase tracking-widest text-center border-b border-white/10 pb-6">Order Summary</h2>
                
                <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4 group">
                      <div className="w-16 h-24 bg-obsidian overflow-hidden border border-white/5">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-heading font-bold tracking-widest uppercase truncate">{item.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                          <span className="text-[10px] text-white/40 uppercase">S: {item.selectedSize}</span>
                          <span className="text-[10px] text-white/40 uppercase">C: {item.selectedColor}</span>
                          <span className="text-[10px] text-white/40 uppercase">Q: {item.quantity}</span>
                        </div>
                        <p className="text-brand-gold text-xs font-heading mt-2 font-bold">{item.price}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(`${item.id}-${item.selectedColor}-${item.selectedSize}`)}
                        className="text-white/20 hover:text-red-500 transition-colors self-start"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10 uppercase tracking-widest text-[10px] font-bold">
                  <div className="flex justify-between text-white/50">
                    <span>Subtotal ({totalItems} Items)</span>
                    <span>Rs. {totalPricePKR.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Shipping</span>
                    <span>Rs. 149</span>
                  </div>
                  <div className="flex justify-between text-xl font-display text-brand-gold border-t border-white/10 pt-4 mt-4">
                    <span>Total</span>
                    <span>Rs. {(totalPricePKR + 149).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
