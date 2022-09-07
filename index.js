const qaList = [
    {
        "question": "é auditável?",
        "short_answer": "<p>Sim, através do boletim de urna e RDV (registro digital do voto).</p>",
        "long_answer": "<p>Para responder essa pergunta é importante entender o que significa ser auditável. Os professores Roberto Rodrigues e Jorge Fernandes explicam o conceito de forma bem acessível em seu livro intitulado Auditoria e Conformidade de Segurança da Informação: \"De outra forma, auditoria é a expressão de opinião feita por um profissional devidamente qualificado, acerca de uma determinada situação, e documentada na forma de um relatório ou parecer\". Mas como podemos saber que essa auditoria está certa? Bom, é preciso haver evidências. A pesquisadora Nélia Fernandes explica isso em seu caderno educativo intitulado Segurança da Informação: \"Para o alcance efetivo dos objetivos da auditoria, o auditor de tecnologia da informação precisa conseguir evidência confiável, relevante, suficiente e proveitosa durante o curso da auditoria\". O boletim de urna é uma das evidências, podendo ser impresso para cada urna ou para toda uma seção eleitoral. O boletim da seção é público e fica disponível para consulta dos eleitores ao final da eleição.</p>",
        "sources": ["https://www.trf3.jus.br/documentos/rget/seguranca/CLRI/GSIC345_Auditoria_Conformidade_Seguranca_Informacao.pdf", "http://proedu.rnp.br/bitstream/handle/123456789/1538/15.6_versao_Finalizada_com_Logo_IFRO-Seguranca_Informacao_04_04_14.pdf?sequence=1&isAllowed=y"]
    },
    {
        "question": "permite recontagem?",
        "short_answer": "<p>Sim, através do RDV (registro digital do voto).</p>",
        "long_answer": "<p>O RDV é uma espécie de tabela digital, criada em 2003, em substituição ao voto impresso. Lá, são armazenados todos os votos à medida que são digitados no teclado da urna. Dessa forma, o RDV possibilita a recuperação dos votos para recontagem eletrônica, além de acrescentar segurança e transparência ao processo eleitoral. Veja o exemplo abaixo, no qual candidatos fictícios são representados por letras:</p> <img src=\"assets/rdv.jpg\" alt=\"Exemplo do RDV com dados inseridos por 1 eleitor\" loading=\"lazy\"> <br> <img src=\"assets/rdv2.jpg\" alt=\"Exemplo do RDV com dados inseridos por múltiplos eleitores\" loading=\"lazy\"> <p>Esses dados são gravados de maneira aleatória para não revelar a ordem dos votantes na seção eleitoral. A medida evita a possibilidade de se vincular o eleitor na fila da seção ao respectivo voto. Assim, o RDV garante o sigilo e, assim como numa urna de lona tradicional, onde as cédulas de papel ficam embaralhadas, impossibilita a vinculação de cada cédula a um eleitor. De posse do documento, é possível realizar não somente a recontagem dos votos como também a apuração e a totalização, independentemente dos procedimentos oficiais por parte da Justiça Eleitoral.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2021/Julho/registro-digital-do-voto-permite-recontagem-e-amplia-transparencia-do-processo-eleitoral", "https://braziljournal.com/o-voto-digital-e-seguro-eu-sei-porque-ajudei-a-cria-lo/"]
    },
    {
        "question": "passou por recontagem em 2018?",
        "short_answer": "<p>Não, segundo o TSE não houve pedido de recontagem por parte de nenhum partido.</p>",
        "long_answer": "<p>A advogada Aline Osório, secretária-geral do TSE, disse o seguinte em episódio do podcast A Malu Tá ON, apresentado pela jornalista Malu Gaspar: \"As entidades podem pedir depois das eleições todos os arquivos que foram usados nas eleições, para verificar. Se os partidos que questionam o resultado tivessem interesse em conferir, o fundo partidário tem dinheiro suficiente para contratar especialistas para isso. E nas eleições de 2018 não houve pedido. Isso poderia ter sido feito\".</p>",
        "sources": ["https://agorarn.com.br/ultimas/aline-osorio-e-ingenuo-achar-que-o-voto-impresso-vai-calar-o-discurso-de-fraude/", "https://www.idp.edu.br/corpo-docente/aline-osorio/"]
    },
    {
        "question": "permite o voto impresso?",
        "short_answer": "<p>Toda urna emite um comprovante impresso, chamado Boletim de Urna (BU), mostrando o somatório dos votos para cada candidato. Para auditoria, é utilizado também o RDV (registro digital do voto).</p>",
        "long_answer": "<p>O RDV é uma espécie de tabela digital, criada em 2003, em substituição ao voto impresso. Lá, são armazenados todos os votos à medida que são digitados no teclado da urna. O RDV é mais seguro que uma cédula de papel. De acordo com o chefe da Seção de Voto Informatizado do TSE, Rodrigo Coimbra, uma cédula pode ser subtraída, rasgada ou riscada. Já o RDV não permite que os dados sejam alterados, uma vez que utiliza diversas ferramentas de segurança da informação, como criptografia, assinatura digital e hash (resumo digital). Aos partidos políticos e às coligações, é permitida a obtenção de cópias dos arquivos de RDV de todas as urnas que julgarem necessárias. De posse do RDV e da especificação do formato do arquivo, disponibilizada pela Justiça Eleitoral, os partidos e as coligações desenvolvem aplicativos próprios para comparação da apuração oficial da urna eletrônica com aquela produzida pelo seu próprio software.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2021/Julho/registro-digital-do-voto-permite-recontagem-e-amplia-transparencia-do-processo-eleitoral", "https://www.tre-sp.jus.br/comunicacao/noticias/2018/Outubro/tse-disponibiliza-na-internet-boletins-de-urna-do-primeiro-turno-das-eleicoes"]
    },
    {
        "question": "pode ser verificada por mim?",
        "short_answer": "<p>Sim, através do boletim de urna (BU).</p>",
        "long_answer": "<p>Encerrada a votação, às 17h (horário local), a urna imprime cinco vias do boletim de urna. Uma dessas vias é afixada na porta da seção eleitoral, tornando público o resultado daquela urna. Outras vias ficam disponíveis para acesso dos fiscais dos partidos presentes em cada seção de votação. Essa conferência dos resultados também é disponibilizada a todos os eleitores, por meio do aplicativo mobile Boletim na Mão, disponibilizado pela Justiça Eleitoral.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2021/Junho/boletim-de-urna-traz-o-resultado-impresso-da-secao-de-votacao", "https://www.tse.jus.br/eleicoes/processo-eleitoral-brasileiro/votacao/votacao-segura", "https://www.tse.jus.br/eleicoes/eleicoes-2018"]
    },
    {
        "question": "está conectada à Internet?",
        "short_answer": "<p>Não. A urna não possui o hardware necessário para se conectar a uma rede e tampouco a qualquer forma de conexão com ou sem fio.</p>",
        "long_answer": "<p>O sistema operacional contido na urna é preparado pela Justiça Eleitoral de forma a não incluir nenhum mecanismo de software que permita a conexão com redes ou o acesso remoto. Além disso, as mídias utilizadas pela Justiça Eleitoral para a preparação da urna e gravação dos resultados são protegidas por técnicas modernas de assinatura digital.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2020/Fevereiro/voce-sabia-a-urna-eletronica-nao-fica-ligada-a-nenhum-dispositivo-da-internet"]
    },
    {
        "question": "passa por testes de segurança periódicos?",
        "short_answer": "<p>Sim, o Teste Público de Segurança (TPS) ocorre preferencialmente no ano anterior às eleições.</p>",
        "long_answer": "<p>O TPS mais recente ocorreu em 13 de maio de 2022. Em notícia no site oficial do TSE explica que: \"o objetivo dessa etapa é verificar se foram realizados os aprimoramentos necessários para reforçar a segurança dos sistemas a partir dos achados apontados pelos investigadores durante a fase anterior do TPS, realizada de 21 a 27 de novembro de 2021. Os investigadores responsáveis pelos cinco planos de ataque considerados bem-sucedidos no último TPS 2021, retornaram ao Tribunal para repetir, em uma versão ajustada do sistema, os testes que identificaram vulnerabilidades em novembro do ano passado. O Teste de Confirmação, que começou na última quarta-feira (11), está previsto no artigo 37 do Edital do TPS. Ao final do teste, sem contestação à excelência técnica das equipes, nenhum dos grupos obteve sucesso que comprometesse a violação da integridade ou o sigilo dos votos em uma eleição, principal objetivo do TPS. A partir de agora, o TSE trabalhará para implementar as soluções a tempo das Eleições 2022, e discutirá internamente outros aprimoramentos que poderão contribuir para a segurança das eleições.\"</p>",
        "sources": ["https://www.justicaeleitoral.jus.br/tps/", "https://www.tse.jus.br/comunicacao/noticias/2022/Maio/tse-encerra-etapa-de-confirmacao-do-teste-publico-de-seguranca-2021", "https://www.tse.jus.br/comunicacao/noticias/2022/Agosto/universidades-validam-nova-urna-e-codigos-fonte-dos-sistemas-eleitorais-357621"]
    },
    {
        "question": "passa por inspeção de código?",
        "short_answer": "<p>Sim, a inspeção é feita por especialistas contratados pelos partidos políticos, pela OAB, Forças Armadas e outras instituições.</p>",
        "long_answer": "<p>A abertura dos códigos-fontes é uma solenidade obrigatória realizada pelo TSE antes de cada eleição, e é uma das ações iniciais do Ciclo de Transparência Eleitoral. Esse conjunto de linhas de programação pode ser inspecionado por representantes técnicos dos partidos políticos, do Ministério Público, da Ordem dos Advogados do Brasil (OAB), das Forças Armadas, da Polícia Federal e de universidades, entre outras instituições. Durante o evento, o chefe da Seção do Voto Informatizado do TSE, Rodrigo Coimbra, destacou que a preparação do espaço é uma atividade da Justiça Eleitoral que acontece desde 2002. A análise dos códigos-fonte costumava ser realizada sempre seis meses antes de cada eleição, mas para o pleito de 2022, essa ação foi antecipada, com o objetivo de aperfeiçoamento das boas práticas e em razão da necessidade de se ampliar a transparência do processo eleitoral. “A estação de trabalho preparada pelo TSE disponibiliza dados contidos nos códigos-fonte dos principais sistemas eleitorais, incluindo todo o software da urna. Mostramos aqui para todos a disponibilidade e o apoio da Justiça Eleitoral para permitir que cada membro possa analisar as informações que ache pertinente, de forma plena e efetiva”, afirmou Coimbra.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2022/Agosto/inspecao-do-codigo-fonte-das-urnas-eletronicas-pelas-entidades-fiscalizadoras-segue-aberto-ate-a-lacracao-dos-sistemas", "https://www.tse.jus.br/comunicacao/noticias/2021/Outubro/tse-disponibiliza-espaco-para-analise-dos-codigos-fonte-dos-programas-do-sistema-eletronico-de-votacao"]
    },
    {
        "question": "possui um lacre físico?",
        "short_answer": "<p>Sim, a cerimônia de compilação, assinatura digital e lacração das urnas inspeção é realizada no TSE até 20 dias antes da eleição. Partidos políticos e outras entidades inspecionam a cerimônia presencialmente.</p>",
        "long_answer": "<p>No processo de compilação, assinatura digital e lacração das urnas:</p><ul><li>é efetuada a compilação dos programas computacionais na presença dos representantes;</li><li>é realizada a geração de resumos digitais (hashes) dos programas;</li><li>é dada permissão, aos representantes, para assinar digitalmente os sistemas eleitorais, com programa próprio, para posterior verificação (resolução-TSE);</li><li>os sistemas (fontes e executáveis) são assinados digitalmente pelo TSE, gravados em mídia não regravável, lacrados e armazenados em cofre;</li><li>os representantes poderão apresentar impugnação fundamentada ao TSE.</li>",
        "sources": ["https://www.tse.jus.br/eleicoes/urna-eletronica/seguranca-da-urna/apresentacao-digital-e-lacracao"]
    },
    {
        "question": "poderia ter seu código roubado?",
        "short_answer": "<p>Sim, mas nesse caso o criminoso precisaria roubar também mais duas coisas: as senhas e assinatura digitais utilizadas no TSE em Brasília.</p>",
        "long_answer": "<p>Por uma questão de segurança, os sistemas eleitorais só funcionam nos computadores da Justiça Eleitoral. Dessa forma, mesmo que os sistemas sejam interceptados, não há possibilidade de instalação dos arquivos em computadores externos. Os sistemas são ativados por meio de senhas geradas pelo TSE, ou seja, além de só funcionarem em computadores da Justiça Eleitoral, é necessário ainda o uso de senha para sua ativação. As senhas são geradas somente pelo Tribunal Superior Eleitoral, de forma personalizada e controlada, e distribuídas para todo o Brasil.</p>",
        "sources": ["https://www.tse.jus.br/eleicoes/urna-eletronica/seguranca-da-urna/apresentacao-digital-e-lacracao", "https://www.tre-pr.jus.br/comunicacao/noticias/2018/Junho/ex-juiz-escreve-artigo-sobre-as-urnas-eletronicas"]
    },
    {
        "question": "poderia ter seu código adulterado?",
        "short_answer": "<p>Sim, mas a fraude seria facilmente identificada ao comparar os resumos digitais (também chamados de hashes) da urna adulterada com o código-fonte original lacrado no TSE.</p>",
        "long_answer": "<p>Os resumos digitais (hashes) têm relação direta com a segurança do processo eleitoral e são gerados a cada eleição, na cerimônia de lacração dos sistemas, realizada no TSE. Eles possibilitam aos partidos políticos e ao Ministério Público verificar se os arquivos encontrados em qualquer urna do país correspondem aos arquivos lacrados no TSE. Esse hash é um SHA-512, padrão internacionalmente conhecido e aprovado pelo Federal Register dos EUA em 2003.</p>",
        "sources": ["https://www.tse.jus.br/eleicoes/urna-eletronica/seguranca-da-urna/hash/resumos-digitais-hashes-das-eleicoes-2020-1o-e-2o-turnos", "https://www.tse.jus.br/comunicacao/noticias/2020/Novembro/nota-de-esclarecimento-sobre-video-com-suposto-sistema-para-fraudar-urna-eletronica", "https://www.federalregister.gov/documents/2002/08/26/02-21599/announcing-approval-of-federal-information-processing-standard-fips-180-2-secure-hash-standard-a"]
    },
    {
        "question": "poderia ter votos pré-carregados?",
        "short_answer": "<p>Sim, mas esse tipo de fraude seria identificada antes mesmo do início da eleição atraǘes da impressão da zerésima, que ocorre para cada urna em cada seção em todo o Brasil.</p>",
        "long_answer": "<p>No dia marcado para a votação, às 7h, antes de o primeiro eleitor se dirigir à urna eletrônica para votar, o presidente da seção eleitoral, na presença dos mesários e fiscais dos partidos políticos, imprime então a zerésima, uma das fases mais importantes de auditoria das eleições. O documento contém toda a identificação da urna, comprova que nela estão registrados todos os candidatos e que não há voto computado para nenhum deles, ou seja, confirma que a urna tem “zero voto”. Após a impressão da zerésima, o presidente, os mesários e os fiscais presentes devem assiná-la.</p>",
        "sources": ["https://www.tse.jus.br/eleitor/glossario/termos/zeresima", "https://www.tse.jus.br/eleicoes/urna-eletronica/seguranca-da-urna/hash/resumos-digitais-hashes-das-eleicoes-2020-1o-e-2o-turnos"]
    },
    {
        "question": "é mais segura que a urna de lona?",
        "short_answer": "<p>Sim. Na época das urnas de lona e cédulas de papel, várias fraudes eram possíveis, algumas com nomes engraçados como voto formiguinha, voto estoque e urna emprenhada. Para mais explicações sobre cada tipo de fraude, veja as fontes abaixo.</p>",
        "long_answer": "<p>Alguns exemplos de fraudes que eram possíveis com a urna de lona que não são possíveis com a urna eletrônica:</p><ul><li><b>Urna emprenhada:</b> Antes do início da votação, cédulas preenchidas eram depositadas na urna de lona, ou seja, a urna, que deveria estar vazia, já chegava à seção eleitoral com votos dentro dela.</li><li><b>Substituição de urna:</b> Antes de chegar aos locais de votação, as urnas oficiais eram substituídas por outras repletas de cédulas preenchidas.</li><li><b>Voto formiguinha:</b> O eleitor recebia a cédula do mesário, entrava na cabina de votação e, em vez de preenchê-la e depositá-la, guardava a cédula em branco e colocava um papel qualquer na urna de lona. O organizador da fraude, que estava fora da seção, recebia a cédula oficial, assinalava os candidatos desejados e a entregava para outro eleitor. Esse eleitor depositava a cédula já preenchida, pegava outra em branco e a entregava para o organizador, que repetia o processo fraudulento à exaustão.</li><p>Para mais explicações sobre cada tipo de fraude e uma lista completa de fraudes, veja as fontes abaixo.</p></ul>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2018/Maio/urna-eletronica-extinguiu-ocorrencias-de-fraudes-em-eleicoes", "https://www.justicaeleitoral.jus.br/urna-eletronica/historico-das-fraudes-nas-eleicoes.html"]
    },
    {
        "question": "armazena os votos em disquete?",
        "short_answer": "<p>Não mais. Desde 2009, a urna utiliza uma Memória de Resultado (MR). Essa é uma memória do tipo flash, sistema semelhante ao utilizado pelos pen-drives.</p>",
        "long_answer": "<p>A partir do modelo de urna 2009 a gravação dos resultados é realizada em uma mídia chamada memória de resultado, que nada mais é que um pen-drive com capacidade de 128MB ou 512MB. As urnas modelo 2006 utilizavam a unidade de disquete até as eleições de 2010. Desde 2012 essas urnas foram atualizadas, com a substituição da unidade de disquete por uma entrada USB, onde é conectada a memória de resultado.</p><p>Atualmente utilizam-se apenas flash cards com memória de 512MB, mas já foram utilizados modelos com capacidades inferiores: 15MB - flash de votação (FV) nas urnas modelos 98 e 2000,16MB - FV das urnas modelo 2002, 30MB - flash de carga das urnas modelos 98, 200 e 2002, 32MB - flash de votação e de carga nas urnas modelo 2004, também foram utilizadas para as urnas modelo 2006 antes das eleições 2012, 64MB - utilizadas em SC nas votações com biometria de 2008, em São João Batista. Os modelos são oriundos de diversos fabricantes: Hitachi, Feiya, Unisys, SanDisk e Apacer.</p><img src=\"assets/flash.jpg\" alt=\"Cartão de memória flash 512MB utilizado pela versão 2013 da urna eletrônica\" loading=\"lazy\"><br><br>",
        "sources": ["https://www.tre-sc.jus.br/eleicoes/urna-eletronica/midias-utilizadas-na-urna-eletronica", "https://apps.tre-sc.jus.br/site/eleicoes/urna-eletronica/midias/index.html"]
    },
    {
        "question": "possui memória interna ou externa?",
        "short_answer": "<p>Ambas. A urna utiliza um flash card interno no qual fica instalado o sistema operacional, dados dos candidatos, etc. Memórias externas são utilizadas para instalar o software nas urnas e armazenar os votos.</p>",
        "long_answer": "<p>O flash card interno (FI) é a mídia responsável pelo armazenamento do sistema operacional, dos softwares aplicativos, dos dados de candidatos, eleitores e da seção eleitoral a que se destina a urna. O flash card externo possui, basicamente, duas funcionalidades: Pode ser usado como flash de votação (FV), que, acoplado à urna desde sua preparação para as eleições, possui cópia dos dados do FI, garantindo que as informações não sejam perdidas em caso de defeito na urna. Também pode funcionar como flash de carga (FC), utilizado para instalar nas urnas os sistemas necessários para a votação e demais aplicativos da eleição.</p><img src=\"assets/flash.jpg\" alt=\"Cartão de memória flash 512MB utilizado pela versão 2013 da urna eletrônica\" loading=\"lazy\"><br><br>",
        "sources": ["https://www.tre-sc.jus.br/eleicoes/urna-eletronica/midias-utilizadas-na-urna-eletronica", "https://apps.tre-sc.jus.br/site/eleicoes/urna-eletronica/midias/index.html"]
    },
    {
        "question": "transmite os votos pela Internet?",
        "short_answer": "<p>Sim. Os dados criptografados são transmitidos das seções eleitorais para o TRE do Distrito Federal através de um VPN.</p>",
        "long_answer": "<p>Através de um túnel VPN, na internet, que se conecta a rede privada da Justiça Eleitoral, os dados são transmitidos para o TRE-DF. Vale salientar, ainda que seja por meio da internet, o Tribunal conta com mecanismos de segurança para garantir que as informações que saem da urna cheguem ao seu destino sem qualquer alteração. Cada uma tem um conjunto de chaves próprias e únicas, que são certificados digitais aplicados em diversas funcionalidades. O pacote de informações que sai da urna é criptografado, e o \"túnel\" por onde ele passa até chegar ao TRE também recebe outra camada de criptografia, o que torna inviável qualquer invasão.O Coordenador de Infraestrutura do Tribunal Regional Eleitoral do Distrito Federal Carlos Roberto de Menezes explica que o sistema de transferência, assim como o nome diz, tem como única finalidade transferir os dados. Por mais que alguém tente algo, como roubar, interferir, ou fraudar, não terá sucesso. \"O kit de transmissão só envia dados para cá (TRE). E só manda para as portas específicas. Como a pessoa vai saber quais são as portas? Se o programa transportador não encontrar a assinatura que é gerada na urna eletrônica, não irá ler a mídia. Ele apenas lê o arquivo que sai da urna e manda para o TRE, e não tem acesso a mais nada. Qualquer coisa diferente, um ponto que seja, não será lido\".</p>",
        "sources": ["https://tre-df.jusbrasil.com.br/noticias/140231220/urna-eletronica-entenda-como-funciona-a-transmissao-dos-votos", "https://www.cnnbrasil.com.br/politica/da-urna-ao-resultado-entenda-o-caminho-do-voto/"]
    },
    {
        "question": "utiliza que tipo de hardware?",
        "short_answer": "<p>Tirando o hardware criptográfico, o resto é muito semelhante ao de um computador normal, embora bem menos \"potente\" do que a maioria dos dispositivos atuais.</p>",
        "long_answer": "<p>O modelo mais recente da urna em uso, o 2015, apresenta as seguintes especificações:Processador Intel ATOM Z510P de 1.10GHz;Memória RAM DDR2 SDRAM SO-DIMM de 200 vias, 512 Mbytes, expansível até 2 Gbytes;Placa de Vídeo VGA color on-board, com saída para LVDS;Monitor LCD TFT de 10,1 polegadas, 17:10, com resolução máxima WXVGA 1280x800 pixels. Hardware criptográfico: dispositivo que confere identidade individual às máquinas, assegurando a integridade e a origem de seus dados, além de garantir que a urna execute apenas sistemas oficiais e assinados pela Justiça Eleitoral.</p> <img src=\"assets/hw.jpg\" alt=\"Diagrama de arquitetura de hardware da urna UE2015.\" loading=\"lazy\"> <br>",
        "sources": ["https://www.tre-sp.jus.br/comunicacao/noticias/2021/Julho/por-dentro-da-urna-como-funciona-o-hardware-da-maquina-de-votar", "https://www.justicaeleitoral.jus.br/tps/arquivos/2021/apresentacao-7-tps-2021-cotel-urna-eletronica.pdf"]
    },
    {
        "question": "é utilizada há quanto tempo?",
        "short_answer": "<p>Há 26 anos, desde 1996.</p>",
        "long_answer": "<p>O ano de 1996 é um marco na história da informatização do processo eleitoral brasileiro, quando eleitores de 57 cidades tiveram o primeiro contato com a urna eletrônica. Nas Eleições Municipais de 1996, os votos de mais de 32 milhões de brasileiros - um terço do eleitorado da época - foram coletados por cerca de 70 mil urnas eletrônicas.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2021/Maio/urna-eletronica-25-anos-lancado-em-1996-equipamento-e-o-protagonista-da-maior-eleicao-informatizada-do-mundo", "https://www.tre-sc.jus.br/eleicoes/urna-eletronica/modelos/urna-modelo-1996-ue96"]
    },
    {
        "question": "suporta queda de energia?",
        "short_answer": "<p>Sim, a urna possui bateria interna e externa com duração combinada de até 20h.</p>",
        "long_answer": "<p>A bateria interna tem duração de até 10h e é acionada quando há falta de energia elétrica no local de votação. Se faltar energia elétrica na seção e a carga da bateria interna se esgotar, há uma bateria externa, com duração semelhante à da bateria interna.</p> <img src=\"assets/bateria.jpg\" alt=\"Imagens da bateria interna da urna UE2015.\" loading=\"lazy\">",
        "sources": ["https://www.tre-sp.jus.br/comunicacao/noticias/2021/Julho/por-dentro-da-urna-como-funciona-o-hardware-da-maquina-de-votar", "https://www.youtube.com/watch?v=08VlcZVh77s"]
    },
    {
        "question": "utiliza que sistema operacional?",
        "short_answer": "<p>As urnas atualmente funcionam com uma versão do Linux customizada pelo TSE, embora no passado já tenham sido utilizado os sistemas VirtuOS e WinCE.</p>",
        "long_answer": "<p>Sobre este tópico, o site do SEPRO publicou em 2018: \"as eleições municipais de 2008, que ocorrerão em outubro, chegarão com uma inovação: a utilização do sistema operacional Linux, em substituição ao VirtuOS e WinCE. Segundo o chefe da Seção de Voto Informativo do Tribunal Superior Eleitoral (TSE) Francisco Dejardene, o sistema 'será uma distribuição interna contendo o kernel - 2.6.16.57, algumas bibliotecas abertas (SDL, zlib, boost, jpeg, freetype, etc.) e drivers de dispositivos específicos das urnas eletrônicas e aplicativos desenvolvidos por equipe interna do TSE'\".</p>",
        "sources": ["http://intra.serpro.gov.br/noticias/urnas-eletronicas-utilizarao-linux", "https://www.tse.jus.br/comunicacao/noticias/2021/Maio/tse-entra-no-seleto-grupo-de-incorporador-de-funcionalidades-no-linux"]
    },
    {
        "question": "tem um sistema operacional seguro?",
        "short_answer": "<p>Uma melhoria de segurança desenvolvida pelo TSE foi integrada a versão 5.13 do kernel Linux.</p>",
        "long_answer": "<p>A recente modificação feita pela equipe exige que uma dessas assinaturas seja obrigatoriamente atestada pelo próprio sistema operacional, uma característica que não existe por padrão na plataforma Linux. \"Fizemos pequenas modificações no sistema operacional para deixar a urna ainda mais segura e as disponibilizamos para que fossem incorporadas em definitivo pelo Linux. Assim, a nova barreira de segurança que implantamos na urna passa a existir em qualquer computador\", destaca. O trabalho é capitaneado pelo programador Saulo Alessandre, que trabalha com o software desde 1997 e é o grande responsável pela adoção, em 2008, do sistema Linux nas urnas eletrônicas brasileiras. Coimbra informou que, em determinado momento das discussões, Saulo juntou esforços com Stefan Berger, membro do departamento de segurança da IBM, que também estava desenvolvendo um trabalho parecido. Coimbra ressalta que a escolha pelo Linux tem uma explicação técnica. Por ser um sistema de código aberto, uma grande comunidade de técnicos e programadores espalhados por todo o mundo participa da sua construção.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2021/Maio/tse-entra-no-seleto-grupo-de-incorporador-de-funcionalidades-no-linux", "https://www.youtube.com/watch?v=R-7acyBE1ew"]
    },
    {
        "question": "tem diversos modelos?",
        "short_answer": "<p>Sim. O modelo mais recente se chama UE2020. Outros modelos são: UE98, UE2000, UE2002, UE2004 e UE2006.</p>",
        "long_answer": "<p>A sigla \"UE\" significa \"Urna Eletrônica\". Até 2006, foram utilizados dois sistemas operacionais nas urnas eletrônicas: VirtuOS, nos modelos UE98 e UE2000, e Windows CE, nos modelos UE2002, UE2004 e UE2006. Nas eleições de 2008, utilizou-se um único sistema operacional, com base na plataforma Linux (software livre).</p>",
        "sources": ["https://web.archive.org/web/20210127204400/https://www.tse.jus.br/eleicoes/urna-eletronica/seguranca-da-urna/modelos-de-urna-eletronica", "https://www.tse.jus.br/comunicacao/noticias/2022/Agosto/universidades-validam-nova-urna-e-codigos-fonte-dos-sistemas-eleitorais-357621"]
    },
    {
        "question": "segue o princípio da independência de software?",
        "short_answer": "<p>Não, pois a urna não fornece uma cópia do voto ao eleitor em mídia não-regravável (ex.: papel, CD-ROM). As Forças Armadas questionaram o TSE sobre essa vulnerabilidade em 2022, e o tribunal sugeriu a seguinte solução: aumentar o número de urnas que passam pelo teste de integridade.</p>",
        "long_answer": "<p>O teste de integridade, desde que realizado nas condições normais de votação e em quantidade amostral com índice de confiabilidade adequado, tem o condão de afastar o correto funcionamento do software das urnas. Isso mitigaria a ausência do princípio da independência do software no sistema eleitoral brasileiro, aumentando a confiabilidade no processo como um todo. Recomenda-se que as urnas que comporão a amostragem do Teste de Integridade sejam sorteadas de forma estritamente aleatória, dentre todas as urnas que serão utilizadas no processo eleitoral. A resolução TSE nº 23.673 torna obrigatória a realização do Teste de Integridade nas eleições suplementares que ocorrerem em municípios com mais de 100 mil eleitores; e dobra a quantidade de seções eleitorais submetidas aos testes, que poderão ocorrer simultaneamente em mais de um local de grande circulação.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2022/Janeiro/resolucao-amplia-numero-de-urnas-submetidas-aos-testes-de-integridade-e-de-entidades-autorizadas-a-participar-de-auditorias", "https://www.tse.jus.br/comunicacao/noticias/arquivos/respostas-tecnicas-do-tribunal-superior-eleitoral-ao-oficio-md-no-007-2022/@@download/file/Ofi%CC%81cio%20007%20-%20Minuta%20de%20resposta%20-%20MEF.pdf"]
    },
    {
        "question": "passa por testes durante a eleição?",
        "short_answer": "<p>Sim, o Teste de Integridade ocorre nos Tribunais Regionais Eleitorais (TREs) no mesmo dia da eleição, e é acompanhado por empresa de auditoria externa.</p>",
        "long_answer": "<p>O processo consiste em uma espécie de batimento cujo objetivo é verificar se o voto depositado é o mesmo que será contabilizado pelo equipamento. O teste simula uma votação normal e leva em consideração as circunstâncias que podem ocorrer durante o pleito. Sendo assim, segue o mesmo rito de uma seção eleitoral comum, como emissão da zerésima (documento que comprova não haver nenhum voto na urna antes da votação) e impressão do Boletim de Urna (BU), relatório impresso que contém a apuração dos votos armazenados no equipamento. A auditoria não é realizada com a participação de eleitores reais nem engloba o sistema de identificação biométrica. Isso porque, de acordo com o secretário de Tecnologia da Informação do Tribunal Superior Eleitoral (TSE), Júlio Valente, seria inviável convencer uma quantidade suficiente de pessoas a, depois de votar normalmente na sua seção eleitoral de origem, se deslocar até o ambiente do teste, habilitar o voto no equipamento auditado e, por fim, contribuir e aguardar a conclusão do experimento. Mesmo que o eleitorado compareça, há outro risco capaz de atrapalhar o andamento dos trabalhos.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2022/Julho/saiba-tudo-sobre-o-teste-de-integridade-uma-das-etapas-de-auditoria-realizadas-no-dia-da-eleicao", "https://agenciabrasil.ebc.com.br/justica/noticia/2022-08/em-reuniao-com-defesa-tse-admite-teste-nas-urnas-com-eleitores-reais"]
    },
    {
        "question": "foi hackeada no passado?",
        "short_answer": "<p>Em 2020, o sistema administrativo do TSE sofreu tentativas de invasão, mas esse sistema nada tem a ver com o processo de votação. Boatos de que a urna foi invadida por especialistas dos EUA em 2017 também foram desmentidos pelo tribunal.</p>",
        "long_answer": "<p>As investidas de hackers nas Eleições 2020, com mais de 486 mil conexões por segundo, não obtiveram sucesso. Ou seja, o breve atraso na divulgação dos resultados do primeiro turno do pleito nada teve a ver com ataques, tendo sido provocado por um atraso na entrega de um equipamento usado na totalização, o que impediu que os técnicos do Tribunal fizessem os testes necessários.</p><p>Um texto difundido nas redes sociais em 2017 afirmou que a urna eletrônica brasileira teria sido invadida em uma convenção hacker realizada em julho de 2017, na cidade de Las Vegas, nos Estados Unidos. A mensagem diz também que os participantes do encontro teriam violado o sistema do equipamento brasileiro em menos de duas horas. O encontro de hackers ao qual a citação compartilhada na internet se refere de fato existe. É a Defcon, considerada a mais tradicional conferência de hackers do mundo. Portanto, essa parte do texto é verdadeira. Contudo, a informação de que a urna eletrônica brasileira teria sido invadida durante o evento é completamente falsa. Inclusive, naquela edição do evento, dois técnicos do Tribunal Superior Eleitoral (TSE) participaram da Defcon para conferir o trabalho dos especialistas que tentavam atacar os modelos de urnas usadas nos Estados Unidos. Ou seja, em nenhum momento os equipamentos brasileiros foram submetidos aos testes realizados durante a conferência.</p>",
        "sources": ["https://www.tse.jus.br/comunicacao/noticias/2021/Junho/fato-ou-boato-ataques-hackers-nao-afetaram-a-seguranca-das-eleicoes-municipais-de-2020", "https://www.justicaeleitoral.jus.br/fato-ou-boato/checagens/tentativa-de-ataque-hacker-ao-sistema-do-tse-nao-viola-seguranca-das-urnas/#", "https://www.tse.jus.br/comunicacao/noticias/2021/Julho/fato-ou-boato-urna-eletronica-brasileira-nao-foi-hackeada-nos-estados-unidos"]
    }
]

