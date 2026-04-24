// Backward-compat shim: alias window.erpnext to window.garperp so any
// upstream erpnext.* JS reference keeps working on this garperp-based fork.
if (typeof window !== "undefined" && !window.erpnext && window.garperp) {
	window.erpnext = window.garperp;
}

import "./loan_common";
import "./custom_customer";
