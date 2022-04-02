import './heading.css';

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
        <a
          onClick={(prop) => {
            prop.preventDefault();
            document
              .querySelector(`#${heading.id}`)
              .scrollIntoView({ behaviour: 'smooth' });
          }}
          href={`#${heading.id}`}
        >
          {heading.title}
        </a>
        <ul>
          {heading.items.map((child) => (
            <li
              key={child.id}
              className={child.id === activeId ? 'active' : ''}
            >
              <a
                onClick={(prop) => {
                  prop.preventDefault();
                  document
                    .querySelector(`#${child.id}`)
                    .scrollIntoView({ behavior: 'smooth' });
                }}
                href={`#${child.id}`}
              >
                {child.title}
              </a>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

export default Headings;