var counter = 1

function getSourceString(item) {
    let result = ""
    if (item.sources) {
        for (subitem of item.sources) {
            result += `<li><a href="${subitem}" target="_blank">${subitem}</a></li>`
        }
    }
    return result
}

function createQuestionTag(id, item) {
    let tagWrap = document.createElement("span")
    let link = document.createElement("a")
    tagWrap.className = "badge text-bg-success"
    link.innerText = item.question
    link.href = "#pergunta" + id;
    link.setAttribute("data-question", "pergunta" + id);
    tagWrap.appendChild(link)
    return tagWrap
}

function createAnswerBox(id, item) {
    let outerWrapper = document.createElement("div")
    let header = document.createElement("h2")
    let headerBtn = document.createElement("button")
    let accWrapper = document.createElement("div")
    let accBody = document.createElement("div")

    outerWrapper.className = "accordion-item"
    header.className = "accordion-header"
    headerBtn.className = "accordion-button collapsed"
    accWrapper.className = "accordion-collapse collapse"
    accBody.className = "accordion-body"

    header.id = "pergunta" + id
    headerBtn.innerText = "A urna eletrônica " + item.question
    let ansStr = "<b>Resposta curta</b>" + item.short_answer + "<b>Resposta longa</b>" + item.long_answer
    let sourceStr = getSourceString(item)
    if (sourceStr) {
        ansStr += "<b>Fontes</b><ul>" + sourceStr + "</ul>"
    }
    accBody.innerHTML += ansStr
    headerBtn.setAttribute("data-bs-toggle", "collapse")
    headerBtn.setAttribute("data-bs-target", "#collapse" + id)
    accWrapper.id = "collapse" + id

    header.appendChild(headerBtn)
    accWrapper.appendChild(accBody)
    outerWrapper.appendChild(header)
    outerWrapper.appendChild(accWrapper)
    return outerWrapper
}

for (qaItem of qaList) {
    let questionTag = createQuestionTag(counter, qaItem)
    let answerBox = createAnswerBox(counter, qaItem)
    document.querySelector("#questions").appendChild(questionTag)
    document.querySelector("#answers").appendChild(answerBox)
    counter++;
}

var a_list = document.querySelectorAll("a")
for (item of a_list) {
    item.addEventListener('click', function(e) {
        var target = e.target;
        var el = document.querySelector("#" + target.getAttribute("data-question") + " button")
        el.click()
    })
}