import { ShoppingCart, Timer, Package, Coffee } from "lucide-react";
import coffeeImg from "./assets/coffee.svg";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <Header />
      <main>
        <div id="content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul className="info-list">
            <li>
              <ShoppingCart
                className="icon yellow-dark"
                size={32}
                weight="fill"
              />
              <span>Compra simples e segura</span>
            </li>

            <li>
              <Package className="icon base-text" size={32} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </li>

            <li>
              <Timer className="icon yellow" size={32} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </li>

            <li>
              <Coffee className="icon purple" size={32} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
        <div>
          <img src={coffeeImg} alt="" />
        </div>
      </main>
      <section>
        <h2>Nossos cafés</h2>

        <ul>
          <div>
            <section className="CaféCatalogo">
              <img src="/images/coffees/expresso.png" alt="" />
              <p>Tradicional</p>
              <h2>Expresso Tradicional</h2>
              <h3>O tradicional café feito com água quente e grãos moídos.</h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/americano.png" alt="" />
              <p>Tradicional</p>
              <h2>Expresso Americano</h2>
              <h3>Expresso díluido, menos intenso que o normal.</h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/expresso-cremoso.png" alt="" />
              <p>Tradicional</p>
              <h2>Expresso Cremoso</h2>
              <h3>Café expresso tradicional com espuma cremosa.</h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/cafe-gelado.png" alt="" />
              <p>Tradicional | Gelado</p>
              <h2>Expresso Gelado</h2>
              <h3>Bebida preárada com café expresso e cubos de gelo.</h3>
              <h5>R$9,90</h5>
            </section>

            <section className="CaféCatalogo2">
              <img src="/images/coffees/cafe-com-leite.png" alt="" />
              <p>Tradicional | Com leite</p>
              <h2>Café com leite</h2>
              <h3>Meio a meio de expresso tradicional com leite vaporizado.</h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/latte.png" alt="" />
              <p>Tradicional | Com leite</p>
              <h2>Latte</h2>
              <h3>
                Uma dose de café expresso com o dobro de leite e espuma cremosa.
              </h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/capuccino.png" alt="" />
              <p>Tradicional | Com leite</p>
              <h2>Capuccino</h2>
              <h3>
                Bebida com canela feita de doses iguais de café, leite e espuma.
              </h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/macchiato.png" alt="" />
              <p>Tradicional | Com leite</p>
              <h2>Macchiato</h2>
              <h3>
                Café expresso misturado com um pouco de leite quente e espuma.
              </h3>
              <h5>R$9,90</h5>
            </section>

            <section className="CaféCatalogo3">
              <img src="/images/coffees/mocaccino.png" alt="" />
              <p>Tradicional | Com leite</p>
              <h2>Mocaccino</h2>
              <h3>
                Café expresso com calda de chocolate, pouco leite e espuma.
              </h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/chocolate-quente.png" alt="" />
              <p>Especial | Com leite</p>
              <h2>Chocolate quente</h2>
              <h3>
                Bebida feita com chocolate dissolvido no leite quente e café.
              </h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/cubano.png" alt="" />
              <p>Especial | Alcoólico | Gelado</p>
              <h2>Cubano</h2>
              <h3>
                Drink gelado de café expresso com rum, creme de leite e hortelã.
              </h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/havaiano.png" alt="" />
              <p>Especial</p>
              <h2>Havaiano</h2>
              <h3>Bebida adocicada preparada com café e leite de coco.</h3>
              <h5>R$9,90</h5>
            </section>

            <section className="CaféCatalogo4">
              <img src="/images/coffees/cubano.png" alt="" />
              <p>Especial | Alcoólico | Gelado</p>
              <h2>Árabe</h2>
              <h3>Bebida preparada com grãos de café árabe e especiarias.</h3>
              <h5>R$9,90</h5>

              <img src="/images/coffees/havaiano.png" alt="" />
              <p>Especial</p>
              <h2>Irlândes</h2>
              <h3>
                Bebida a base de café, uísque irlandês, açúcar e chantilly.
              </h3>
              <h5>R$9,90</h5>
            </section>
          </div>
        </ul>

        {/* COLOCAR A RENDERIZAÇÃO DOS CARDS AQUI */}
      </section>
    </>
  );
}
