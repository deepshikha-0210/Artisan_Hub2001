// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Search Button Functionality
const searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click", () => {
  alert(
    "Search functionality would open here. In a production site, this would open a search modal or redirect to a search page.",
  )
})

// Cart Button Functionality
const cartBtn = document.getElementById("cartBtn")
cartBtn.addEventListener("click", () => {
  alert("Cart functionality would open here. In a production site, this would open the shopping cart sidebar or page.")
})

// Add scroll effect to header
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 20px rgba(107, 124, 89, 0.1)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Add animation styles to elements
const animateElements = document.querySelectorAll(
  ".category-card, .artisan-card, .testimonial-card, .sustainability-item",
)
animateElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Primary CTA Button Actions
const primaryButtons = document.querySelectorAll(".btn-primary")
primaryButtons.forEach((btn) => {
  if (btn.textContent.includes("Explore Crafts")) {
    btn.addEventListener("click", () => {
      document.querySelector("#shop").scrollIntoView({
        behavior: "smooth",
      })
    })
  } else if (btn.textContent.includes("Try AR")) {
    btn.addEventListener("click", () => {
      document.querySelector("#ar-try-on").scrollIntoView({
        behavior: "smooth",
      })
    })
  } else if (btn.textContent.includes("Try AR Now")) {
    btn.addEventListener("click", () => {
      console.log("AR Try-On feature activated")
      alert(
        "AR Try-On functionality would launch here. In a production site, this would activate the device camera and AR viewer.",
      )
    })
  }
})

// Secondary CTA Actions
const secondaryButtons = document.querySelectorAll(".btn-secondary")
secondaryButtons.forEach((btn) => {
  if (btn.textContent.includes("Try in AR")) {
    btn.addEventListener("click", () => {
      document.querySelector("#ar-try-on").scrollIntoView({
        behavior: "smooth",
      })
    })
  }
})

// Category Card Click Animation
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.98)"
    setTimeout(() => {
      card.style.transform = "translateY(-8px)"
    }, 100)
  })
})

// Artisan Card Hover Effect Enhancement
document.querySelectorAll(".artisan-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const image = card.querySelector(".artisan-image")
    image.style.transform = "scale(1.05)"
    image.style.transition = "transform 0.5s ease"
  })

  card.addEventListener("mouseleave", () => {
    const image = card.querySelector(".artisan-image")
    image.style.transform = "scale(1)"
  })
})

// Login Form Validation
const loginForm = document.getElementById("loginForm")
if (loginForm) {
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const emailError = document.getElementById("emailError")
  const passwordError = document.getElementById("passwordError")

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let isValid = true

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address"
      emailError.classList.add("active")
      isValid = false
    } else {
      emailError.classList.remove("active")
    }

    // Password validation
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters"
      passwordError.classList.add("active")
      isValid = false
    } else {
      passwordError.classList.remove("active")
    }

    if (isValid) {
      console.log("Login form submitted:", {
        email: emailInput.value,
        password: "***hidden***",
      })
      alert("Login successful! In production, this would authenticate the user.")
      loginForm.reset()
    }
  })

  // Toggle password visibility
  const togglePassword = document.getElementById("togglePassword")
  if (togglePassword) {
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password"
      passwordInput.type = type
    })
  }
}

// Signup Form Validation
const signupForm = document.getElementById("signupForm")
if (signupForm) {
  const fullNameInput = document.getElementById("fullName")
  const signupEmailInput = document.getElementById("signupEmail")
  const signupPasswordInput = document.getElementById("signupPassword")
  const confirmPasswordInput = document.getElementById("confirmPassword")
  const termsCheckbox = document.getElementById("terms")

  const fullNameError = document.getElementById("fullNameError")
  const signupEmailError = document.getElementById("signupEmailError")
  const signupPasswordError = document.getElementById("signupPasswordError")
  const confirmPasswordError = document.getElementById("confirmPasswordError")

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let isValid = true

    // Full name validation
    if (fullNameInput.value.trim().length < 2) {
      fullNameError.textContent = "Please enter your full name"
      fullNameError.classList.add("active")
      isValid = false
    } else {
      fullNameError.classList.remove("active")
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(signupEmailInput.value)) {
      signupEmailError.textContent = "Please enter a valid email address"
      signupEmailError.classList.add("active")
      isValid = false
    } else {
      signupEmailError.classList.remove("active")
    }

    // Password validation
    if (signupPasswordInput.value.length < 8) {
      signupPasswordError.textContent = "Password must be at least 8 characters"
      signupPasswordError.classList.add("active")
      isValid = false
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(signupPasswordInput.value)) {
      signupPasswordError.textContent = "Password must include uppercase, lowercase, and number"
      signupPasswordError.classList.add("active")
      isValid = false
    } else {
      signupPasswordError.classList.remove("active")
    }

    // Confirm password validation
    if (signupPasswordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match"
      confirmPasswordError.classList.add("active")
      isValid = false
    } else {
      confirmPasswordError.classList.remove("active")
    }

    // Terms checkbox validation
    if (!termsCheckbox.checked) {
      alert("Please agree to the Terms & Conditions")
      isValid = false
    }

    if (isValid) {
      console.log("Signup form submitted:", {
        fullName: fullNameInput.value,
        email: signupEmailInput.value,
        password: "***hidden***",
      })
      alert("Account created successfully! In production, this would create a new user account.")
      signupForm.reset()
    }
  })

  // Toggle password visibility for signup password
  const toggleSignupPassword = document.getElementById("toggleSignupPassword")
  if (toggleSignupPassword) {
    toggleSignupPassword.addEventListener("click", () => {
      const type = signupPasswordInput.type === "password" ? "text" : "password"
      signupPasswordInput.type = type
    })
  }

  // Toggle password visibility for confirm password
  const toggleConfirmPassword = document.getElementById("toggleConfirmPassword")
  if (toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener("click", () => {
      const type = confirmPasswordInput.type === "password" ? "text" : "password"
      confirmPasswordInput.type = type
    })
  }
}

