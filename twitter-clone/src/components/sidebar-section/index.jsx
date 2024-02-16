import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export default function SidebarSection({ title, children, more }) {
  return (
    <section className="bg-[#16181c] mb-4 rounded-2xl overflow-hidden border border-[#16181c]">
      <h5 className="py-3 px-5 flex items-center text-xl font-extrabold leading-6 text-[#e7e9ea]">
        {title}
      </h5>
      <div className="grid">{children}</div>
      {more && (
        <Link
          to={more}
          className="h-[52px] flex items-center px-4 text-[#1d9bf0] transition-colors hover:bg-[#eff4f41a]"
        >
          Daha fazla göster
        </Link>
      )}
    </section>
  );
}

SidebarSection.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

SidebarSection.defaultProps = {
  more: false,
};
