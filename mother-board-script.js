
const textPanel = document.getElementById('text-panel');
const panelTitle = textPanel.querySelector('.text-panel-title');
const panelDesc = textPanel.querySelector('p:nth-of-type(2)');

// Data for each component
const descriptions = {
  'usb-input': {
    title: 'USB Input',
    desc: 'The USB port connects various devices like keyboard, mouse, scanner, and printer to the computer.'
  },
  'keyboard-input': {
    title: 'Keyboard Input',
    desc: 'This connector allows PS/2 or USB keyboards to interface with the motherboard.'
  },
  'cmos': {
    title: 'CMOS Battery',
    desc: 'The CMOS battery powers the BIOS firmware and keeps system time when the computer is off.'
  },
  'cpu': {
    title: 'CPU Slot',
    desc: 'The socket where the central processing unit (CPU) is installed — the brain of the computer.'
  },
  'ram': {
    title: 'RAM Slots',
    desc: 'Holds RAM modules that provide working memory for active tasks in the system.'
  }
};

// Add hover listeners to each invisible trigger
Object.keys(descriptions).forEach(id => {
  const trigger = document.getElementById(id);

  trigger.addEventListener('mouseenter', () => {
    panelTitle.textContent = descriptions[id].title;
    panelDesc.textContent = descriptions[id].desc;
    textPanel.style.display = 'block';
  });

  trigger.addEventListener('mouseleave', () => {
    textPanel.style.display = 'none';
  });
});


document.getElementById('go-to-bios').addEventListener('click', function () {
    document.body.classList.remove('fade-in');
    document.body.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = "bios.html";
    }, 500); // match fade-out time
});