// Shop Page - Add to Cart functionality
document.querySelectorAll(".btn-add-cart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    const productCard = btn.closest(".product-card")
    const productName = productCard.querySelector(".product-name, h3").textContent
    alert(`Added "${productName}" to cart!`)
    btn.textContent = "Added!"
    btn.style.backgroundColor = "var(--dark-olive)"
    setTimeout(() => {
      btn.textContent = "Add to Cart"
      btn.style.backgroundColor = ""
    }, 2000)
  })
})

// AR Try-On functionality
const startARBtn = document.getElementById("startAR")
const resetARBtn = document.getElementById("resetAR")
const captureARBtn = document.getElementById("captureAR")
const arCanvas = document.getElementById("arCanvas")
const arProductItems = document.querySelectorAll(".ar-product-item")

if (startARBtn) {
  let arActive = false

  startARBtn.addEventListener("click", () => {
    arActive = true
    const placeholder = arCanvas.querySelector(".ar-placeholder")
    if (placeholder) {
      placeholder.innerHTML = "<p>AR Mode Active - Point camera at surface</p>"
    }
    startARBtn.disabled = true
    resetARBtn.disabled = false
    captureARBtn.disabled = false
    console.log("[v0] AR Mode Started")
  })

  resetARBtn.addEventListener("click", () => {
    arActive = false
    const placeholder = arCanvas.querySelector(".ar-placeholder")
    if (placeholder) {
      placeholder.innerHTML = `
        <svg width="150" height="150" viewBox="0 0 300 300" fill="none">
          <rect x="50" y="50" width="200" height="200" rx="8" stroke="currentColor" stroke-width="3" stroke-dasharray="15 10"/>
          <circle cx="150" cy="150" r="50" stroke="currentColor" stroke-width="3"/>
          <path d="M 150 100 L 150 200 M 100 150 L 200 150" stroke="currentColor" stroke-width="3"/>
        </svg>
        <p>Click "Start AR" to begin</p>
      `
    }
    startARBtn.disabled = false
    resetARBtn.disabled = true
    captureARBtn.disabled = true
    arProductItems.forEach((item) => item.classList.remove("active"))
    console.log("[v0] AR Mode Reset")
  })

  captureARBtn.addEventListener("click", () => {
    alert("Screenshot captured! In production, this would save the AR view to your device.")
    console.log("[v0] AR Screenshot Captured")
  })
}

// AR Product Selection
arProductItems.forEach((item) => {
  item.addEventListener("click", () => {
    arProductItems.forEach((i) => i.classList.remove("active"))
    item.classList.add("active")
    const productName = item.querySelector("h4").textContent
    console.log(`[v0] Selected AR product: ${productName}`)
  })
})

// Cart Page - Quantity Controls
document.querySelectorAll(".qty-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action
    const input = btn.parentElement.querySelector(".qty-input")
    let value = Number.parseInt(input.value)

    if (action === "increase") {
      value++
    } else if (action === "decrease" && value > 1) {
      value--
    }

    input.value = value
    console.log(`[v0] Quantity updated to: ${value}`)
  })
})

// Cart Page - Remove Item
document.querySelectorAll(".remove-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const cartItem = btn.closest(".cart-item")
    const productName = cartItem.querySelector("h3").textContent
    if (confirm(`Remove "${productName}" from cart?`)) {
      cartItem.style.opacity = "0"
      cartItem.style.transform = "translateX(-20px)"
      setTimeout(() => {
        cartItem.remove()
        console.log(`[v0] Removed ${productName} from cart`)
      }, 300)
    }
  })
})

// Cart Page - Promo Code
const promoBtn = document.querySelector(".promo-btn")
if (promoBtn) {
  promoBtn.addEventListener("click", () => {
    const promoInput = document.querySelector(".promo-input")
    const code = promoInput.value.trim().toUpperCase()
    if (code) {
      if (code === "ARTISAN10") {
        alert("Promo code applied! 10% discount added.")
        console.log("[v0] Promo code applied:", code)
      } else {
        alert("Invalid promo code. Please try again.")
      }
      promoInput.value = ""
    }
  })
}

// Cart Page - Checkout
const checkoutBtn = document.querySelector(".checkout-btn")
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    console.log("[v0] Proceeding to checkout")
    alert("Proceeding to checkout! In production, this would navigate to the checkout page.")
  })
}

// Collections Page - Collection Card Click
document.querySelectorAll(".collection-card, .collection-card-large").forEach((card) => {
  card.addEventListener("click", () => {
    const collectionName = card.querySelector("h2, h3").textContent
    console.log(`[v0] Clicked collection: ${collectionName}`)
    card.style.transform = "scale(0.98)"
    setTimeout(() => {
      card.style.transform = ""
    }, 200)
  })
})

// Artisan Page - View Products Button
document.querySelectorAll(".artisan-card .btn-secondary").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation()
    const artisanCard = btn.closest(".artisan-card")
    const artisanName = artisanCard.querySelector("h3").textContent
    console.log(`[v0] Viewing products from: ${artisanName}`)
    window.location.href = "shop.html"
  })
})

// Log page load
console.log("ArtisanHub website loaded successfully")
console.log("Features: Premium Design, AR Try-On, Artisan Stories, Sustainability Focus")
console.log("[v0] All pages JavaScript loaded successfully")
