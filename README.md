# Lista de Tarefas (To-Do)

Aplicação de lista de tarefas desenvolvida em React.

## Funcionalidades

- Adicionar tarefa com título
- Exibe data e horário de criação de cada tarefa
- Excluir tarefas com confirmação antes da exclusão
- Não é possível adicionar tarefas em branco
- Limitado a 100 caracteres por tarefa
- Mensagem exibida quando não há nenhuma tarefa na lista
- Interface responsiva

## Como Rodar

```bash
git clone https://github.com/Patrickx7/to-do-list.git
cd to-do-list
npm install
npm run dev
```

## Tecnologias
- React
- Vite
- JavaScript
- CSS

## Decisões Técnicas 

Nessa aplicação foi usado o useState, pois ele funciona como um mensageiro para o react, toda vez que é adicionado uma nova tarefa, ele manda uma "mensagem" ao react para se comunicar com o navegador e redesenhar as informações novas.

Vite foi utilizado para montar o projeto e rodar localmente

Utilizei JavaScript e CSS pois essas tecnologias estou mais familiarizado em meu dia a dia e isso facilitou para a conclusão do projeto.

O redux não foi utilizado pois traria mais complexidade ao sistema, pois ele é necessário quando é utilizado várias páginas, e como, utilizamos somente uma, não foi necessário o uso dessa tecnologia.