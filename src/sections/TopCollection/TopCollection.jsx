import './TopCollection.scss'
import TableOther from "../../components/ui/Tables/TableOther/TableOther.jsx";
import Button from "../../components/ui/Button/Button.jsx";

const TopCollection = () => {
  return (
    <section className="top-collection container">
      <div className="top-collection__inner">
        <h2 className="top-collection__title">
          Top Collection
        </h2>
        <TableOther />
        <div className="top-collection__button">
          <Button
            mode='gray'
            label='Explore All'
            iconPosition='after'
            iconName='src/assets/arrow-gray-right.svg'
          />
        </div>
      </div>
    </section>
)

}

export default TopCollection